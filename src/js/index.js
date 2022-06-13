import "../css/battleship.css";
import { DOM_el } from "./DOM_elements";
import { Game } from "./game";

const init = function () {
    Game.play_game();

    document.addEventListener("keydown", (e) => {
        if (e.key === "r") Game.reset_game();
    });

    DOM_el.restart_btn.addEventListener("click", Game.reset_game);
};

init();
