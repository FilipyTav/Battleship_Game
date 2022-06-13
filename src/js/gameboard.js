import { DOM_el } from "./DOM_elements";
import { Ship } from "./ship";

const Gameboard = function () {
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

    const ships = [];

    const place_ship = (length, [row, column], axis) => {
        if (!(axis === "x" || axis === "y")) return;
        if (length < 2 || length > 5) return;

        const new_ship = Ship.make_ship(length);
        new_ship.orientation = axis;

        new_ship.coordinates = "";

        switch (axis) {
            case "x":
                if (column + length > 10)
                    return "Not possible to place this ship here";

                for (let i = 0; i < length; i++) {
                    if (tiles[row][column + i] !== "w") return;
                }

                for (let i = 0; i < length; i++) {
                    column + i < 10
                        ? (tiles[row][column + i] = new_ship.parts[i])
                        : tiles[row][column];

                    !(i === length - 1)
                        ? (new_ship.coordinates += `(${[row, column + i]}); `)
                        : (new_ship.coordinates += `(${[row, column + i]})`);
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
                        ? (tiles[row + i][column] = new_ship.parts[i])
                        : tiles[row][column];

                    !(i === length - 1)
                        ? (new_ship.coordinates += `(${[row + i, column]}); `)
                        : (new_ship.coordinates += `(${[row + i, column]})`);
                }

                break;

            default:
                return;
        }

        ships.push(new_ship);

        return new_ship;
    };

    const receive_attack = ([row, column]) => {
        let won = null;
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

                won = ships.every((ship) => ship.is_sunk());

                return { won, hit: "yes" };

            case "w":
                tiles[row][column] = "m";

                won = ships.every((ship) => ship.is_sunk());

                return { won, hit: "no" };

            default:
                return "no";
        }
    };

    return {
        tiles,
        place_ship,
        receive_attack,
        ships,
    };
};

export { Gameboard };
