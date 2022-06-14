import { Game } from "./game";

const DOM_el = (function () {
    // Container that wraps the whole screen
    const main_container = document.querySelector(".main_container");

    // Both boards
    const player1_board = document.querySelector(".player1_board");
    const computer_board = document.querySelector(".computer_board");

    const restart_btn = document.querySelector(".restart");

    // Container for all the player ships at the beginning of a match
    const ships_container = document.querySelector(".ships_container");

    // Generates a board tile
    const create_board_tile = () => {
        const board_tile = document.createElement("div");
        board_tile.classList.add("board_tile");

        return board_tile;
    };

    // Populates a player's board
    const populate_board = (board, player) => {
        // Removes all the tiles in the board
        while (board.lastChild) {
            board.lastChild.remove();
        }

        // Generates 1 tile for each tiles in the gameboard object of each player
        // It should always be 100, but it's better not to hard-code it
        for (let i = 0; i < player.gameboard.tiles.flat().length; i++) {
            const board_tile = create_board_tile();

            // Gives a tile its coordinates as a string
            board_tile.setAttribute(
                "data-id",

                // Secures the number will always have 2 digits
                i.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                })
            );

            // Identifies whose is the board
            board_tile.setAttribute("player", player.type);

            // Class to identify that the tile cannot be clicked
            // The computer's board can only be clicked once all the user's ships have been placed
            board_tile.classList.add("no");

            board.append(board_tile);
        }
    };

    // Gets all the tiles of a certain player
    const get_board_tiles = (player) => {
        const board_tiles = document.querySelectorAll(
            `.board_tile[player=${player.type}]`
        );

        return Array.from(board_tiles);
    };

    // Gets a specific tile from a player, according to its coordinates
    const get_specific_tile = (player, [row, column]) => {
        return document.querySelector(
            `.board_tile[player="${player.type}"][data-id="${row}${column}"]`
        );
    };

    // Gets the next tile on the board, horizontally or vertically
    const get_next_tile = (axis, player, tile) => {
        if (!(axis === "y" || axis === "x")) return;

        switch (axis) {
            case "x":
                return tile.nextElementSibling;

            case "y":
                // The next tile in the y axis is actually 10 tiles away
                return document.querySelector(
                    `[data-id="${
                        Number(tile.getAttribute("data-id")) + 10
                    }"][player="${player.type}"]`
                );

            default:
                return;
        }
    };

    // Creates a ship to be placed at the start of a game
    const create_ship_DOM = (parts) => {
        const ship_container = document.createElement("div");
        ship_container.setAttribute("size", parts);
        ship_container.classList.add("ship_container");
        ship_container.setAttribute("draggable", true);

        // The button in the middle is to change the orientation of the ship
        const change_orientation = document.createElement("button");
        change_orientation.classList.add("change_orientation");
        change_orientation.addEventListener("click", (e) => {
            e.target.closest(".ship_container").classList.toggle("vertical");
        });

        for (let i = 0; i < parts; i++) {
            const indiv_part = document.createElement("div");
            indiv_part.classList.add("ship_part");

            ship_container.append(indiv_part);
        }

        ship_container.append(change_orientation);
        ships_container.append(ship_container);
    };

    // Checks if a certain ship can be placed at a certain tile
    const is_valid = (ship_size, ship_orientation, tile, player) => {
        // The intended coordinates
        const row = Number(tile.getAttribute("data-id")[0]);
        const column = Number(tile.getAttribute("data-id")[1]);

        let next = null;
        switch (ship_orientation) {
            case "x":
                // Ship cannot be too close to the borders
                if (column + ship_size > 10) return false;

                next = tile;
                // Checks if there already is a ship at the location
                for (let i = 0; i < ship_size; i++) {
                    if (
                        next.classList.contains("ship_part") ||
                        player.gameboard.tiles[row][column + i] === 0
                    )
                        return false;
                    next = get_next_tile(ship_orientation, player, next);
                }

                return true;

            case "y":
                // Ship cannot be too close to the borders
                if (row + ship_size > 10) return false;

                next = tile;
                // Checks if there already is a ship at the location
                for (let i = 0; i < ship_size; i++) {
                    if (
                        next.classList.contains("ship_part") ||
                        player.gameboard.tiles[row + i][column] === 0
                    )
                        return false;
                    next = get_next_tile(ship_orientation, player, next);
                }

                return true;

            default:
                return false;
        }
    };

    // Places a ship in both the player gameboard(obj) and in the DOM gameboard
    const place_ship_DOM = (player, length, [row, column], axis) => {
        // The first tile of a ship
        const base_tile = get_board_tiles(player).find(
            (tile) => tile.getAttribute("data-id") === `${row}${column}`
        );

        // If the tile is valid
        if (is_valid(length, axis, base_tile, player)) {
            const ship_tiles = [base_tile];

            // Get the next tiles depending on the size of the ship
            switch (axis) {
                case "x":
                    for (let i = 0; i < length - 1; i++) {
                        ship_tiles.push(
                            get_next_tile(axis, player, ship_tiles[i])
                        );
                    }
                    break;

                case "y":
                    for (let i = 0; i < length - 1; i++) {
                        ship_tiles.push(
                            get_next_tile(axis, player, ship_tiles[i])
                        );
                    }
                    break;

                default:
                    break;
            }

            // Places the ship in the gameboard object
            const placed_ship = player.gameboard.place_ship(
                length,
                [row, column],
                axis
            );

            // Only shows the ships of the user
            if (player.type === "human")
                ship_tiles.forEach((tile) => tile.classList.add("ship_part"));
        } else {
            return false;
        }
    };

    // All the container for the ships at the start
    const all_ship_containers = () => {
        return [...document.querySelectorAll(".ship_container")];
    };

    // Removes all the children from the ships container and adds new ones
    const reset_ships_container = () => {
        while (ships_container.lastChild) ships_container.lastChild.remove();

        create_ship_DOM(2);
        create_ship_DOM(3);
        create_ship_DOM(3);
        create_ship_DOM(4);
        create_ship_DOM(5);
    };

    // Attacks the other player board
    const attack_DOM = (player, [row, column] = [0, 0]) => {
        switch (player.type) {
            // If it is the computer
            case "AI":
                // Attacks randomly
                player.attack();

                const other_player = Game.player1;

                // The coordinates of the random tile attaked
                const r = Game.cds[0];
                const c = Game.cds[1];

                const tile_hit = DOM_el.get_specific_tile(other_player, [r, c]);
                tile_hit.classList.add("hit");
                break;

            // If it is the user
            case "human":
                // Attacks based on the coordinates
                player.attack([row, column]);
                break;

            default:
                return;
        }
    };

    // Allows the user to select a tile and attack the computer board
    const select_tile = (target) => {
        // TODO: Improve the current "turn switch system"
        target.classList.add("hit");
        let coords = target.getAttribute("data-id");

        attack_DOM(Game.player1, [Number(coords[0]), Number(coords[1])]);

        setTimeout(() => {
            // If the game is not over, it is now the computer's turn
            if (Game.end[0] === false) play_turn(Game.computer);
        }, 300);
    };

    // Allows a player to play its turn
    // Honestly, dunno why i did this, but here it is
    const play_turn = (player) => {
        switch (player.type) {
            case "AI":
                attack_DOM(player, [0, 0]);
                break;

            case "human":
                break;

            default:
                return;
        }
    };

    // Adds functionality to the start game button
    const activate_start_button = () => {
        const btn = document.querySelector(".start_game_btn");

        // When clicked, removes itself and allows the computer board to be attacked
        btn.addEventListener("click", () => {
            setTimeout(() => {
                btn.remove();
            }, 300);

            get_board_tiles(Game.computer).forEach((tile) => {
                tile.classList.remove("no");
                tile.addEventListener(
                    "click",
                    (e) => {
                        select_tile(e.target);
                    },
                    { once: true }
                );
            });
        });
    };

    // Just allows the drop event to work
    // JS is crazy sometimes
    document.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
    });

    // Adds functionality for the ships to be placed at the start of the game
    const activate_drag_over_tiles = (player) => {
        // Adds the event listeners for all the tiles
        get_board_tiles(player).forEach((tile) => {
            tile.addEventListener("drop", (e) => {
                e.preventDefault();

                // The ship being dragged,
                const selected = document.querySelector(".being_dragged");

                // its size, axis, and the coordinates of the tile it was dropped on
                const ship_size = Number(selected.getAttribute("size"));
                const current_row = Number(tile.getAttribute("data-id")[0]);
                const current_column = Number(tile.getAttribute("data-id")[1]);
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                // If is a valid tile, place it there
                if (is_valid(ship_size, orientation, tile, player)) {
                    place_ship_DOM(
                        player,
                        ship_size,
                        [current_row, current_column],
                        orientation
                    );

                    // and removes the preview class added previously
                    let next = tile;
                    for (let i = 0; i < ship_size; i++) {
                        next.classList.remove("placing_preview");
                        next = get_next_tile(orientation, player, next);
                    }

                    // Removes the draggable ship from the DOM
                    selected.remove();
                }

                if (ships_container.childElementCount === 0) {
                    const play_game_button = document.createElement("button");
                    play_game_button.classList.add("start_game_btn");
                    play_game_button.textContent = "Start Game";

                    ships_container.append(play_game_button);

                    activate_start_button();
                }
            });

            // When a ship is dragged into a tile
            tile.addEventListener("dragenter", (e) => {
                // Gets the ship being dragged
                const selected = document.querySelector(".being_dragged");

                // And its characteristics
                const ship_size = Number(selected.getAttribute("size"));
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                // If the ship can be placed in said tile
                if (is_valid(ship_size, orientation, tile, player)) {
                    setTimeout(() => {
                        // Adds the preview class on the tiles where the ship will be
                        let next = tile;
                        for (let i = 0; i < ship_size; i++) {
                            next.classList.add("placing_preview");
                            next = get_next_tile(orientation, player, next);
                        }
                    }, 0.1);
                }
            });

            // When a ship is dragged out of a tile
            tile.addEventListener("dragleave", (e) => {
                const selected = document.querySelector(".being_dragged");

                const ship_size = Number(selected.getAttribute("size"));
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                // Removes the preview class of the tiles
                let next = tile;
                for (let i = 0; i < ship_size; i++) {
                    if (next) {
                        next.classList.remove("placing_preview");
                        next = get_next_tile(orientation, player, next);
                    }
                }
            });
        });
    };

    return {
        main_container,
        player1_board,
        computer_board,
        create_board_tile,
        populate_board,
        get_board_tiles,
        get_next_tile,
        get_specific_tile,
        create_ship_DOM,
        all_ship_containers,
        activate_drag_over_tiles,
        place_ship_DOM,
        reset_ships_container,
        restart_btn,
    };
})();

export { DOM_el };
