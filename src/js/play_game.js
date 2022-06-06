import { Player } from "./player";
import { DOM_el } from "./DOM_elements";

const play_game = () => {
    const player1 = Player("human");
    const computer = Player("AI");

    const random_int = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    player1.attack = ([row, column]) => {
        return computer.gameboard.receive_attack([row, column]);
    };

    computer.attack = () => {
        if (
            player1.gameboard.receive_attack([
                random_int(0, 9),
                random_int(0, 9),
            ]) === "no"
        )
            computer.attack();
    };

    DOM_el.populate_board(DOM_el.player1_board, player1);
    DOM_el.populate_board(DOM_el.computer_board, computer);

    const place_ship_DOM = (player, length, [row, column], axis) => {
        const placed_ship = player.gameboard.place_ship(
            length,
            [row, column],
            axis
        );

        const base_tile = DOM_el.get_board_tiles(player).find(
            (tile) => tile.getAttribute("data-id") === `${row}${column}`
        );

        const ship_tiles = [base_tile];

        switch (axis) {
            case "x":
                for (let i = 0; i < length - 1; i++) {
                    ship_tiles.push(
                        DOM_el.get_next_tile(axis, player, ship_tiles[i])
                    );
                }
                break;

            case "y":
                for (let i = 0; i < length - 1; i++) {
                    ship_tiles.push(
                        DOM_el.get_next_tile(axis, player, ship_tiles[i])
                    );
                }
                break;

            default:
                break;
        }

        ship_tiles.forEach((tile) => tile.classList.add("ship_part"));
    };

    const attack_DOM = (player, [row, column] = [0, 0]) => {
        switch (player.type) {
            case "AI":
                player.attack();
                break;

            case "human":
                player.attack([row, column]);
                break;

            default:
                return;
        }
    };

    place_ship_DOM(player1, 2, [0, 1], "x");
    place_ship_DOM(player1, 3, [2, 1], "x");
    place_ship_DOM(player1, 3, [4, 1], "x");
    place_ship_DOM(player1, 4, [6, 1], "x");
    place_ship_DOM(player1, 5, [4, 8], "y");

    place_ship_DOM(computer, 2, [1, 0], "y");
    place_ship_DOM(computer, 3, [2, 2], "y");
    place_ship_DOM(computer, 3, [3, 4], "y");
    place_ship_DOM(computer, 4, [4, 6], "y");
    place_ship_DOM(computer, 5, [5, 8], "y");

    const turn = (player) => {
        let other_player_board;
        switch (player.type) {
            case "AI":
                other_player_board = DOM_el.get_board_tiles(player1);

                other_player_board.forEach((tile) => {
                    tile.addEventListener("click", DOM_el.select_tile, {
                        once: true,
                    });
                });
                break;

            case "human":
                other_player_board = DOM_el.get_board_tiles(computer);

                other_player_board.forEach((tile) => {
                    tile.addEventListener("click", DOM_el.select_tile, {
                        once: true,
                    });
                });
                break;

            default:
                return;
        }
    };

    turn(player1);
};

export { play_game };
