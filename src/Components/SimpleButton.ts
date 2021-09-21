import * as PIXI from 'pixi.js';

class SimpleButton extends PIXI.Sprite {
    private sprite:PIXI.Sprite;

    constructor(texturePath: string) {
        super();
        this.sprite = PIXI.Sprite.from('../../resource/' + texturePath);
        this.sprite.buttonMode = true;
        this.sprite.interactive = true;

        return this;
    }
}

export default SimpleButton;