"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __importStar(require("pixi.js"));
var Utils = __importStar(require("../Utils/Utils"));
var ColorBall = /** @class */ (function () {
    function ColorBall(app) {
        this.app = app;
        this.wTexture = createWhiteCircle();
        this.whiteBall = new PIXI.Sprite(this.app.renderer.generateTexture(this.wTexture));
        this.innerText = createText(this.whiteBall);
        this.cTexture = createColorCircle();
        this.colorBall = new PIXI.Sprite(this.app.renderer.generateTexture(this.cTexture));
        // this.init();
    }
    ColorBall.prototype.init = function () {
        this.whiteBall.x = 30;
        this.whiteBall.y = 30;
        this.whiteBall.addChild(this.innerText);
        this.colorBall.addChild(this.whiteBall);
        return this.colorBall;
    };
    return ColorBall;
}());
function createWhiteCircle() {
    var graphics = new PIXI.Graphics();
    graphics.lineStyle(0);
    graphics.beginFill(0xffffff, 1);
    graphics.drawCircle(0, 0, 30);
    graphics.endFill();
    return graphics;
}
function createColorCircle() {
    var graphics = new PIXI.Graphics();
    graphics.lineStyle(2, 0x555555);
    graphics.beginFill(Utils.getRandomColor(), 1);
    graphics.drawCircle(0, 0, 50);
    graphics.endFill();
    return graphics;
}
function createText(outterSprite) {
    var rn = Utils.getRandomNumber(-100, 100);
    var textField = new PIXI.Text(rn);
    textField.anchor.set(0.5);
    textField.skew.set(0.45, -0.5);
    textField.x = outterSprite.width / 2;
    textField.y = outterSprite.height / 2;
    return textField;
}
exports.default = ColorBall;
//# sourceMappingURL=Ball.js.map