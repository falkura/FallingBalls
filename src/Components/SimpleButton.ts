import * as PIXI from 'pixi.js';

class SimpleButton extends PIXI.Sprite {
    private sprite:PIXI.Sprite;

    // Simple PIXI button with the ability to choose a texture
    
    constructor(texturePath: string) {
        super();
        this.sprite = PIXI.Sprite.from('../../resource/' + texturePath);
        this.sprite.buttonMode = true;
        this.sprite.interactive = true;
        this.addChild(this.sprite);

        return this;
    }
}

export default SimpleButton;