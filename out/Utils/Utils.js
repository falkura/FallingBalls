"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomColor = exports.getRandomNumber = void 0;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getRandomNumber = getRandomNumber;
;
function getRandomColor() {
    return "0x" + Math.floor(Math.random() * 16777215).toString(16);
}
exports.getRandomColor = getRandomColor;
;
//# sourceMappingURL=Utils.js.map