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
var Moudle_Page13Scene = (function (_super) {
    __extends(Moudle_Page13Scene, _super);
    function Moudle_Page13Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page13Scene_Skin";
        _this._arr1 = new Array();
        _this._arr2 = new Array();
        _this._arrList = new Array();
        return _this;
    }
    /** 每次进入 */
    Moudle_Page13Scene.prototype.onAdd = function () {
        this._arr1.push(this.img1);
        this._arr1.push(this.img3);
        this._arr1.push(this.img5);
        this._arr1.push(this.img7);
        this._arr1.push(this.img9);
        this._arr2.push(this.img2);
        this._arr2.push(this.img4);
        this._arr2.push(this.img6);
        this._arr2.push(this.img8);
        this._arr2.push(this.img10);
        this._arrList.push(this._arr1);
        this._arrList.push(this._arr2);
        _super.prototype.initScene.call(this, this._arrList);
    };
    Moudle_Page13Scene.key = "Moudle_Page13Scene";
    return Moudle_Page13Scene;
}(OnlySelectedScene));
__reflect(Moudle_Page13Scene.prototype, "Moudle_Page13Scene");
//# sourceMappingURL=Moudle_Page13Scene.js.map