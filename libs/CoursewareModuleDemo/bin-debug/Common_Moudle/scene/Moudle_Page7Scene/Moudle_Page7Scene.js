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
//          页面中需要包含        btnReset     重置
//                              rectCancle   取消物品的方框区域
//          可选参数            this.rectList            回答选择框区域
//                             this.imgSelected         回答选择框图片
//                             this.indexTrueAnswer     回答正确index  
//                             需要拷贝 animation  sound
// desc:    点击图片        生成新图片 
//          随意拖动        
//          拖动到取消位置   删除图片 
//          点击选择框     弹出回答正确or错误            
var Moudle_Page7Scene = (function (_super) {
    __extends(Moudle_Page7Scene, _super);
    function Moudle_Page7Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page7Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    Moudle_Page7Scene.prototype.onAdd = function () {
        this.ImgList.push(this.img_1);
        this.ImgList.push(this.img_2);
        this.ImgList.push(this.img_3);
        var rectList = [];
        rectList.push(this.rect_1);
        rectList.push(this.rect_2);
        rectList.push(this.rect_3);
        this.initSelectData(rectList, this.img_choose, 1);
        _super.prototype.onAdd.call(this);
    };
    /** 这里进行移出场景的处理 **/
    Moudle_Page7Scene.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    Moudle_Page7Scene.key = "Moudle_Page7Scene";
    return Moudle_Page7Scene;
}(DragAnyMakeOptionalChooseBtn));
__reflect(Moudle_Page7Scene.prototype, "Moudle_Page7Scene");
//# sourceMappingURL=Moudle_Page7Scene.js.map