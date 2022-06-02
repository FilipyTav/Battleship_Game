const Ship = (function () {
    const prototype = (function () {
        const hit = function (position) {
            this.parts[position] = 1;
        };

        const is_sunk = function () {
            return this.parts.every((part) => part === 1);
        };

        return {
            hit,
            is_sunk,
        };
    })();

    ////

    const make_ship = function (length) {
        if (!Number(length)) return;

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
