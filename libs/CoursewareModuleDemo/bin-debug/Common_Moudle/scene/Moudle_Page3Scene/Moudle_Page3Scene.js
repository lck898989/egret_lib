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
// need: this.ImgSelectedList
//       this.rectListSelect
// desc: 单选  点击方框  对应的img显示  其余的隐藏
//       ImgSelectedList 和 ImgSelectedList 必须一一对应
var Moudle_Page3Scene = (function (_super) {
    __extends(Moudle_Page3Scene, _super);
    function Moudle_Page3Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page3Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    Moudle_Page3Scene.prototype.onAdd = function () {
        this.ImgSelectedList.push(this.img_1);
        this.ImgSelectedList.push(this.img_2);
        this.ImgSelectedList.push(this.img_3);
        this.rectListSelect.push(this.rect_1);
        this.rectListSelect.push(this.rect_2);
        this.rectListSelect.push(this.rect_3);
        _super.prototype.onAdd.call(this);
    };
    Moudle_Page3Scene.key = "Moudle_Page3Scene";
    return Moudle_Page3Scene;
}(ClickOneChooseScene));
__reflect(Moudle_Page3Scene.prototype, "Moudle_Page3Scene");
//# sourceMappingURL=Moudle_Page3Scene.js.map