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
// need:    this.ImgList       可以拖动的列表             锚点需要在中心
//          需要提供            btnReset    
//          可选参数            this.rectList            回答选择框区域
//                             this.imgSelected         回答选择框图片
//                             this.indexTrueAnswer     回答正确index  
//                             需要拷贝 animation  sound
// desc:    点击图片       随意拖动图片 
//          点击选择框     弹出回答正确or错误
var Moudle_Page9Scene = (function (_super) {
    __extends(Moudle_Page9Scene, _super);
    function Moudle_Page9Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page9Scene_Skin";
        return _this;
    }
    Moudle_Page9Scene.prototype.onAdd = function () {
        this.ImgList.push(this.img_1);
        this.ImgList.push(this.img_2);
        this.ImgList.push(this.img_3);
        // 可选参数
        var rectList = [];
        rectList.push(this.rect_1);
        rectList.push(this.rect_2);
        rectList.push(this.rect_3);
        this.initSelectData(rectList, this.img_choose, 1);
        _super.prototype.onAdd.call(this);
    };
    /** 这里进行移出场景的处理 **/
    Moudle_Page9Scene.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    Moudle_Page9Scene.key = "Moudle_Page9Scene";
    return Moudle_Page9Scene;
}(DragAnyOptionalChooseBtn));
__reflect(Moudle_Page9Scene.prototype, "Moudle_Page9Scene");
//# sourceMappingURL=Moudle_Page9Scene.js.map