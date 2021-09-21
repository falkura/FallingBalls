"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ColorBall = /** @class */ (function (_super) {
    __extends(ColorBall, _super);
    // Creating ball components
    function ColorBall(app) {
        var _this = _super.call(this) || this;
        _this.app = app;
        _this.wTexture = createWhiteCircle();
        _this.whiteBall = new PIXI.Sprite(_this.app.renderer.generateTexture(_this.wTexture));
        _this.innerText = createText(_this.whiteBall);
        _this.cTexture = createColorCircle();
        _this.colorBall = new PIXI.Sprite(_this.app.renderer.generateTexture(_this.cTexture));
        _this.assembly();
        return _this;
    }
    // Ball assemply
    ColorBall.prototype.assembly = function () {
        this.whiteBall.x = 30;
        this.whiteBall.y = 30;
        this.whiteBall.addChild(this.innerText);
        this.colorBall.addChild(this.whiteBall);
        this.addChild(this.colorBall);
        return this;
    };
    return ColorBall;
}(PIXI.Sprite));
// Simple white circle
function createWhiteCircle() {
    var graphics = new PIXI.Graphics();
    graphics.lineStyle(0);
    graphics.beginFill(0xffffff, 1);
    graphics.drawCircle(0, 0, 30);
    graphics.endFill();
    return graphics;
}
// Simple color circle
function createColorCircle() {
    var graphics = new PIXI.Graphics();
    graphics.lineStyle(2, 0x555555);
    graphics.beginFill(Utils.getRandomColor(), 1);
    graphics.drawCircle(0, 0, 50);
    graphics.endFill();
    return graphics;
}
// Skewed text for white circle
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