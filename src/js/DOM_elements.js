import { Game } from "./game";

const DOM_el = (function () {
    const main_container = document.querySelector(".main_container");

    const player1_board = document.querySelector(".player1_board");
    const computer_board = document.querySelector(".computer_board");

    const ships_container = document.querySelector(".ships_container");

    const create_board_tile = () => {
        const board_tile = document.createElement("div");
        board_tile.classList.add("board_tile");

        return board_tile;
    };

    const populate_board = (board, player) => {
        while (board.lastChild) {
            board.lastChild.remove();
        }

        for (let i = 0; i < player.gameboard.tiles.flat().length; i++) {
            const board_tile = create_board_tile();
            board_tile.setAttribute(
                "data-id",
                i.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                })
            );

            board_tile.setAttribute("player", player.type);
            board_tile.classList.add("no");
            board.append(board_tile);
        }
    };

    const get_board_tiles = (player) => {
        const board_tiles = document.querySelectorAll(
            `.board_tile[player=${player.type}]`
        );

        return Array.from(board_tiles);
    };

    const get_next_tile = (axis, player, tile) => {
        if (!(axis === "y" || axis === "x")) return;

        switch (axis) {
            case "x":
                return tile.nextElementSibling;

            case "y":
                return document.querySelector(
                    `[data-id="${
                        Number(tile.getAttribute("data-id")) + 10
                    }"][player="${player.type}"]`
                );

            default:
                return;
        }
    };

    const get_specific_tile = (player, [row, column]) => {
        return document.querySelector(
            `.board_tile[player="${player.type}"][data-id="${row}${column}"]`
        );
    };

    const create_ship_DOM = (parts) => {
        const ship_container = document.createElement("div");
        ship_container.setAttribute("size", parts);
        ship_container.classList.add("ship_container");
        ship_container.setAttribute("draggable", true);

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

    const is_valid = (ship_size, ship_orientation, tile, player) => {
        const row = Number(tile.getAttribute("data-id")[0]);
        const column = Number(tile.getAttribute("data-id")[1]);

        let next = null;
        switch (ship_orientation) {
            case "x":
                if (column + ship_size > 10) return false;

                next = tile;
                for (let i = 0; i < ship_size; i++) {
                    if (next.classList.contains("ship_part")) return false;
                    next = get_next_tile(ship_orientation, player, next);
                }

                return true;

            case "y":
                if (row + ship_size > 10) return false;

                next = tile;
                for (let i = 0; i < ship_size; i++) {
                    if (next.classList.contains("ship_part")) return false;
                    next = get_next_tile(ship_orientation, player, next);
                }

                return true;

            default:
                return;
        }
    };

    const place_ship_DOM = (player, length, [row, column], axis) => {
        const base_tile = get_board_tiles(player).find(
            (tile) => tile.getAttribute("data-id") === `${row}${column}`
        );

        if (is_valid(length, axis, base_tile, player)) {
            const ship_tiles = [base_tile];

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

            ship_tiles.forEach((tile) => tile.classList.add("ship_part"));

            const placed_ship = player.gameboard.place_ship(
                length,
                [row, column],
                axis
            );
        } else {
            return false;
        }
    };

    const all_ship_containers = () => {
        return [...document.querySelectorAll(".ship_container")];
    };

    const reset_ships_container = () => {
        while (ships_container.lastChild) ships_container.lastChild.remove();

        create_ship_DOM(2);
        create_ship_DOM(3);
        create_ship_DOM(3);
        create_ship_DOM(4);
        create_ship_DOM(5);
    };

    const attack_DOM = (player, [row, column] = [0, 0]) => {
        switch (player.type) {
            case "AI":
                player.attack();

                const other_player = Game.player1;

                const r = Game.cds[0];
                const c = Game.cds[1];

                const tile_hit = DOM_el.get_specific_tile(other_player, [r, c]);

                tile_hit.classList.add("hit");
                break;

            case "human":
                player.attack([row, column]);
                break;

            default:
                return;
        }
    };

    const select_tile = (target) => {
        // TODO: Improve the current "turn switch system"
        target.classList.add("hit");
        let coords = target.getAttribute("data-id");
        attack_DOM(Game.player1, [Number(coords[0]), Number(coords[1])]);

        setTimeout(() => {
            console.log(Game.end[0]);
            if (Game.end[0] === false) play_turn(Game.computer);
        }, 300);
    };

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

    const activate_start_button = () => {
        const btn = document.querySelector(".start_game_btn");
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

    document.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
    });

    const activate_drag_over_tiles = (player) => {
        get_board_tiles(player).forEach((tile) => {
            tile.addEventListener("drop", (e) => {
                e.preventDefault();

                const selected = document.querySelector(".being_dragged");

                const ship_size = Number(selected.getAttribute("size"));
                const current_row = Number(tile.getAttribute("data-id")[0]);
                const current_column = Number(tile.getAttribute("data-id")[1]);
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                if (is_valid(ship_size, orientation, tile, player)) {
                    place_ship_DOM(
                        player,
                        ship_size,
                        [current_row, current_column],
                        orientation
                    );

                    let next = tile;
                    for (let i = 0; i < ship_size; i++) {
                        next.classList.remove("placing_preview");
                        next = get_next_tile(orientation, player, next);
                    }
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

            tile.addEventListener("dragenter", (e) => {
                const selected = document.querySelector(".being_dragged");

                const ship_size = Number(selected.getAttribute("size"));
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                if (is_valid(ship_size, orientation, tile, player)) {
                    setTimeout(() => {
                        let next = tile;
                        for (let i = 0; i < ship_size; i++) {
                            next.classList.add("placing_preview");
                            next = get_next_tile(orientation, player, next);
                        }
                    }, 0.1);
                }
            });

            tile.addEventListener("dragleave", (e) => {
                const selected = document.querySelector(".being_dragged");

                const ship_size = Number(selected.getAttribute("size"));
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

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
    };
})();

export { DOM_el };
