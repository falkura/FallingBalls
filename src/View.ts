import * as PIXI from 'pixi.js';
import SimpleApp from './Components/SimpleApp';

// View component for control visual information

class View {  
    public app: PIXI.Application;
    private container: PIXI.Container;
    private root:any;
    private numberStatistic: PIXI.Text;

    constructor() {
        this.app = new SimpleApp();
        this.container = new PIXI.Container();
        this.root = document.getElementById('root');
        this.numberStatistic = new PIXI.Text('');
    }

    init() {       
        this.app.stage.addChild(this.container);
        this.root.appendChild(this.app.view);
        
        this.numberStatistic.x = 20;
        this.numberStatistic.y = 20;
        this.add(this.numberStatistic);
        this.changeStatistic();
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

    // Change numbers on screen

    changeStatistic(unique:number = 0, same:number = 0) {
        this.numberStatistic.text = `Same: ${same} \nDifferent: ${unique}`;
    }
}

export default View;