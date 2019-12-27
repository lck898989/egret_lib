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
/**
 *
 */
var Moudle_Page16Scene = (function (_super) {
    __extends(Moudle_Page16Scene, _super);
    function Moudle_Page16Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page16Scene_Skin";
        return _this;
    }
    Moudle_Page16Scene.prototype.onAdd = function () {
        this.hourImg.rotation = 0;
        this.secImg.rotation = 0;
        this.clockImgArr.push(this.hourImg);
        this.clockImgArr.push(this.secImg);
        _super.prototype.onAdd.call(this);
    };
    Moudle_Page16Scene.key = "Moudle_Page16Scene";
    return Moudle_Page16Scene;
}(ClockTouchScene));
__reflect(Moudle_Page16Scene.prototype, "Moudle_Page16Scene");
//# sourceMappingURL=Moudle_Page16Scene.js.map