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
var ClickOneChooseScene = (function (_super) {
    __extends(ClickOneChooseScene, _super);
    function ClickOneChooseScene() {
        var _this = _super.call(this) || this;
        _this.ImgSelectedList = [];
        _this.rectListSelect = [];
        return _this;
    }
    /** 每次进入 */
    ClickOneChooseScene.prototype.onAdd = function () {
        // this.scene_Ani.play(0);
        this.initData();
        this.initAddEvent();
    };
    ClickOneChooseScene.prototype.initData = function () {
        for (var index in this.ImgSelectedList) {
            var obj = this.ImgSelectedList[parseInt(index)];
            if (obj) {
                obj.visible = false;
            }
        }
    };
    ClickOneChooseScene.prototype.initAddEvent = function () {
        if (this.rectListSelect) {
            for (var _i = 0, _a = this.rectListSelect; _i < _a.length; _i++) {
                var obj = _a[_i];
                obj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapChooseRectEvent, this);
            }
        }
    };
    ClickOneChooseScene.prototype.resetData = function () {
        for (var index in this.ImgSelectedList) {
            var obj = this.ImgSelectedList[parseInt(index)];
            if (obj) {
                obj.visible = false;
            }
        }
    };
    ClickOneChooseScene.prototype.touchTapChooseRectEvent = function (event) {
        var index = this.rectListSelect.indexOf(event.currentTarget);
        if (index > -1) {
            for (var indexTemp in this.ImgSelectedList) {
                var obj_1 = this.ImgSelectedList[parseInt(indexTemp)];
                if (obj_1) {
                    if (parseInt(indexTemp) == index) {
                        obj_1.visible = true;
                    }
                    else {
                        obj_1.visible = false;
                    }
                }
            }
            var obj = new Object();
            obj["chooseIndex"] = index.toString();
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "choose", obj);
        }
        else {
            Log.trace("DragAnyOptionalChooseBtn", " touchTapChooseRectEvent error  index error ");
        }
    };
    /** 这里进行移出场景的处理 **/
    ClickOneChooseScene.prototype.onDestroy = function () {
        // this.scene_Ani_next.play(0);
        this.destroyEvent();
        this.destroyData();
    };
    ClickOneChooseScene.prototype.destroyData = function () {
        this.resetData();
        delete this.ImgSelectedList;
        this.ImgSelectedList = [];
        delete this.rectListSelect;
        this.rectListSelect = [];
    };
    ClickOneChooseScene.prototype.destroyEvent = function () {
        if (this.rectListSelect) {
            for (var _i = 0, _a = this.rectListSelect; _i < _a.length; _i++) {
                var obj = _a[_i];
                obj.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapChooseRectEvent, this);
            }
        }
    };
    ClickOneChooseScene.prototype.execMessage = function (data) {
        if (data["choose"]) {
            var chooseIndex = parseInt(data["choose"]["chooseIndex"]);
            this.revChooseHandle(chooseIndex);
        }
    };
    ClickOneChooseScene.prototype.revChooseHandle = function (chooseIndex) {
        if (chooseIndex > -1) {
            for (var indexTemp in this.ImgSelectedList) {
                var obj = this.ImgSelectedList[parseInt(indexTemp)];
                if (obj) {
                    if (parseInt(indexTemp) == chooseIndex) {
                        obj.visible = true;
                    }
                    else {
                        obj.visible = false;
                    }
                }
            }
        }
    };
    return ClickOneChooseScene;
}(UIObject));
__reflect(ClickOneChooseScene.prototype, "ClickOneChooseScene");
//# sourceMappingURL=ClickOneChooseScene.js.map