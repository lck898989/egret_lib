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
// need:    this.ImgList        可以拖动的列表
//          this.numMax         暂时未使用  
//          页面中需要包含        btnReset     重置
//                              rectCancle   取消物品的方框区域
// desc:    点击图片        生成新图片 
//          随意拖动        
//          拖动到取消位置   删除图片             
var Moudle_Page6Scene = (function (_super) {
    __extends(Moudle_Page6Scene, _super);
    function Moudle_Page6Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page6Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    Moudle_Page6Scene.prototype.onAdd = function () {
        this.ImgList.push(this.img_1);
        this.ImgList.push(this.img_2);
        this.ImgList.push(this.img_3);
        this.numMax = 7;
        _super.prototype.onAdd.call(this);
    };
    /** 这里进行移出场景的处理 **/
    Moudle_Page6Scene.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    Moudle_Page6Scene.key = "Moudle_Page6Scene";
    return Moudle_Page6Scene;
}(DragAnyMakeForMaxAndCancleScene));
__reflect(Moudle_Page6Scene.prototype, "Moudle_Page6Scene");
//# sourceMappingURL=Moudle_Page6Scene.js.map