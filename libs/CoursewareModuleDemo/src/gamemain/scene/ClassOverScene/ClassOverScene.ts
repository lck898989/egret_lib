/**
 * Page11 课程结束页面
 */
class ClassOverScene extends UIObject {
    public static key: string = "ClassOverScene";

    public img0: eui.Image;
    public img1: eui.Image;
    public img2: eui.Image;
    public img3: eui.Image;
    public img4: eui.Image;
    public img5: eui.Image;
    public img6: eui.Image;
    public img7: eui.Image;
    public img8: eui.Image;
    public img9: eui.Image;
    public img10: eui.Image;
    public img11: eui.Image;

    public constructor() {
        super();

        this.skinName = "ClassOverScene_Skin";
    }

    /** 每次进入 */
    public onAdd(): void {
        for (let i: number = 0; i <= 11; i++) {
            this["img" + i].alpha = 0;
            this["img" + i].visible = false;
        }

        egret.setTimeout(this.showScene, this, 400);
    }
    // 这里是清理数据
    public onDestroy(): void {
        this.resetFun("img0", 0, 265.5);
        this.resetFun("img1", 402.5, 0);
        this.resetFun("img2", 679.5, 0);
        this.resetFun("img3", 958.02, 0);
        this.resetFun("img4", 59, 0);
        this.resetFun("img5", 251, 0);
        this.resetFun("img6", 471, 0);
        this.resetFun("img7", 681, 0);
        this.resetFun("img8", 882, 0);
        this.resetFun("img9", 1086, 0);
        this.resetFun("img10", 1266, 0);
        this.resetFun("img11", 1467, 0);
    }

    private showScene(): void {
        egret.Tween.get(this.img0).to({x: 165, alpha: 1}, 300);
        egret.Tween.get(this.img1).to({y: 448, alpha: 1}, 350);
        egret.Tween.get(this.img2).to({y: 448, alpha: 1}, 400);
        egret.Tween.get(this.img3).to({y: 448, alpha: 1}, 450);

        let second: number = 100;
        for (let i: number = 0; i <= 11; i++) {
            const obj: Object = new Object();
            obj["name"] = "img" + i;
            egret.setTimeout(this.doShowAction, this, second, obj);

            second += 50;
        }

        egret.Tween.get(this.img4).to({y: 794, alpha: 1}, 500);
        egret.Tween.get(this.img5).to({y: 794, alpha: 1}, 550);
        egret.Tween.get(this.img6).to({y: 794, alpha: 1}, 600);
        egret.Tween.get(this.img7).to({y: 794, alpha: 1}, 650);
        egret.Tween.get(this.img8).to({y: 794, alpha: 1}, 700);
        egret.Tween.get(this.img9).to({y: 794, alpha: 1}, 750);
        egret.Tween.get(this.img10).to({y: 794, alpha: 1}, 800);
        egret.Tween.get(this.img11).to({y: 794, alpha: 1}, 850);
    }

    private doShowAction(obj: Object): void {
        const str: string = obj["name"];
        this[str].visible = true;
    }

    private resetFun(name, X, Y) {
        this[name].x = X;
        this[name].y = Y;
    }
}
