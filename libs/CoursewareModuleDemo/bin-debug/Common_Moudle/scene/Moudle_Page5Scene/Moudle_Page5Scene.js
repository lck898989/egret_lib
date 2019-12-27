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
// from 郑岩
var Moudle_Page5Scene = (function (_super) {
    __extends(Moudle_Page5Scene, _super);
    function Moudle_Page5Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page5Scene_Skin";
        _this.arr1 = new Array();
        _this.arr2 = new Array();
        return _this;
    }
    /** 每次进入 */
    Moudle_Page5Scene.prototype.onAdd = function () {
        this.clickItemArr.push(this.c1);
        this.clickItemArr.push(this.c2);
        this.arr1.push(this.sImg1);
        this.arr2.push(this.sImg2);
        this.showPhaseArr.push(this.arr1);
        this.showPhaseArr.push(this.arr2);
        _super.prototype.initScene.call(this);
    };
    Moudle_Page5Scene.key = "Moudle_Page5Scene";
    return Moudle_Page5Scene;
}(ClickItemForShowPhaseScene));
__reflect(Moudle_Page5Scene.prototype, "Moudle_Page5Scene");
//# sourceMappingURL=Moudle_Page5Scene.js.map