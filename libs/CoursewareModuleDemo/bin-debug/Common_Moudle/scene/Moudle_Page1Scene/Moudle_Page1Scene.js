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
// need: this.ImgList 
// desc: 点击屏幕 下一页 this.ImgList 根据索引 按顺序显示
//       如需要 个性显示 请重写 refreshStateView 方法
var Moudle_Page1Scene = (function (_super) {
    __extends(Moudle_Page1Scene, _super);
    function Moudle_Page1Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page1Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    Moudle_Page1Scene.prototype.onAdd = function () {
        this.ImgList.push(this.img_1);
        _super.prototype.onAdd.call(this);
    };
    Moudle_Page1Scene.key = "Moudle_Page1Scene";
    return Moudle_Page1Scene;
}(OnlyClickScene));
__reflect(Moudle_Page1Scene.prototype, "Moudle_Page1Scene");
//# sourceMappingURL=Moudle_Page1Scene.js.map