"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleButton_1 = __importDefault(require("./Components/SimpleButton"));
var View_1 = __importDefault(require("./View"));
var Model_1 = __importDefault(require("./Model"));
//--------Controller Constructor--------//
var htmlButton = document.getElementById('start_button');
var view = new View_1.default();
var model = new Model_1.default(view);
var button = new SimpleButton_1.default('button.png');
var initialized = false;
function init() {
    htmlButton === null || htmlButton === void 0 ? void 0 : htmlButton.addEventListener('click', function () { return onClickHtml(); });
}
init();
//--------Controller Constructor--------//
//--------App Initializer--------//
function initApp() {
    view.init();
    initButtons();
    model.init();
    initialized = true;
}
function initButtons() {
    button.buttonMode = true;
    button.interactive = true;
    button.anchor.set(0.5);
    button.scale.set(0.4);
    button.x = 100;
    button.y = view.app.screen.height / 2;
    button.on('pointerdown', function () { onClickPixi(); });
    view.add(button);
}
//--------App Initializer--------//
//--------Button Handlers--------//
function onClickHtml() {
    if (htmlButton)
        htmlButton.style.visibility = 'hidden';
    if (!initialized) {
        initApp();
    }
    else {
        view.showApp();
        model.startApp();
    }
}
function onClickPixi() {
    model.stopApp();
    view.hideApp();
    if (htmlButton)
        htmlButton.style.visibility = 'visible';
}
//--------Button Handlers--------//
//--------drag'n'drop--------//
function drag(e) {
    if (!htmlButton)
        return;
    htmlButton.style.left = e.pageX - htmlButton.offsetWidth / 2 + "px";
    htmlButton.style.top = e.pageY - htmlButton.offsetHeight / 2 + "px";
}
htmlButton === null || htmlButton === void 0 ? void 0 : htmlButton.addEventListener("mousedown", function () {
    return document.addEventListener("mousemove", drag);
});
htmlButton === null || htmlButton === void 0 ? void 0 : htmlButton.addEventListener("mouseup", function () {
    return document.removeEventListener("mousemove", drag);
});
//--------drag'n'drop--------//
//# sourceMappingURL=index.js.map