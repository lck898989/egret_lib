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
//          this.numMax         暂时未使用  
// desc:    点击图片       拖动图片 
//          拖动        
//          拖动结束       拖动到可放置区域       放置
//                        拖动到不可放置区域     回到起始位置
var Moudle_Page11Scene = (function (_super) {
    __extends(Moudle_Page11Scene, _super);
    function Moudle_Page11Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page11Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    Moudle_Page11Scene.prototype.onAdd = function () {
        this.ImgList.push(this.img_1);
        this.ImgList.push(this.img_2);
        this.ImgList.push(this.img_3);
        this.ImgList.push(this.img_4);
        this.ruleRectList.push(this.rect_1);
        this.ruleRectList.push(this.rect_2);
        this.ruleRectList.push(this.rect_3);
        this.ruleRectList.push(this.rect_4);
        _super.prototype.onAdd.call(this);
    };
    Moudle_Page11Scene.key = "Moudle_Page11Scene";
    return Moudle_Page11Scene;
}(DropToRuleRectScene));
__reflect(Moudle_Page11Scene.prototype, "Moudle_Page11Scene");
//# sourceMappingURL=Moudle_Page11Scene.js.map