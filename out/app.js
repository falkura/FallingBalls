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
exports.initApp = void 0;
var SimpleButton_1 = __importDefault(require("./Components/SimpleButton"));
var PIXI = __importStar(require("pixi.js"));
var View_1 = __importDefault(require("./View"));
var view = new View_1.default();
view.init();
var button = new SimpleButton_1.default('button.png');
button.anchor.set(0.5);
button.scale.set(0.4);
button.x = 400;
button.y = 200;
// button.y = app.screen.height / 2;
button.on('pointerdown', function () { return console.log('work'); });
view.add(button);
// setTimeout(()=>{view.hideApp()},1000)
var app = new PIXI.Application({
    width: 1000,
    height: 650,
    backgroundColor: 0xdddddd,
});
var container = new PIXI.Container();
app.stage.addChild(container);
// addNewBall() : PIXI.Sprite {
//   // if (!isPlayed) return; // TODO
//   let newBall = CB.createBall(this.app);
//   newBall.x = 600 + getRandomNumber(0,200);
//   newBall.y = -newBall.height;
//   return newBall;
//   // ballsArray.push(newBall);
//   // container.addChild(newBall); перенести в главный класс
// }
function onPress() {
    document.body.removeChild(app.view);
    // document.getElementById("start_button").style.visibility = 'visible'; // TODO
    isPlayed = false;
}
var ballsArray = [];
function addNewBall() {
    if (!isPlayed)
        return;
    // let newBall = createBall(app);
    // newBall.x = 600 + getRandomNumber(0,200);
    // newBall.y = -newBall.height;
    // ballsArray.push(newBall);
    // container.addChild(newBall);
}
var isPlayed = false;
var timerId;
// window.onblur = () => { isPlayed = false };
// window.onfocus = () => { isPlayed = true };
// const newBall = new CreateBall(app) as PIXI.Sprite;
// const newBall = createBall(app);
function initApp() {
    var app = new PIXI.Application({
        width: 1000,
        height: 650,
        backgroundColor: 0xdddddd,
    });
    // const newBall_ = new CreateBall(app);
    // console.log(newBall_)
    // document.body.appendChild( app.view );
    isPlayed = true;
    if (timerId != undefined)
        return;
    var container = new PIXI.Container();
    app.stage.addChild(container);
    // console.log(CB)
    console.log(container);
    // container.addChild(newBall);
    // addNewBall();
    //const newBall = new CreateBall(app);
    //timerId = setInterval(() => addNewBall(), 1000);
}
exports.initApp = initApp;
var yVelocity = 3;
var bottomBorder = app.screen.height + 100;
app.ticker.add(function () {
    ballsArray.forEach(function (item) {
        if (item.y > bottomBorder) {
            container.removeChild(item);
            ballsArray.shift();
        }
        else {
            item.y += yVelocity;
        }
    });
});
//# sourceMappingURL=app.js.map