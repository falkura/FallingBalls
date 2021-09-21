import * as PIXI from 'pixi.js';
import * as Utils from '../Utils/Utils';


class ColorBall {
    app: PIXI.Application;
    wTexture: PIXI.Graphics;
    whiteBall: PIXI.Sprite;
    innerText: PIXI.Text;
    cTexture: PIXI.Graphics; 
    colorBall: PIXI.Sprite;
    
    constructor(app: PIXI.Application) {
        this.app = app;
        this.wTexture = createWhiteCircle();
        this.whiteBall = new PIXI.Sprite(this.app.renderer.generateTexture(this.wTexture));
        this.innerText = createText(this.whiteBall);
        this.cTexture = createColorCircle();
        this.colorBall = new PIXI.Sprite(this.app.renderer.generateTexture(this.cTexture));
        // this.init();
    }
    
    init() {
        this.whiteBall.x = 30;
        this.whiteBall.y = 30;
        this.whiteBall.addChild(this.innerText);
        this.colorBall.addChild(this.whiteBall);

        return this.colorBall;
    }
}

function createWhiteCircle() : PIXI.Graphics {
    const graphics = new PIXI.Graphics();

    graphics.lineStyle(0)
    graphics.beginFill(0xffffff, 1);
    graphics.drawCircle(0, 0, 30);
    graphics.endFill();

    return graphics;
}

function createColorCircle() : PIXI.Graphics {
    const graphics = new PIXI.Graphics();

    graphics.lineStyle(2, 0x555555)
    graphics.beginFill(Utils.getRandomColor() as number, 1);
    graphics.drawCircle(0, 0, 50);
    graphics.endFill();

    return graphics;
}

function createText(outterSprite: PIXI.Sprite) : PIXI.Text {
    const rn: string = Utils.getRandomNumber(-100, 100);
    const textField = new PIXI.Text(rn);

    textField.anchor.set(0.5);
    textField.skew.set(0.45,-0.5);
    textField.x = outterSprite.width / 2;
    textField.y = outterSprite.height / 2;

    return textField;
}

export default ColorBall;