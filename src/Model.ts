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

    private unique:number;
    private same:number;

    private seconds:number;
    private b:number;
    private b_:number;
    
    constructor(view:View){
        this.view = view;
        this.isPlayed = false;
        this.ballsArray = [];
        this.yVelocity = 4;
        this.bottomBorder = this.view.app.screen.height + 100;

        this.unique = 0;
        this.same = 0;

        this.seconds = 0;
        this.b = 0;
        this.b_ = 0;
    }

    // Adding ball
    public addNewBall(gap:number = 0) {
        const newBall:ColorBall = new ColorBall(this.view.app);
        newBall.x = 400 + Utils.getRandomNumber(0, 100) + gap;
        newBall.y = -110;
        this.ballsArray.push(newBall);
        this.view.add(newBall);

        this.changeStatistic(+newBall.innerText.text);   
    }

    public startApp() {
        this.view.app.ticker.start();
    }

    // Stop and clean app

    public stopApp() {
        this.view.app.ticker.stop();
        this.b = this.b_ = this.seconds = 0;
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

        this.view.app.ticker.add((delta:number)=> {

            // Code for working with time and summoning balls every 0.5 seconds

            this.seconds += 1 / 60 * delta;
            this.b_ = +this.seconds.toFixed(1);
            if (this.b != this.b_ && this.b_ % .5 == 0) {
                this.b = this.b_;
                if (Math.ceil(this.b) == this.b) {
                    this.addNewBall();      // First line of balls
                } else {
                    this.addNewBall(300);   // Second line of balls
                }
            }

            // Ball mover and remover
            
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