import SimpleButton from "./Components/SimpleButton";
import View from './View';
import Model from "./Model";

//--------Controller Constructor--------//

const htmlButton:HTMLElement | null = document.getElementById('start_button');
const view = new View();
const model:Model = new Model(view);
const button:SimpleButton = new SimpleButton('button.png');

let initialized:boolean = false;

function init() {
  htmlButton?.addEventListener('click', () => onClickHtml());
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

  button.on('pointerdown', () => {onClickPixi()});
  view.add(button);
}

//--------App Initializer--------//

//--------Button Handlers--------//

function onClickHtml() {
  if (htmlButton) htmlButton.style.visibility = 'hidden';
  if (!initialized) {
    initApp();
  } else {
    view.showApp();
    model.startApp();
  }
}

function onClickPixi(): void {
  model.stopApp();
  view.hideApp();
  if (htmlButton) htmlButton.style.visibility = 'visible';
}

//--------Button Handlers--------//

//--------drag'n'drop--------//

function drag(e:MouseEvent) {
  if(!htmlButton) return;
  htmlButton.style.left = `${e.pageX - htmlButton.offsetWidth / 2}px`;
  htmlButton.style.top = `${e.pageY - htmlButton.offsetHeight / 2}px`;
}

htmlButton?.addEventListener("mousedown", () =>
  document.addEventListener("mousemove", drag)
);

htmlButton?.addEventListener("mouseup", () =>
  document.removeEventListener("mousemove", drag)
);

//--------drag'n'drop--------//
