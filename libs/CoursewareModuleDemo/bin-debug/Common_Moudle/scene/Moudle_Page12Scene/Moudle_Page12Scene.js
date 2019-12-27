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
// need: this.ImgLeftList        左侧需要运动的图片
//       this.ImgRightList       右侧需要运动的图片   
//       this.ImgHideList        运动完成 需要隐藏的图片
//       this.ImgShowList        运动完成 需要显示的图片
//       this.posLeftOff         左侧图片 移动的偏移量
//       this.posRightOff        右侧图片 移动的偏移量
//       页面需要包含名称为 btnMerge 的图片
// desc: 点击 btnMerge   左侧图片移动一定偏移量  
//                      右侧图片移动一定偏移量  
//                      显示列表 显示
//                      隐藏列表 隐藏
var Moudle_Page12Scene = (function (_super) {
    __extends(Moudle_Page12Scene, _super);
    function Moudle_Page12Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page12Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    Moudle_Page12Scene.prototype.onAdd = function () {
        this.ImgLeftList.push(this.img_left_1);
        this.ImgLeftList.push(this.img_left_bg);
        this.ImgRightList.push(this.img_right_1);
        this.ImgRightList.push(this.img_right_bg);
        this.ImgHideList.push(this.img_left_1);
        this.ImgHideList.push(this.img_right_1);
        this.ImgShowList.push(this.img_target_1);
        this.ImgShowList.push(this.img_target_2);
        this.ImgShowList.push(this.img_target_3);
        this.ImgShowList.push(this.img_title);
        this.posLeftOff = new egret.Point(284 - 72, 0);
        this.posRightOff = new egret.Point(598 - 814, 0);
        _super.prototype.onAdd.call(this);
    };
    /** 这里进行移出场景的处理 **/
    Moudle_Page12Scene.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    Moudle_Page12Scene.key = "Moudle_Page12Scene";
    return Moudle_Page12Scene;
}(TweenToCenterScene));
__reflect(Moudle_Page12Scene.prototype, "Moudle_Page12Scene");
//# sourceMappingURL=Moudle_Page12Scene.js.map