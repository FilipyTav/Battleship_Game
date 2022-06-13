import "../css/battleship.css";
import { DOM_el } from "./DOM_elements";
import { Game } from "./game";
// import { play_game } from "./play_game";

const init = function () {
    Game.play_game();

    document.addEventListener("keydown", (e) => {
        if (e.key === "r") Game.reset_game();
    });
};

init();
