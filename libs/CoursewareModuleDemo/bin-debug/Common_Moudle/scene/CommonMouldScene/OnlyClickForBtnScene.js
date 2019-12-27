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
var OnlyClickForBtnScene = (function (_super) {
    __extends(OnlyClickForBtnScene, _super);
    function OnlyClickForBtnScene() {
        var _this = _super.call(this) || this;
        _this.CurState = 0;
        _this.ImgList = [];
        return _this;
    }
    /** 每次进入 */
    OnlyClickForBtnScene.prototype.onAdd = function () {
        // this.scene_Ani.play(0);
        this.CurState = 0;
        this.refreshStateView();
        this.initAddEvent();
    };
    OnlyClickForBtnScene.prototype.initAddEvent = function () {
        this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
    };
    OnlyClickForBtnScene.prototype.touchTapEvent = function (event) {
        if (this.CurState < this.ImgList.length) {
            this.CurState++;
        }
        this.refreshStateView();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "next", 1);
    };
    /** 这里进行移出场景的处理 **/
    OnlyClickForBtnScene.prototype.onDestroy = function () {
        // this.scene_Ani_next.play(0);
        delete this.ImgList;
        this.ImgList = [];
        this.btnNext.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
    };
    OnlyClickForBtnScene.prototype.refreshStateView = function () {
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
    OnlyClickForBtnScene.prototype.execMessage = function (data) {
        if (data["next"]) {
            this.revNextLayerHandle();
        }
    };
    OnlyClickForBtnScene.prototype.revNextLayerHandle = function () {
        this.CurState++;
        this.refreshStateView();
    };
    return OnlyClickForBtnScene;
}(UIObject));
__reflect(OnlyClickForBtnScene.prototype, "OnlyClickForBtnScene");
//# sourceMappingURL=OnlyClickForBtnScene.js.map