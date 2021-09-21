import SimpleButton from "./Components/SimpleButton";
import * as Utils from './Utils/Utils';
import * as PIXI from 'pixi.js'; 
import View from './View';


const view = new View();
view.init();

const button = new SimpleButton('button.png')
button.anchor.set(0.5);
button.scale.set(0.4);
button.x = 400;
button.y = 200;
// button.y = app.screen.height / 2;

button.on('pointerdown', () => console.log('work'));
view.add(button);

// setTimeout(()=>{view.hideApp()},1000)

const app = new PIXI.Application({
  width: 1000,
  height: 650,
  backgroundColor: 0xdddddd,
});

const container = new PIXI.Container();
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

function onPress(): void {
  document.body.removeChild( app.view );
  // document.getElementById("start_button").style.visibility = 'visible'; // TODO
  isPlayed = false;
}



let ballsArray: Array<PIXI.Sprite> = [];

function addNewBall() {
    if (!isPlayed) return;
    // let newBall = createBall(app);
    // newBall.x = 600 + getRandomNumber(0,200);
    // newBall.y = -newBall.height;
    // ballsArray.push(newBall);
    // container.addChild(newBall);
}

let isPlayed:boolean = false;
let timerId:number;
// window.onblur = () => { isPlayed = false };
// window.onfocus = () => { isPlayed = true };

// const newBall = new CreateBall(app) as PIXI.Sprite;
// const newBall = createBall(app);
export function initApp() {
  const app = new PIXI.Application({
    width: 1000,
    height: 650,
    backgroundColor: 0xdddddd,
  });

  // const newBall_ = new CreateBall(app);
  // console.log(newBall_)
    // document.body.appendChild( app.view );
    isPlayed = true;
    if(timerId != undefined) return;
    const container = new PIXI.Container();
    app.stage.addChild(container);
    // console.log(CB)
    console.log(container)
    // container.addChild(newBall);
    // addNewBall();
    //const newBall = new CreateBall(app);
    //timerId = setInterval(() => addNewBall(), 1000);
}

let yVelocity = 3;
let bottomBorder = app.screen.height + 100;

app.ticker.add(()=> {
    ballsArray.forEach((item) => {
        if (item.y > bottomBorder) {
            container.removeChild(item);
            ballsArray.shift();
        } else {
            item.y += yVelocity;
        }
    });
});