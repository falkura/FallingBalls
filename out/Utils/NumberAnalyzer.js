"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnique = void 0;
var unique = [];
var same = false;
// Support function for statistic
function isUnique(n) {
    if (n === void 0) { n = 404; }
    if (n == 404) { // Simple clean for array of unique numbers 
        unique = [];
        return false;
    }
    unique.forEach(function (el) {
        if (el == n) {
            same = true;
            return;
        }
    });
    if (same) {
        same = !same;
        return false;
    }
    unique.push(n);
    return true;
}
exports.isUnique = isUnique;
//# sourceMappingURL=NumberAnalyzer.js.map