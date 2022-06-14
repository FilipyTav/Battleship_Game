import "../css/battleship.css";
import { DOM_el } from "./DOM_elements";
import { Game } from "./game";

const init = function () {
    // Initiates a game
    Game.play_game();

    // Adds functionallity for the "r" in the keyboard
    document.addEventListener("keydown", (e) => {
        if (e.key === "r") Game.reset_game();
    });

    // Initializes the restart btn functionallity
    DOM_el.restart_btn.addEventListener("click", Game.reset_game);
};

init();
