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
// from 刘斌毅
// need:    this.ImgList        可以拖动的列表             锚点需要在中心
//          this.ruleRectList   可以放置的位置列表          锚点需要在中心 
// desc:    点击图片       拖动图片 
//          拖动        
//          拖动结束       可放置区域放置 随意放置
var Moudle_Page10Scene = (function (_super) {
    __extends(Moudle_Page10Scene, _super);
    function Moudle_Page10Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page10Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    Moudle_Page10Scene.prototype.onAdd = function () {
        this.ImgList.push(this.img_1);
        this.ImgList.push(this.img_2);
        this.ImgList.push(this.img_3);
        this.ImgList.push(this.img_4);
        this.ImgList.push(this.img_5);
        this.ImgList.push(this.img_6);
        this.ImgList.push(this.img_7);
        this.ImgList.push(this.img_8);
        this.ImgList.push(this.img_9);
        this.ImgList.push(this.img_10);
        this.ImgList.push(this.img_11);
        for (var _i = 0, _a = this.ImgList; _i < _a.length; _i++) {
            var img = _a[_i];
            img.pixelHitTest = true;
        }
        this.ruleRectList.push(this.rect_1);
        _super.prototype.onAdd.call(this);
        this.initSelfData();
    };
    Moudle_Page10Scene.prototype.initSelfData = function () {
        this.img_Door1.visible = true;
        this.group.setChildIndex(this.img_Door1, this.group.numChildren - 1);
        this.img_Door2.visible = false;
        this.img_Door1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapClickEvent, this);
    };
    /** 这里进行移出场景的处理 **/
    Moudle_Page10Scene.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.img_Door1.visible = true;
        this.img_Door2.visible = false;
        this.img_Door1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapClickEvent, this);
    };
    Moudle_Page10Scene.prototype.touchTapClickEvent = function (event) {
        this.img_Door1.visible = false;
        this.img_Door2.visible = true;
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "click", "1");
    };
    Moudle_Page10Scene.prototype.execMessage = function (data) {
        _super.prototype.execMessage.call(this, data);
        if (data["click"]) {
            this.img_Door1.visible = false;
            this.img_Door2.visible = true;
        }
    };
    Moudle_Page10Scene.key = "Moudle_Page10Scene";
    return Moudle_Page10Scene;
}(DropAnyToRuleRectScene));
__reflect(Moudle_Page10Scene.prototype, "Moudle_Page10Scene");
//# sourceMappingURL=Moudle_Page10Scene.js.map