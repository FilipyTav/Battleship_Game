import "../css/battleship.css";
import { DOM_el } from "./DOM_elements";
import { Game } from "./game";
// import { play_game } from "./play_game";

const init = function () {
    Game.play_game();
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

    document.addEventListener("keydown", (e) => {
        if (e.key === "r") Game.reset_game();
    });
};

init();
