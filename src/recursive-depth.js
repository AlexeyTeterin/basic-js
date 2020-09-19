const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    constructor(name) {
        this.name = name;
    }

    calculateDepth(arr, depth = 1, results = []) {
        results.push(depth);
        for (let x of arr) {
            (Array.isArray(x)) ? this.calculateDepth(x, depth + 1, results) : 0;
        }
        return Math.max(...results);
    }
};