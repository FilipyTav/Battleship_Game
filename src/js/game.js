import { DOM_el } from "./DOM_elements";
import { Player } from "./player";

const Game = (function () {
    const player1 = Player("human");
    const computer = Player("AI");

    const play_game = () => {
        DOM_el.populate_board(DOM_el.player1_board, player1);
        DOM_el.populate_board(DOM_el.computer_board, computer);

        add_attack_methods(player1);
        add_attack_methods(computer);

        choose_tiles_automatically(computer);

        DOM_el.reset_ships_container();

        DOM_el.all_ship_containers().forEach((container) =>
            container.addEventListener("dragstart", () => {
                container.classList.toggle("being_dragged");
            })
        );

        DOM_el.all_ship_containers().forEach((container) =>
            container.addEventListener("dragend", () => {
                container.classList.toggle("being_dragged");
            })
        );

        DOM_el.activate_drag_over_tiles(player1);
    };

    const random_int = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

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

    const end = [false];
    const reset_game = () => {
        end[0] = true;

        player1.gameboard.ships.splice(0, player1.gameboard.ships.length);
        computer.gameboard.ships.splice(0, computer.gameboard.ships.length);

        for (let i = 0; i < computer.gameboard.tiles.length; i++) {
            for (let j = 0; j < computer.gameboard.tiles[i].length; j++) {
                computer.gameboard.tiles[i][j] = "w";
                player1.gameboard.tiles[i][j] = "w";
            }
        }

        play_game();

        setTimeout(() => {
            end[0] = false;
        }, 400);
    };

    const cds = [];

    const add_attack_methods = (player) => {
        switch (player.type) {
            case "AI":
                player.attack = function (...coords) {
                    const row = random_int(0, 9);
                    const column = random_int(0, 9);

                    cds[0] = row;
                    cds[1] = column;

                    const result = player1.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    switch (true) {
                        case result === "no":
                            player.attack();
                            break;

                        case result.won === true:
                            setTimeout(() => {
                                alert("The computer wins!!!");
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

            case "human":
                player.attack = ([row, column]) => {
                    const result = computer.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    const selected_tile = DOM_el.get_specific_tile(computer, [
                        row,
                        column,
                    ]);

                    switch (true) {
                        case result.won === false && result.hit === "yes":
                            selected_tile.classList.add("ship_part", "hit");
                            break;

                        case result.won === true:
                            selected_tile.classList.add("ship_part", "hit");
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

    const choose_tiles_automatically = (player) => {
        for (let i = 0; i < 5; i++) {
            let ship_size = null;

            let row = null;
            let column = null;

            const axis = random_axis();

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
            while (valid === false) {
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
