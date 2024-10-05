const removeFromArray = function (arr, ...args) {
    let copy = []

    for (let i of arr) {
        if (!args.includes(i)) {
            copy.push(i);
        }
    }

    return copy;
};

// Do not edit below this line
module.exports = removeFromArray;
