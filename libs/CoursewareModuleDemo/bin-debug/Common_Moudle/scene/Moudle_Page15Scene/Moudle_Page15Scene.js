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
// need:    设置 view width height
//           rectCanSet 可放置区域
//          btnReset 重置按钮
//          curComponentIndex 当前component 在this的索引index
//          ImgList 可以拖动的图片
// desc:    点击图片       生成新图片 
//          拖动        
//          拖动结束       可放置区域放置 随意放置
//          左侧 和右侧是相同组件 需要共同初始化
//              
//          左侧和右侧 控件相同
var Moudle_Page15Scene = (function (_super) {
    __extends(Moudle_Page15Scene, _super);
    function Moudle_Page15Scene() {
        var _this = _super.call(this) || this;
        _this.leftView = null;
        _this.rightView = null;
        _this.skinName = "Moudle_Page15Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    Moudle_Page15Scene.prototype.onAdd = function () {
        this.leftView = new DragAnyMakeAndCancleComponent();
        this.addChildAt(this.leftView, 0);
        this.leftView.width = 810;
        this.leftView.height = 1349;
        this.leftView.x = 0;
        this.leftView.y = 0;
        this.leftView.group = this.group;
        this.leftView.rectCanSet = this.rect_left;
        this.leftView.btnReset = this.btnReset;
        this.leftView.curComponentIndex = 1;
        this.leftView.ImgList.push(this.img_left1);
        this.leftView.ImgList.push(this.img_left2);
        this.leftView.ImgList.push(this.img_left3);
        this.leftView.onAdd();
        this.rightView = new DragAnyMakeAndCancleComponent();
        this.addChildAt(this.rightView, 0);
        this.rightView.width = 810;
        this.rightView.height = 1349;
        this.rightView.x = 0;
        this.rightView.y = 0;
        this.rightView.group = this.group;
        this.rightView.rectCanSet = this.rect_right;
        this.rightView.btnReset = this.btnReset;
        this.leftView.curComponentIndex = 2;
        this.rightView.ImgList.push(this.img_right1);
        this.rightView.ImgList.push(this.img_right2);
        this.rightView.ImgList.push(this.img_right3);
        this.rightView.onAdd();
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    Moudle_Page15Scene.prototype.touchEndLayerEvent = function (event) {
        this.leftView.touchEndLayerEvent(event);
        this.rightView.touchEndLayerEvent(event);
    };
    Moudle_Page15Scene.prototype.touchMoveLayerEvent = function (event) {
        this.leftView.touchMoveLayerEvent(event);
        this.rightView.touchMoveLayerEvent(event);
    };
    /** 这里进行移出场景的处理 **/
    Moudle_Page15Scene.prototype.onDestroy = function () {
        this.leftView.onDestroy();
        this.removeChild(this.leftView);
        this.leftView = null;
        this.rightView.onDestroy();
        this.removeChild(this.rightView);
        this.rightView = null;
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    Moudle_Page15Scene.prototype.execMessage = function (data) {
        this.leftView.execMessage(data);
        this.rightView.execMessage(data);
    };
    Moudle_Page15Scene.key = "Moudle_Page15Scene";
    return Moudle_Page15Scene;
}(UIObject));
__reflect(Moudle_Page15Scene.prototype, "Moudle_Page15Scene");
//# sourceMappingURL=Moudle_Page15Scene.js.map