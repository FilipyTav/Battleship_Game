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

    const a = [];
    computer.attack = function () {
        const row = random_int(0, 9);
        const column = random_int(0, 9);

        a[0] = row;
        a[1] = column;

        if (player1.gameboard.receive_attack([row, column]) === "no")
            computer.attack();
    };

    DOM_el.populate_board(DOM_el.player1_board, player1);
    DOM_el.populate_board(DOM_el.computer_board, computer);

    DOM_el.get_board_tiles(player1).forEach((tile) => tile.classList.add("no"));

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
                const other_player = player1;
                player.attack();
                // [row, column] = a;
                const r = a[0];
                const c = a[1];

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

    const play_turn = (player) => {
        switch (player.type) {
            case "AI":
                attack_DOM(player);
                break;

            case "human":
                break;

            default:
                return;
        }
    };

    let coords = null;
    const select_tile = (e) => {
        e.target.classList.add("hit");
        coords = e.target.getAttribute("data-id");
        attack_DOM(player1, [Number(coords[0]), Number(coords[1])]);

        setTimeout(() => {
            play_turn(computer);
        }, 300);
    };

    DOM_el.get_board_tiles(computer).forEach((tile) => {
        tile.addEventListener("click", select_tile, {
            once: true,
        });
    });

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

    document.addEventListener("keydown", (e) => {
        if (e.key === "j") {
            console.log(player1.gameboard.tiles, computer.gameboard.tiles);
        }
    });
};

export { play_game };
