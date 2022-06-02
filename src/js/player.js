import { Gameboard } from "./gameboard";

const Player = function (type) {
    if (!(type === "human" || type === "AI")) return;

    const gameboard = Gameboard();

    return { gameboard, type };
};

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

player1.gameboard.place_ship(3, [2, 5], "x");
