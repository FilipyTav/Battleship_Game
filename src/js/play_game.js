import { Player } from "./player";
import { DOM_el } from "./DOM_elements";
import { Game } from "./game";

const play_game = () => {
    const player1 = Player("human");
    const computer = Player("AI");

    DOM_el.populate_board(DOM_el.player1_board, player1);
    DOM_el.populate_board(DOM_el.computer_board, computer);

    DOM_el.get_board_tiles(player1).forEach((tile) => tile.classList.add("no"));

    Game.add_attack_methods(player1, computer);
    Game.add_attack_methods(computer, player1);

    document.addEventListener("keydown", (e) => {
        if (e.key === "d") console.log(computer.gameboard);
    });

    Game.choose_tiles_automatically(computer);

    DOM_el.reset_ships_container();

    DOM_el.activate_drag_over_tiles(player1, computer);
};

export { play_game };
