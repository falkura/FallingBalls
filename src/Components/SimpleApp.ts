import * as PIXI from 'pixi.js';

class SimpleApp extends PIXI.Application {

  // Simple PIXI app with fixed size and background color

  constructor() {
    super({
      width: 1000,
      height: 650,
      backgroundColor: 0xdddddd,
    });

    return this;
  }
}

export default SimpleApp;