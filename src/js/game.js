import { DOM_el } from "./DOM_elements";
import { play_game } from "./play_game";

const Game = (function () {
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

    let end = false;
    const reset_game = (player1, player2) => {
        player1.gameboard.ships.splice(0, player1.gameboard.ships.length);

        player2.gameboard.ships.splice(0, player2.gameboard.ships.length);

        for (let i = 0; i < player2.gameboard.tiles.length; i++) {
            for (let j = 0; j < player2.gameboard.tiles[i].length; j++) {
                player1.gameboard.tiles[i][j] = "w";
                player2.gameboard.tiles[i][j] = "w";
            }
        }

        end = true;
        play_game();
    };

    const cds = [];

    const add_attack_methods = (player, other_player) => {
        switch (player.type) {
            case "AI":
                player.attack = function () {
                    const row = Game.random_int(0, 9);
                    const column = Game.random_int(0, 9);

                    cds[0] = row;
                    cds[1] = column;

                    const result = other_player.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    switch (result) {
                        case "no":
                            player.attack();
                            break;

                        case true:
                            setTimeout(() => {
                                alert("The computer wins!!!");
                                reset_game(player, other_player);
                            }, 300);
                            break;

                        case false:
                            break;

                        default:
                            return;
                    }
                };
                break;

            case "human":
                player.attack = ([row, column]) => {
                    const result = other_player.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    switch (result) {
                        case true:
                            alert("You win!!!");
                            reset_game(player, other_player);
                            break;

                        case false:
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
