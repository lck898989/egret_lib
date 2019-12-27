var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * Page11 课程结束页面
 */
var ClassOverScene = (function (_super) {
    __extends(ClassOverScene, _super);
    function ClassOverScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "ClassOverScene_Skin";
        return _this;
    }
    /** 每次进入 */
    ClassOverScene.prototype.onAdd = function () {
        for (var i = 0; i <= 11; i++) {
            this["img" + i].alpha = 0;
            this["img" + i].visible = false;
        }
        egret.setTimeout(this.showScene, this, 400);
    };
    // 这里是清理数据
    ClassOverScene.prototype.onDestroy = function () {
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
    };
    ClassOverScene.prototype.showScene = function () {
        egret.Tween.get(this.img0).to({ x: 165, alpha: 1 }, 300);
        egret.Tween.get(this.img1).to({ y: 448, alpha: 1 }, 350);
        egret.Tween.get(this.img2).to({ y: 448, alpha: 1 }, 400);
        egret.Tween.get(this.img3).to({ y: 448, alpha: 1 }, 450);
        var second = 100;
        for (var i = 0; i <= 11; i++) {
            var obj = new Object();
            obj["name"] = "img" + i;
            egret.setTimeout(this.doShowAction, this, second, obj);
            second += 50;
        }
        egret.Tween.get(this.img4).to({ y: 794, alpha: 1 }, 500);
        egret.Tween.get(this.img5).to({ y: 794, alpha: 1 }, 550);
        egret.Tween.get(this.img6).to({ y: 794, alpha: 1 }, 600);
        egret.Tween.get(this.img7).to({ y: 794, alpha: 1 }, 650);
        egret.Tween.get(this.img8).to({ y: 794, alpha: 1 }, 700);
        egret.Tween.get(this.img9).to({ y: 794, alpha: 1 }, 750);
        egret.Tween.get(this.img10).to({ y: 794, alpha: 1 }, 800);
        egret.Tween.get(this.img11).to({ y: 794, alpha: 1 }, 850);
    };
    ClassOverScene.prototype.doShowAction = function (obj) {
        var str = obj["name"];
        this[str].visible = true;
    };
    ClassOverScene.prototype.resetFun = function (name, X, Y) {
        this[name].x = X;
        this[name].y = Y;
    };
    ClassOverScene.key = "ClassOverScene";
    return ClassOverScene;
}(UIObject));
__reflect(ClassOverScene.prototype, "ClassOverScene");
//# sourceMappingURL=ClassOverScene.js.map