import { Ship } from "./ship";

// All the details about the gameboard obj
const Gameboard = function () {
    // Generates all the tiles (10 x 10)
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

    // The ships currently in the board
    const ships = [];

    // Adds a ship to the board
    const place_ship = (length, [row, column], axis) => {
        if (!(axis === "x" || axis === "y")) return;
        if (length < 2 || length > 5) return;

        // Makes a new ship (obj) and initializes some values
        const new_ship = Ship.make_ship(length);
        new_ship.orientation = axis;

        new_ship.coordinates = "";

        switch (axis) {
            case "x":
                // The ship cannot be too close to the border
                if (column + length > 10)
                    return "Not possible to place this ship here";

                // The ship must not be placed where there already is a ship at the coordinates
                for (let i = 0; i < length; i++) {
                    if (tiles[row][column + i] !== "w") return;
                }

                // Adds the coordinates to the obj
                // and the ship to the board
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

        // The ship is now in the board
        ships.push(new_ship);

        return new_ship;
    };

    // The board receives and attack and changes its tiles depending on what was hit
    const receive_attack = ([row, column]) => {
        let won = null;

        // The tiles in the board obj
        switch (tiles[row][column]) {
            // If there is a 0 at the coordinates it means a ship was hit
            case 0:
                // Marks the ship as hit
                tiles[row][column] = 1;

                // The ship that was hit
                let ship_hit = ships.find(({ coordinates }) =>
                    coordinates.includes(`(${row},${column})`)
                );

                // Gets all the coordinates where the ship hit is
                let coords_array = ship_hit.coordinates.split(";");
                coords_array = coords_array.map((coord) => coord.trim());

                // Identifies which of the was hit
                const part_hit = coords_array.indexOf(`(${row},${column})`);

                // Finally, marks the ship obj as hit
                ship_hit.hit(part_hit);

                // After the attack, checks if the board lost all its ships
                won = ships.every((ship) => ship.is_sunk());

                return { won, hit: "yes" };

            // If the attack hit water
            case "w":
                // Marks the tile as hit
                tiles[row][column] = "m";

                // Checks if the game is over
                // Kinda useless, but you never know
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
