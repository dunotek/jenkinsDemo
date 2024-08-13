import { _decorator, Component, Label, Node, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainScript')
export class MainScript extends Component {
    
    @property(Label) label: Label = null;

    tweenTick: any = null;
    currentTick = 0;
    start() {
        this.tweenTick = tween(this.node)
            .call(()=> {
                this.currentTick ++;
                this.label.string = this.currentTick + "";
            })
            .delay(1)
            .union()
            .repeatForever()
            .start();
    }

    update(deltaTime: number) {
        
    }
}

