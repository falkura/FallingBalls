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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __importStar(require("pixi.js"));
var SimpleApp_1 = __importDefault(require("./Components/SimpleApp"));
var View = /** @class */ (function () {
    function View() {
        this.app = new SimpleApp_1.default();
        this.container = new PIXI.Container();
        this.root = document.getElementById('root');
    }
    View.prototype.init = function () {
        this.app.stage.addChild(this.container);
        this.root.appendChild(this.app.view);
    };
    View.prototype.add = function (element) {
        this.container.addChild(element);
    };
    View.prototype.remove = function (element) {
        this.container.removeChild(element);
    };
    View.prototype.showApp = function () {
        this.root.style.visibility = 'visible';
    };
    View.prototype.hideApp = function () {
        this.root.style.visibility = 'hidden';
    };
    View.prototype.removeApp = function () {
        this.root.removeChild(this.app.view);
    };
    return View;
}());
exports.default = View;
//# sourceMappingURL=View.js.map