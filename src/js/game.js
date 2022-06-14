import { DOM_el } from "./DOM_elements";
import { Player } from "./player";

// The game details
const Game = (function () {
    // Both players
    const player1 = Player("human");
    const computer = Player("AI");

    // Initializes a new match
    const play_game = () => {
        // Adds all the tiles to both bords
        DOM_el.populate_board(DOM_el.player1_board, player1);
        DOM_el.populate_board(DOM_el.computer_board, computer);

        // Adds an attck function to the players
        add_attack_methods(player1);
        add_attack_methods(computer);

        // Lays the computer ships
        choose_tiles_automatically(computer);

        // Adds the draggable ships to the DOM
        DOM_el.reset_ships_container();

        // When a ship is dragged
        DOM_el.all_ship_containers().forEach((container) =>
            // Adds a class to it
            container.addEventListener("dragstart", () => {
                container.classList.toggle("being_dragged");
            })
        );

        // Same thing, but opposite
        DOM_el.all_ship_containers().forEach((container) =>
            container.addEventListener("dragend", () => {
                container.classList.toggle("being_dragged");
            })
        );

        // Adds functionality for the board tiles to be dragged over
        DOM_el.activate_drag_over_tiles(player1);
    };

    // Gets a random integer between min and max (both inclusive)
    const random_int = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Chooses a random orientation for the computer ship
    const random_axis = () => {
        switch (random_int(0, 1)) {
            case 0:
                return "x";

            case 1:
                return "y";

            default:
                return;
        }
    };

    // Whether the game is finished or not
    const end = [false];

    // Restarts the game
    const reset_game = () => {
        // Game over
        end[0] = true;

        // Removes all the ships from the gameboard obj
        player1.gameboard.ships.splice(0, player1.gameboard.ships.length);
        computer.gameboard.ships.splice(0, computer.gameboard.ships.length);

        // Resets all the board tiles
        for (let i = 0; i < computer.gameboard.tiles.length; i++) {
            for (let j = 0; j < computer.gameboard.tiles[i].length; j++) {
                computer.gameboard.tiles[i][j] = "w";
                player1.gameboard.tiles[i][j] = "w";
            }
        }

        // Start a new game
        play_game();

        setTimeout(() => {
            // A new game begins
            end[0] = false;
        }, 400);
    };

    // The most recent coordinates used by the computer
    const cds = [];

    // Functions used by the players to attack the opponent's board
    const add_attack_methods = (player) => {
        switch (player.type) {
            // The computer
            case "AI":
                player.attack = function () {
                    // Random coordinates
                    const row = random_int(0, 9);
                    const column = random_int(0, 9);

                    // Records the coordinates to be used in the DOM
                    cds[0] = row;
                    cds[1] = column;

                    // Places a ship in the board
                    const result = player1.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    switch (true) {
                        // Returns no if is not possible to place a ship there
                        case result === "no":
                            // Try again
                            player.attack();
                            break;

                        // If the attack wins the game
                        case result.won === true:
                            setTimeout(() => {
                                alert("The computer wins!!!");
                                // Start a new one
                                reset_game();
                            }, 300);
                            break;

                        // TODO: make the AI hit a adjacent tile if it hits a ship
                        case result.won === false && result.hit === "yes":
                            break;

                        default:
                            return;
                    }
                };
                break;

            // The user
            case "human":
                player.attack = ([row, column]) => {
                    // Attacks the computers's board
                    const result = computer.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    // Get the corresponding tile
                    const selected_tile = DOM_el.get_specific_tile(computer, [
                        row,
                        column,
                    ]);

                    switch (true) {
                        // If a ship was hit but the game is not over yet
                        case result.won === false && result.hit === "yes":
                            // Marks the tiles as a ship hit
                            selected_tile.classList.add("ship_part", "hit");
                            break;

                        // If the game is over after the attack
                        case result.won === true:
                            selected_tile.classList.add("ship_part", "hit");

                            // Ends the game
                            setTimeout(() => {
                                alert("You win!!!");
                                reset_game();
                            }, 200);
                            break;

                        default:
                            return "no";
                    }
                };
                break;

            default:
                return;
        }
    };

    // Chooses automatically where to place all the computer's ships
    const choose_tiles_automatically = (player) => {
        // There are only 5 ships
        for (let i = 0; i < 5; i++) {
            let ship_size = null;

            let row = null;
            let column = null;

            // Random orientation
            const axis = random_axis();

            // All the possible ship sizes
            switch (i) {
                case 0:
                    ship_size = 2;
                    break;

                case 1:
                    ship_size = 3;
                    break;

                case 2:
                    ship_size = 3;
                    break;

                case 3:
                    ship_size = 4;
                    break;

                case 4:
                    ship_size = 5;
                    break;

                default:
                    return;
            }

            // Chooses a valid coordinate based on the ship sized
            // Avoids choosing one too close to the borders
            switch (axis) {
                case "x":
                    row = random_int(0, 9);
                    column = random_int(0, 9 - (ship_size - 1));

                case "y":
                    row = random_int(0, 9 - (ship_size - 1));
                    column = random_int(0, 9);
                    break;

                default:
                    return;
            }

            let valid = false;
            // Until it chooses an unvalid tile
            while (valid === false) {
                // Try again with other parameters
                const axis = random_axis();
                switch (axis) {
                    case "x":
                        row = random_int(0, 9);
                        column = random_int(0, 9 - (ship_size - 1));

                    case "y":
                        row = random_int(0, 9 - (ship_size - 1));
                        column = random_int(0, 9);
                        break;

                    default:
                        return;
                }

                // If the function returns false, the tile is invalid
                if (
                    DOM_el.place_ship_DOM(
                        player,
                        ship_size,
                        [row, column],
                        axis
                    ) !== false
                )
                    valid = true;
            }
        }
    };

    return {
        player1,
        computer,
        play_game,
        random_int,
        random_axis,
        end,
        reset_game,
        add_attack_methods,
        cds,
        choose_tiles_automatically,
    };
})();

export { Game };
