import { Gameboard } from "./gameboard";

const Player = function (type) {
    if (!(type === "human" || type === "AI")) return;

    const gameboard = Gameboard();

    return { gameboard, type };
};

export { Player };
