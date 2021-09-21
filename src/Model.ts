import ColorBall from "./Components/Ball";
import * as Utils from './Utils/Utils';
import * as PIXI from 'pixi.js';
import View from "./View";
import { isUnique } from "./Utils/NumberAnalyzer";

class Model {
    public isPlayed:Boolean;
    private view:View;
    private ballsArray:PIXI.Sprite[];
    private yVelocity:number;
    private bottomBorder:number;
    private timer:any;

    private unique:number;
    private same:number;
    
    constructor(view:View){
        this.view = view;
        this.isPlayed = false;
        this.ballsArray = [];
        this.yVelocity = 4;
        this.bottomBorder = this.view.app.screen.height + 100;

        this.unique = 0;
        this.same = 0;
    }

    // Adding ball
    public addNewBall(gap:number = 0) {
        const newBall:ColorBall = new ColorBall(this.view.app);
        newBall.x = 400 + Utils.getRandomNumber(0, 100) + gap;
        newBall.y = -110;
        console.log();
        this.ballsArray.push(newBall);
        this.view.add(newBall);

        this.changeStatistic(+newBall.innerText.text);   
    }

    public startApp() {
        this.timer = setInterval( () => {
            this.addNewBall();                              // First line of balls
            setTimeout( () => this.addNewBall(300), 500);   // Second line of balls
        }, 1000);      

        this.view.app.ticker.start();
    }

    // Stop and clean app

    public stopApp() {
        clearInterval(this.timer);
        this.ballsArray.forEach((item:PIXI.Sprite) => {
            this.view.remove(item);
        });
        this.ballsArray = [];
        this.view.changeStatistic();
        this.view.app.ticker.stop();
        
        isUnique(404);
        this.unique = this.same = 0;
    }

    public init() {
        this.startApp();

        // Ticker for remove balls that are behind the screen

        this.view.app.ticker.add(()=> {
            this.ballsArray.forEach((item) => {
                if (item.y > this.bottomBorder) {
                    this.view.remove(item);
                    this.ballsArray.shift();
                } else {
                    item.y += this.yVelocity;
                }
            });
        });
    }

    // Change numbers on the screen

    private changeStatistic(number:number) {
        isUnique(number) === true ? this.unique++ : this.same++;
        this.view.changeStatistic(this.unique, this.same);
    }
}

export default Model;