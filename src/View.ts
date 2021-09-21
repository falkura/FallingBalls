import * as PIXI from 'pixi.js';
import SimpleApp from './Components/SimpleApp';

class View {  
    private app: PIXI.Application;
    private container: PIXI.Container;
    private root:any;

    constructor() {
        this.app = new SimpleApp();
        this.container = new PIXI.Container();
        this.root = document.getElementById('root');
    }

    init() {       
        this.app.stage.addChild(this.container);
        this.root.appendChild(this.app.view);
    }

    add(element: PIXI.Sprite) {
        this.container.addChild(element);
    }

    remove(element: PIXI.Sprite) {
        this.container.removeChild(element);
    }

    showApp() {
        this.root.style.visibility = 'visible';
    }

    hideApp() {
        this.root.style.visibility = 'hidden';
    }

    removeApp () {
        this.root.removeChild(this.app.view);
    }
}

export default View;