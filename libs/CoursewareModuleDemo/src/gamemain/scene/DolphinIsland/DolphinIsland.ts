
class DolphinIsland extends UIObject {

    public static key: string = "DolphinIsland";

    private pageImg1: eui.Image; 
    private pageImg2: eui.Image; 
    private pageImg3: eui.Image; 
    private pageImg4: eui.Image;
    private pageImg5: eui.Image;
    private img_bg: eui.Image;

    private originArr: number[];
    private movedArr: number[];

    /** 龙骨相关 */
    dragonGroup: eui.Group;
    _onClick: dragonBones.Armature;
    _time: number;

    public constructor() {
        super();
        this.skinName = "DolphinIsland_Skin";

        this.originArr = [495, 230, 1210, 370, 475, 650, 1395, 760, 739, 1070];
        this.movedArr = [-554, 351, 1735, 0, -98, 1340, 2240, 762, 900, 1365];
    }

    /** 每次进入 */
    public onAdd(): void {
        this.initScene();
        this.initAddEvent();
    }

    /** 这里进行移出场景的处理 **/
    public onDestroy(): void {
        egret.stopTick(this.onTicker, this);
        const armatureDisplay = this._onClick.getDisplay();
        this.dragonGroup.removeChild(armatureDisplay);
        this.img_bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchCloudMoveHandle, this);
    }

    /** 初始化场景 */
    private initScene() : void {
        for (let i: number = 1; i <= 5; i ++) {
            this["pageImg" + i].x = this.originArr[2 * (i - 1)];
            this["pageImg" + i].y = this.originArr[2 * (i - 1) + 1];
            this["pageImg" + i].touchEnabled = false;
        }

        // 龙骨小手
        this._onClick = DragonBoneManager.getInstance().getDBArmature("hand_anim", "armatureName");
        if (this._onClick)
        {
            const armatureDisplay = this._onClick.getDisplay();
            this.dragonGroup.addChild(armatureDisplay);
            this._onClick.animation.play("hand2", 0);
        }
    }

    /** 初始化监听 */
    private initAddEvent() : void {
        egret.startTick(this.onTicker, this);
        this.img_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchCloudMoveHandle, this);
        this.dragonGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goNextSceneHandle, this);
    }

    /** 跳转页面 */
    private goNextSceneHandle() : void {
        //CommunicationManager.getInstance().goTargetPageHandle(1);
        //CommunicationManager.getInstance().makePostMessage("onFileMessage", "goNextScene", 1);
    }

    /** 接受信令 */
    public execMessage(data: any): void {
        if (data["touchTap"]) {
            this.picMovedFun();
        } else if (data["goNextScene"]) {
            const scene: number = Number(data["goNextScene"]);
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "goNextScene", scene);
        }
    }

    /** 注册计时器 */
    private onTicker(timeStamp:number) {
        if(!this._time) {
            this._time = timeStamp;
        }

        var now = timeStamp;
        var pass = now - this._time;
        this._time = now;

        dragonBones.WorldClock.clock.advanceTime(pass / 1000);

        return false;
    }
    
    /** 点击云朵散开 */
    private touchCloudMoveHandle(): void {
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchTap", 1);
        this.picMovedFun();
    }

    private picMovedFun(): void {
        for (let i: number = 1; i <= 5; i ++) {
            egret.Tween.get(this["pageImg" + i]).to({x: this.movedArr[2 * (i - 1)], y: this.movedArr[2 * (i - 1) + 1]}, 1000);
        }
    }
}
