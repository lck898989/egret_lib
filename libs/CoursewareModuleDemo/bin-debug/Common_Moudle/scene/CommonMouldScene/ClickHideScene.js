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
var ClickHideScene = (function (_super) {
    __extends(ClickHideScene, _super);
    function ClickHideScene() {
        var _this = _super.call(this) || this;
        _this.ImgSelectedList = [];
        return _this;
    }
    /** 每次进入 */
    ClickHideScene.prototype.onAdd = function () {
        // this.scene_Ani.play(0);
        this.initData();
        this.initAddEvent();
    };
    ClickHideScene.prototype.initData = function () {
        for (var index in this.ImgSelectedList) {
            var obj = this.ImgSelectedList[parseInt(index)];
            if (obj) {
                obj.visible = true;
            }
        }
    };
    ClickHideScene.prototype.initAddEvent = function () {
        if (this.ImgSelectedList) {
            for (var _i = 0, _a = this.ImgSelectedList; _i < _a.length; _i++) {
                var obj = _a[_i];
                obj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapImgEvent, this);
            }
        }
        if (this.btnReset) {
            this.btnReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapResetEvent, this);
        }
    };
    ClickHideScene.prototype.resetData = function () {
        for (var index in this.ImgSelectedList) {
            var obj = this.ImgSelectedList[parseInt(index)];
            if (obj) {
                obj.visible = true;
            }
        }
    };
    ClickHideScene.prototype.touchTapImgEvent = function (event) {
        var index = this.ImgSelectedList.indexOf(event.currentTarget);
        if (index > -1) {
            for (var indexTemp in this.ImgSelectedList) {
                var obj_1 = this.ImgSelectedList[parseInt(indexTemp)];
                if (obj_1) {
                    if (parseInt(indexTemp) == index) {
                        obj_1.visible = false;
                    }
                }
            }
            var obj = new Object();
            obj["chooseIndex"] = index.toString();
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "choose", obj);
        }
        else {
            Log.trace("ClickHideScene", " touchTapChooseRectEvent error  index error ");
        }
    };
    /** 这里进行移出场景的处理 **/
    ClickHideScene.prototype.onDestroy = function () {
        // this.scene_Ani_next.play(0);
        this.destroyEvent();
        this.destroyData();
    };
    ClickHideScene.prototype.destroyData = function () {
        this.resetData();
        delete this.ImgSelectedList;
        this.ImgSelectedList = [];
    };
    ClickHideScene.prototype.destroyEvent = function () {
        if (this.ImgSelectedList) {
            for (var _i = 0, _a = this.ImgSelectedList; _i < _a.length; _i++) {
                var obj = _a[_i];
                obj.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapImgEvent, this);
            }
        }
        if (this.btnReset) {
            this.btnReset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapResetEvent, this);
        }
    };
    ClickHideScene.prototype.touchTapResetEvent = function (event) {
        this.resetData();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "reset", "1");
    };
    ClickHideScene.prototype.execMessage = function (data) {
        if (data["choose"]) {
            var chooseIndex = parseInt(data["choose"]["chooseIndex"]);
            this.revChooseHandle(chooseIndex);
        }
        else if (data["reset"]) {
            this.resetData();
        }
    };
    ClickHideScene.prototype.revChooseHandle = function (chooseIndex) {
        if (chooseIndex > -1) {
            for (var indexTemp in this.ImgSelectedList) {
                var obj = this.ImgSelectedList[parseInt(indexTemp)];
                if (obj) {
                    if (parseInt(indexTemp) == chooseIndex) {
                        obj.visible = false;
                    }
                }
            }
        }
    };
    return ClickHideScene;
}(UIObject));
__reflect(ClickHideScene.prototype, "ClickHideScene");
//# sourceMappingURL=ClickHideScene.js.map