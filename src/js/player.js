import { Gameboard } from "./gameboard";

// The details about the players
const Player = function (type) {
    // Only 2 types allowed
    if (!(type === "human" || type === "AI")) return;

    // Creates its keyboard
    const gameboard = Gameboard();

    return { gameboard, type };
};

export { Player };
