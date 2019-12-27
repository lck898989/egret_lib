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
var TweenToCenterScene = (function (_super) {
    __extends(TweenToCenterScene, _super);
    function TweenToCenterScene() {
        var _this = _super.call(this) || this;
        _this.ImgLeftList = [];
        _this.ImgRightList = [];
        _this.ImgHideList = [];
        _this.ImgShowList = [];
        _this.numTweenTime = 1000;
        return _this;
    }
    /** 每次进入 */
    TweenToCenterScene.prototype.onAdd = function () {
        // this.scene_Ani.play(0);
        this.initData();
        this.initAddEvent();
    };
    TweenToCenterScene.prototype.initData = function () {
        this.numCurTween = 0;
        this.posLeftList = [];
        for (var index in this.ImgLeftList) {
            var obj = this.ImgLeftList[index];
            if (obj) {
                this.posLeftList[parseInt(index)] = new egret.Point(obj.x, obj.y);
            }
        }
        this.posRightList = [];
        for (var index in this.ImgRightList) {
            var obj = this.ImgRightList[index];
            if (obj) {
                this.posRightList[parseInt(index)] = new egret.Point(obj.x, obj.y);
            }
        }
        this.resetAllTweenAndPos();
    };
    TweenToCenterScene.prototype.initAddEvent = function () {
        this.btnMerge.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
    };
    TweenToCenterScene.prototype.touchTapEvent = function (event) {
        this.startTweenMerge();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "startTweenMerge", 1);
    };
    TweenToCenterScene.prototype.startTweenMerge = function () {
        var self = this;
        this.numCurTween = 0;
        this.resetAllTweenAndPos();
        var tweenBackFunc = function () {
            self.removeNumCurTween();
            if (self.numCurTween <= 0) {
                // 全部移动完成
                self.endTweenMerge();
            }
        };
        var tweenStartFunc = function (obj, posOff) {
            self.addNumCurTween();
            var posX = obj.x + posOff.x;
            var posY = obj.y + posOff.y;
            egret.Tween.get(obj).to({ x: posX, y: posY }, self.numTweenTime).call(tweenBackFunc);
        };
        for (var _i = 0, _a = this.ImgLeftList; _i < _a.length; _i++) {
            var obj = _a[_i];
            tweenStartFunc(obj, this.posLeftOff);
        }
        for (var _b = 0, _c = this.ImgRightList; _b < _c.length; _b++) {
            var obj = _c[_b];
            tweenStartFunc(obj, this.posRightOff);
        }
    };
    TweenToCenterScene.prototype.resetAllTweenAndPos = function () {
        for (var index in this.ImgLeftList) {
            var obj = this.ImgLeftList[index];
            var pos = this.posLeftList[index];
            if (obj && pos) {
                obj.x = pos.x;
                obj.y = pos.y;
                egret.Tween.removeTweens(obj);
            }
        }
        for (var index in this.ImgRightList) {
            var obj = this.ImgRightList[index];
            var pos = this.posRightList[index];
            if (obj && pos) {
                obj.x = pos.x;
                obj.y = pos.y;
                egret.Tween.removeTweens(obj);
            }
        }
        for (var _i = 0, _a = this.ImgShowList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.visible = false;
        }
        for (var _b = 0, _c = this.ImgHideList; _b < _c.length; _b++) {
            var obj = _c[_b];
            obj.visible = true;
        }
    };
    TweenToCenterScene.prototype.addNumCurTween = function () {
        this.numCurTween++;
    };
    TweenToCenterScene.prototype.removeNumCurTween = function () {
        this.numCurTween--;
    };
    TweenToCenterScene.prototype.endTweenMerge = function () {
        for (var _i = 0, _a = this.ImgHideList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.visible = false;
        }
        for (var _b = 0, _c = this.ImgShowList; _b < _c.length; _b++) {
            var obj = _c[_b];
            obj.visible = true;
        }
    };
    /** 这里进行移出场景的处理 **/
    TweenToCenterScene.prototype.onDestroy = function () {
        // this.scene_Ani_next.play(0);
        this.destoryEvent();
        this.resetData();
        this.destoryData();
    };
    TweenToCenterScene.prototype.resetData = function () {
        this.resetAllTweenAndPos();
    };
    TweenToCenterScene.prototype.destoryData = function () {
        delete this.ImgLeftList;
        this.ImgLeftList = [];
        delete this.posLeftList;
        this.posLeftList = [];
        delete this.ImgRightList;
        this.ImgRightList = [];
        delete this.posRightList;
        this.posRightList = [];
        delete this.ImgHideList;
        this.ImgHideList = [];
        delete this.ImgShowList;
        this.ImgShowList = [];
    };
    TweenToCenterScene.prototype.destoryEvent = function () {
        this.btnMerge.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
    };
    TweenToCenterScene.prototype.execMessage = function (data) {
        if (data["startTweenMerge"]) {
            this.startTweenMerge();
        }
    };
    return TweenToCenterScene;
}(UIObject));
__reflect(TweenToCenterScene.prototype, "TweenToCenterScene");
//# sourceMappingURL=TweenToCenterScene.js.map