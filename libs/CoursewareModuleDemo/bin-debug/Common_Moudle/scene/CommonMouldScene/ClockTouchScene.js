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
 * 时钟可触摸旋转
 */
var ClockTouchScene = (function (_super) {
    __extends(ClockTouchScene, _super);
    function ClockTouchScene() {
        var _this = _super.call(this) || this;
        _this.clockImgArr = [];
        _this._initPosArr = [];
        return _this;
    }
    /** 每次进入 */
    ClockTouchScene.prototype.onAdd = function () {
        this.initScene();
        this.initAddEvent();
    };
    /** 这里进行移除场景处理 */
    ClockTouchScene.prototype.onDestroy = function () {
        for (var i = 0; i < this.clockImgArr.length; i++) {
            if (this.clockImgArr[i].hasEventListener(egret.TouchEvent.TOUCH_BEGIN)) {
                this.clockImgArr[i].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doTouchBeginHandle, this);
            }
        }
        this.clockImgArr = [];
    };
    /** 初始化场景 */
    ClockTouchScene.prototype.initScene = function () {
        if (this._initPosArr.length <= 0) {
            for (var i = 0; i < this.clockImgArr.length; i++) {
                this._initPosArr.push(this.clockImgArr[i].x);
                this._initPosArr.push(this.clockImgArr[i].y);
            }
        }
        else {
            for (var i = 0; i < this.clockImgArr.length; i++) {
                this.clockImgArr[i].x = this._initPosArr[i * 2];
                this.clockImgArr[i].y = this._initPosArr[i * 2 + 1];
            }
        }
        for (var i = 0; i < this.clockImgArr.length; i++) {
            this.clockImgArr[i].pixelHitTest = true;
            this.clockImgArr[i].name = String(i);
        }
    };
    /** 初始添加监听 */
    ClockTouchScene.prototype.initAddEvent = function () {
        for (var i = 0; i < this.clockImgArr.length; i++) {
            this.clockImgArr[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doTouchBeginHandle, this);
        }
    };
    /** 处理开始点击 */
    ClockTouchScene.prototype.doTouchBeginHandle = function (e) {
        this._touchImg = e.currentTarget;
        if (!this._touchImg) {
            return;
        }
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.doTouchMoveHandle, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.doTouchEndHandle, this);
    };
    /** 处理移动中 */
    ClockTouchScene.prototype.doTouchMoveHandle = function (e) {
        if (!this._touchImg) {
            this.stop();
            return;
        }
        var dx = e.stageX - this._touchImg.x;
        var dy = e.stageY - this._touchImg.y;
        this._touchImg.rotation = Math.atan2(dy, dx) / Math.PI * 180 + 90;
        var obj = new Object();
        obj["itemName"] = this._touchImg.name;
        obj["itemRotation"] = this._touchImg.rotation;
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "moveIng", obj);
    };
    ClockTouchScene.prototype.stop = function () {
        if (this.stage.hasEventListener(egret.TouchEvent.TOUCH_MOVE)) {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.doTouchMoveHandle, this);
        }
        if (this._touchImg.hasEventListener(egret.TouchEvent.TOUCH_BEGIN)) {
            this._touchImg.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doTouchBeginHandle, this);
        }
        if (this.stage.hasEventListener(egret.TouchEvent.TOUCH_END)) {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.doTouchEndHandle, this);
        }
    };
    /** 处理移动结束 */
    ClockTouchScene.prototype.doTouchEndHandle = function (e) {
        if (!this._touchImg) {
            return;
        }
        if (this.stage.hasEventListener(egret.TouchEvent.TOUCH_MOVE)) {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.doTouchMoveHandle, this);
        }
        if (this.stage.hasEventListener(egret.TouchEvent.TOUCH_END)) {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.doTouchEndHandle, this);
        }
        var obj = new Object();
        obj["itemName"] = this._touchImg.name;
        obj["itemRotation"] = this._touchImg.rotation;
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "moveEnd", obj);
    };
    /** 接收信令 */
    ClockTouchScene.prototype.execMessage = function (data) {
        if (data["moveIng"]) {
            var name_1 = data["moveIng"]["itemName"];
            var ro = Number(data["moveIng"]["itemRotation"]);
            this.revMoveingHandle(name_1, ro);
        }
        else if (data["moveEnd"]) {
            var name_2 = data["moveEnd"]["itemName"];
            var ro = Number(data["moveEnd"]["itemRotation"]);
            this.revMoveEndHandle(name_2, ro);
        }
    };
    /** 接收移动中 */
    ClockTouchScene.prototype.revMoveingHandle = function (itemName, itemRotation) {
        this._touchImg = this.group.getChildByName(itemName);
        if (!this._touchImg) {
            return;
        }
        this._touchImg.rotation = itemRotation;
    };
    /** 接收鼠标抬起 */
    ClockTouchScene.prototype.revMoveEndHandle = function (itemName, itemRotation) {
        this._touchImg = this.group.getChildByName(itemName);
        if (!this._touchImg) {
            return;
        }
        this._touchImg.rotation = itemRotation;
    };
    return ClockTouchScene;
}(UIObject));
__reflect(ClockTouchScene.prototype, "ClockTouchScene");
//# sourceMappingURL=ClockTouchScene.js.map