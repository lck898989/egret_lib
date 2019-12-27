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
var OnlyClickScene = (function (_super) {
    __extends(OnlyClickScene, _super);
    function OnlyClickScene() {
        var _this = _super.call(this) || this;
        _this.CurState = 0;
        _this.ImgList = [];
        return _this;
    }
    /** 每次进入 */
    OnlyClickScene.prototype.onAdd = function () {
        // this.scene_Ani.play(0);
        this.CurState = 0;
        this.refreshStateView();
        this.initAddEvent();
    };
    OnlyClickScene.prototype.initAddEvent = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
    };
    OnlyClickScene.prototype.touchTapEvent = function (event) {
        if (this.CurState < this.ImgList.length) {
            this.CurState++;
        }
        this.refreshStateView();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "next", 1);
    };
    /** 这里进行移出场景的处理 **/
    OnlyClickScene.prototype.onDestroy = function () {
        // this.scene_Ani_next.play(0);
        delete this.ImgList;
        this.ImgList = [];
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
    };
    OnlyClickScene.prototype.refreshStateView = function () {
        for (var i in this.ImgList) {
            var index = parseInt(i);
            var obj = this.ImgList[index];
            if (obj) {
                if (this.CurState <= index) {
                    obj.visible = false;
                }
                else {
                    obj.visible = true;
                }
            }
        }
    };
    OnlyClickScene.prototype.execMessage = function (data) {
        if (data["next"]) {
            this.revNextLayerHandle();
        }
    };
    OnlyClickScene.prototype.revNextLayerHandle = function () {
        this.CurState++;
        this.refreshStateView();
    };
    return OnlyClickScene;
}(UIObject));
__reflect(OnlyClickScene.prototype, "OnlyClickScene");
//# sourceMappingURL=OnlyClickScene.js.map