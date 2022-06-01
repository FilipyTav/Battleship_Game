import { Ship } from "./ship";

const Gameboard = (function () {
    const tiles = (function () {
        const rows = [];

        for (let i = 0; i < 10; i++) {
            const array = [];
            array.length = 10;
            array.fill("w");

            rows.push(array);
        }

        return rows;
    })();

    const destroyer = Ship.make_ship(2);
    const submarine = Ship.make_ship(3);
    const cruiser = Ship.make_ship(3);
    const battleship = Ship.make_ship(4);
    const carrier = Ship.make_ship(5);

    const ships = [destroyer, submarine, cruiser, battleship, carrier];

    const place_ship = (ship, [row, column], axis) => {
        if (!(axis === "x" || axis === "y")) return;
        const length = ship.length;
        ship.orientation = axis;

        ship.coordinates = "";

        switch (axis) {
            case "x":
                if (column + length > 10)
                    return "Not possible to place this ship here";

                for (let i = 0; i < length; i++) {
                    if (tiles[row][column + i] !== "w") return;
                }

                for (let i = 0; i < length; i++) {
                    column + i < 10
                        ? (tiles[row][column + i] = ship.parts[i])
                        : tiles[row][column];

                    !(i === length - 1)
                        ? (ship.coordinates += `(${[row, column + i]}); `)
                        : (ship.coordinates += `(${[row, column + i]})`);
                }

                break;

            case "y":
                if (row + length > 10)
                    return "Not possible to place this ship here";

                for (let i = 0; i < length; i++) {
                    if (tiles[row + i][column] !== "w") return;
                }

                for (let i = 0; i < length; i++) {
                    row + i < 10
                        ? (tiles[row + i][column] = ship.parts[i])
                        : tiles[row][column];

                    !(i === length - 1)
                        ? (ship.coordinates += `(${[row + i, column]}); `)
                        : (ship.coordinates += `(${[row + i, column]})`);
                }

                break;

            default:
                return;
        }
    };

    place_ship(destroyer, [0, 9], "y");
    place_ship(submarine, [0, 6], "x");

    const receive_attack = ([row, column]) => {
        switch (tiles[row][column]) {
            case 0:
                tiles[row][column] = 1;
                let ship_hit = ships.find(({ coordinates }) =>
                    coordinates.includes(`(${row},${column})`)
                );

                let coords_array = ship_hit.coordinates.split(";");
                coords_array = coords_array.map((coord) => coord.trim());

                const part_hit = coords_array.indexOf(`(${row},${column})`);
                ship_hit.hit(part_hit);

                break;

            case "w":
                tiles[row][column] = "m";
                break;

            default:
                return;
        }
    };

    receive_attack([0, 9]);

    receive_attack([0, 7]);

    return { tiles, place_ship, receive_attack };
})();

export { Gameboard };
