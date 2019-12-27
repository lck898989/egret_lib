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
// desc: 点击隐藏
var Moudle_Page4Scene = (function (_super) {
    __extends(Moudle_Page4Scene, _super);
    function Moudle_Page4Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page4Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    Moudle_Page4Scene.prototype.onAdd = function () {
        this.ImgSelectedList.push(this.img_1);
        this.ImgSelectedList.push(this.img_2);
        this.ImgSelectedList.push(this.img_3);
        this.ImgSelectedList.push(this.img_4);
        this.ImgSelectedList.push(this.img_5);
        this.ImgSelectedList.push(this.img_6);
        this.ImgSelectedList.push(this.img_7);
        this.ImgSelectedList.push(this.img_8);
        this.ImgSelectedList.push(this.img_9);
        _super.prototype.onAdd.call(this);
    };
    Moudle_Page4Scene.key = "Moudle_Page4Scene";
    return Moudle_Page4Scene;
}(ClickHideScene));
__reflect(Moudle_Page4Scene.prototype, "Moudle_Page4Scene");
//# sourceMappingURL=Moudle_Page4Scene.js.map