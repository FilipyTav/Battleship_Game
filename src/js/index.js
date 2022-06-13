import "../css/battleship.css";
import { Game } from "./game";

const init = function () {
    Game.play_game();

    document.addEventListener("keydown", (e) => {
        if (e.key === "r") Game.reset_game();
    });
};

init();
