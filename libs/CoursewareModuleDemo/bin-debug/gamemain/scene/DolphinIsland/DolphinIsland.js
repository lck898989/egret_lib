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
var DolphinIsland = (function (_super) {
    __extends(DolphinIsland, _super);
    function DolphinIsland() {
        var _this = _super.call(this) || this;
        _this.skinName = "DolphinIsland_Skin";
        _this.originArr = [495, 230, 1210, 370, 475, 650, 1395, 760, 739, 1070];
        _this.movedArr = [-554, 351, 1735, 0, -98, 1340, 2240, 762, 900, 1365];
        return _this;
    }
    /** 每次进入 */
    DolphinIsland.prototype.onAdd = function () {
        this.initScene();
        this.initAddEvent();
    };
    /** 这里进行移出场景的处理 **/
    DolphinIsland.prototype.onDestroy = function () {
        egret.stopTick(this.onTicker, this);
        var armatureDisplay = this._onClick.getDisplay();
        this.dragonGroup.removeChild(armatureDisplay);
        this.img_bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchCloudMoveHandle, this);
    };
    /** 初始化场景 */
    DolphinIsland.prototype.initScene = function () {
        for (var i = 1; i <= 5; i++) {
            this["pageImg" + i].x = this.originArr[2 * (i - 1)];
            this["pageImg" + i].y = this.originArr[2 * (i - 1) + 1];
            this["pageImg" + i].touchEnabled = false;
        }
        // 龙骨小手
        this._onClick = DragonBoneManager.getInstance().getDBArmature("hand_anim", "armatureName");
        if (this._onClick) {
            var armatureDisplay = this._onClick.getDisplay();
            this.dragonGroup.addChild(armatureDisplay);
            this._onClick.animation.play("hand2", 0);
        }
    };
    /** 初始化监听 */
    DolphinIsland.prototype.initAddEvent = function () {
        egret.startTick(this.onTicker, this);
        this.img_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchCloudMoveHandle, this);
        this.dragonGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goNextSceneHandle, this);
    };
    /** 跳转页面 */
    DolphinIsland.prototype.goNextSceneHandle = function () {
        //CommunicationManager.getInstance().goTargetPageHandle(1);
        //CommunicationManager.getInstance().makePostMessage("onFileMessage", "goNextScene", 1);
    };
    /** 接受信令 */
    DolphinIsland.prototype.execMessage = function (data) {
        if (data["touchTap"]) {
            this.picMovedFun();
        }
        else if (data["goNextScene"]) {
            var scene = Number(data["goNextScene"]);
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "goNextScene", scene);
        }
    };
    /** 注册计时器 */
    DolphinIsland.prototype.onTicker = function (timeStamp) {
        if (!this._time) {
            this._time = timeStamp;
        }
        var now = timeStamp;
        var pass = now - this._time;
        this._time = now;
        dragonBones.WorldClock.clock.advanceTime(pass / 1000);
        return false;
    };
    /** 点击云朵散开 */
    DolphinIsland.prototype.touchCloudMoveHandle = function () {
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchTap", 1);
        this.picMovedFun();
    };
    DolphinIsland.prototype.picMovedFun = function () {
        for (var i = 1; i <= 5; i++) {
            egret.Tween.get(this["pageImg" + i]).to({ x: this.movedArr[2 * (i - 1)], y: this.movedArr[2 * (i - 1) + 1] }, 1000);
        }
    };
    DolphinIsland.key = "DolphinIsland";
    return DolphinIsland;
}(UIObject));
__reflect(DolphinIsland.prototype, "DolphinIsland");
//# sourceMappingURL=DolphinIsland.js.map