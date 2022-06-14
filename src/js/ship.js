// The ship obj
const Ship = (function () {
    // All the ships have in its prototype
    const prototype = (function () {
        // A method to be hit
        const hit = function (position) {
            this.parts[position] = 1;
        };

        // A method to check if it is sunk
        const is_sunk = function () {
            return this.parts.every((part) => part === 1);
        };

        return {
            hit,
            is_sunk,
        };
    })();

    ////

    // Creates a new ship
    const make_ship = function (length) {
        if (!Number(length)) return;

        // All the ship parts
        // The part is indicated as 0 if the ship is afloat
        // and 1 if otherwise
        const parts = [];
        parts.length = length;
        parts.fill(0);

        return Object.assign(Object.create(prototype), {
            length,
            parts,
        });
    };

    return {
        make_ship,
    };
})();

export { Ship };
