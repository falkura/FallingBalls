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
var Ball_1 = __importDefault(require("./Components/Ball"));
var Utils = __importStar(require("./Utils/Utils"));
var NumberAnalyzer_1 = require("./Utils/NumberAnalyzer");
var Model = /** @class */ (function () {
    function Model(view) {
        this.view = view;
        this.isPlayed = false;
        this.ballsArray = [];
        this.yVelocity = 4;
        this.bottomBorder = this.view.app.screen.height + 100;
        this.unique = 0;
        this.same = 0;
    }
    // Adding ball
    Model.prototype.addNewBall = function (gap) {
        if (gap === void 0) { gap = 0; }
        var newBall = new Ball_1.default(this.view.app);
        newBall.x = 400 + Utils.getRandomNumber(0, 100) + gap;
        newBall.y = -110;
        console.log();
        this.ballsArray.push(newBall);
        this.view.add(newBall);
        this.changeStatistic(+newBall.innerText.text);
    };
    Model.prototype.startApp = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.addNewBall(); // First line of balls
            setTimeout(function () { return _this.addNewBall(300); }, 500); // Second line of balls
        }, 1000);
        this.view.app.ticker.start();
    };
    // Stop and clean app
    Model.prototype.stopApp = function () {
        var _this = this;
        clearInterval(this.timer);
        this.ballsArray.forEach(function (item) {
            _this.view.remove(item);
        });
        this.ballsArray = [];
        this.view.changeStatistic();
        this.view.app.ticker.stop();
        (0, NumberAnalyzer_1.isUnique)(404);
        this.unique = this.same = 0;
    };
    Model.prototype.init = function () {
        var _this = this;
        this.startApp();
        // Ticker for remove balls that are behind the screen
        this.view.app.ticker.add(function () {
            _this.ballsArray.forEach(function (item) {
                if (item.y > _this.bottomBorder) {
                    _this.view.remove(item);
                    _this.ballsArray.shift();
                }
                else {
                    item.y += _this.yVelocity;
                }
            });
        });
    };
    // Change numbers on the screen
    Model.prototype.changeStatistic = function (number) {
        (0, NumberAnalyzer_1.isUnique)(number) === true ? this.unique++ : this.same++;
        this.view.changeStatistic(this.unique, this.same);
    };
    return Model;
}());
exports.default = Model;
//# sourceMappingURL=Model.js.map