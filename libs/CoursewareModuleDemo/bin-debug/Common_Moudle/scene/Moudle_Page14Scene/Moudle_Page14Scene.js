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
// need:    参考DragAnyMakeRuleListCommonScene
//          天平组件need
//                      imgListLeft                 左侧天平上的图片
//                      imgListRight                右侧天平上的图片
//                      imgListBalanceLine          中间旋转的图片
//                      numWeightLeftInit           左侧初始重量
//                      numWeightRightInit          右侧初始重量
//                      rotMax                      最大旋转量
//                      numWeightRotMax             开始旋转的差值重量
//                      pointCenter                 天平中心
//                      setRightItemObjList         左侧放上去的道具 动画 && 坐标       子动画需要自己处理
//                      setLeftItemObjList          右侧放上去的道具 动画 && 坐标       子动画需要自己处理
//                      
//                      refreshForListTouchEnd      设置每个物品有多少重量
// desc:    天平
//          可以放多个天平
//          坐标自己控制
var Moudle_Page14Scene = (function (_super) {
    __extends(Moudle_Page14Scene, _super);
    function Moudle_Page14Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "Moudle_Page14Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    Moudle_Page14Scene.prototype.onAdd = function () {
        this.initSelf();
        this.ImgList.push(this.img_1);
        this.ImgList.push(this.img_2);
        this.ImgList.push(this.img_3);
        this.ImgList.push(this.img_4);
        this.ImgList.push(this.img_5);
        this.countImgList.push(1);
        this.countImgList.push(1);
        this.countImgList.push(1);
        this.countImgList.push(1);
        this.countImgList.push(1);
        this.rectCanSetList.push(this.rect_1);
        this.rectCanSetList.push(this.rect_2);
        _super.prototype.onAdd.call(this);
    };
    Moudle_Page14Scene.prototype.onDestroy = function () {
        this.balanceComponent1.onDestroy();
        delete this.balanceComponent1;
        this.balanceComponent1 = null;
        this.balanceComponent2.onDestroy();
        delete this.balanceComponent2;
        this.balanceComponent2 = null;
        _super.prototype.onDestroy.call(this);
    };
    Moudle_Page14Scene.prototype.isCanSetToRect = function (indexForImgList, indexRect, obj, isNewItem) {
        return this.isCanSetToRectForRectMax(indexRect, obj, 3);
    };
    Moudle_Page14Scene.prototype.initSelf = function () {
        this.balanceComponent1 = new BalanceComponent();
        this.balanceComponent1.initData();
        // 左侧
        this.balanceComponent1.imgListLeft.push(this.img_tp1_3);
        this.balanceComponent1.imgListLeft.push(this.img_tp1_5);
        // 右侧
        this.balanceComponent1.imgListRight.push(this.img_tp1_4);
        this.balanceComponent1.imgListRight.push(this.rect_1);
        // 旋转天平
        this.balanceComponent1.imgListBalanceLine.push(this.img_tp1_2);
        // 左侧当前重量
        this.balanceComponent1.numWeightLeftInit = 3;
        this.balanceComponent1.rotMax = 12;
        this.balanceComponent1.numWeightRotMax = 1;
        this.balanceComponent1.pointCenter = new egret.Point(this.img_tp1_2.x, this.img_tp1_2.y);
        // 设置动画
        var self = this;
        this.balanceComponent1.setRightItemObjList = function (time, xTemp, yTemp) {
            if (time === void 0) { time = null; }
            if (xTemp === void 0) { xTemp = null; }
            if (yTemp === void 0) { yTemp = null; }
            self.setRightItemObjList1(time, xTemp, yTemp);
        };
        this.balanceComponent1.onInit();
        this.balanceComponent2 = new BalanceComponent();
        this.balanceComponent2.initData();
        // 左侧
        this.balanceComponent2.imgListLeft.push(this.img_tp2_3);
        this.balanceComponent2.imgListLeft.push(this.img_tp2_5);
        this.balanceComponent2.imgListLeft.push(this.img_tp2_6);
        this.balanceComponent2.imgListLeft.push(this.img_tp2_7);
        this.balanceComponent2.imgListLeft.push(this.img_tp2_8);
        this.balanceComponent2.imgListLeft.push(this.img_tp2_9);
        // 右侧
        this.balanceComponent2.imgListRight.push(this.img_tp2_4);
        this.balanceComponent2.imgListRight.push(this.rect_2);
        // 旋转天平
        this.balanceComponent2.imgListBalanceLine.push(this.img_tp2_2);
        // 左侧当前重量
        this.balanceComponent2.numWeightLeftInit = 15;
        this.balanceComponent2.rotMax = 12;
        this.balanceComponent2.numWeightRotMax = 10;
        this.balanceComponent2.pointCenter = new egret.Point(this.img_tp2_2.x, this.img_tp2_2.y);
        // 设置动画
        this.balanceComponent2.setRightItemObjList = function (time, xTemp, yTemp) {
            if (time === void 0) { time = null; }
            if (xTemp === void 0) { xTemp = null; }
            if (yTemp === void 0) { yTemp = null; }
            self.setRightItemObjList2(time, xTemp, yTemp);
        };
        this.balanceComponent2.onInit();
    };
    Moudle_Page14Scene.prototype.setPosFunc = function (list, xTemp, yTemp) {
        if (list) {
            for (var i in list) {
                var tempIndex = parseInt(i);
                var data = list[tempIndex];
                egret.Tween.removeTweens(data.obj);
                data.obj.scaleX = 0.6;
                data.obj.scaleY = 0.6;
                if (tempIndex == 0) {
                    data.obj.x = xTemp;
                    data.obj.y = yTemp - 80;
                }
                else if (tempIndex == 1) {
                    data.obj.x = xTemp + 60;
                    data.obj.y = yTemp - 80;
                }
                else if (tempIndex == 2) {
                    data.obj.x = xTemp - 60;
                    data.obj.y = yTemp - 80;
                }
            }
        }
    };
    Moudle_Page14Scene.prototype.startTweenToPosFunc = function (list, xTemp, yTemp, time) {
        if (list) {
            for (var i in list) {
                var tempIndex = parseInt(i);
                var data = list[tempIndex];
                egret.Tween.removeTweens(data.obj);
                if (tempIndex == 0) {
                    var posX = xTemp;
                    var posY = yTemp - 80;
                    egret.Tween.get(data.obj).to({ x: posX, y: posY }, time);
                }
                else if (tempIndex == 1) {
                    var posX = xTemp + 60;
                    var posY = yTemp - 80;
                    egret.Tween.get(data.obj).to({ x: posX, y: posY }, time);
                }
                else if (tempIndex == 2) {
                    var posX = xTemp - 60;
                    var posY = yTemp - 80;
                    egret.Tween.get(data.obj).to({ x: posX, y: posY }, time);
                }
            }
        }
    };
    Moudle_Page14Scene.prototype.setRightItemObjList1 = function (time, xTemp, yTemp) {
        if (time === void 0) { time = null; }
        if (xTemp === void 0) { xTemp = null; }
        if (yTemp === void 0) { yTemp = null; }
        if (time != null && xTemp != null && yTemp != null) {
            this.setPosFunc(this.targetDataMap[0], this.img_tp1_4.x, this.img_tp1_4.y);
            this.startTweenToPosFunc(this.targetDataMap[0], xTemp, yTemp, time);
        }
        else {
            this.setPosFunc(this.targetDataMap[0], this.img_tp1_4.x, this.img_tp1_4.y);
        }
    };
    Moudle_Page14Scene.prototype.setRightItemObjList2 = function (time, xTemp, yTemp) {
        if (time === void 0) { time = null; }
        if (xTemp === void 0) { xTemp = null; }
        if (yTemp === void 0) { yTemp = null; }
        if (time != null && xTemp != null && yTemp != null) {
            this.setPosFunc(this.targetDataMap[1], this.img_tp2_4.x, this.img_tp2_4.y);
            this.startTweenToPosFunc(this.targetDataMap[1], xTemp, yTemp, time);
        }
        else {
            this.setPosFunc(this.targetDataMap[1], this.img_tp2_4.x, this.img_tp2_4.y);
        }
    };
    Moudle_Page14Scene.prototype.refreshForListTouchEnd = function () {
        _super.prototype.refreshForListTouchEnd.call(this);
        var functionNum = function (list) {
            var num = 0;
            if (list) {
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var data = list_1[_i];
                    if (data.index == 0) {
                        num += 3;
                    }
                    else if (data.index == 1) {
                        num += 6;
                    }
                    else if (data.index == 2) {
                        num += 8;
                    }
                    else if (data.index == 3) {
                        num += 10;
                    }
                    else if (data.index == 4) {
                        num += 12;
                    }
                }
            }
            return num;
        };
        var numRight1 = functionNum(this.targetDataMap[0]);
        this.balanceComponent1.startRotTween(0, numRight1);
        var numRight2 = functionNum(this.targetDataMap[1]);
        this.balanceComponent2.startRotTween(0, numRight2);
    };
    Moudle_Page14Scene.key = "Moudle_Page14Scene";
    return Moudle_Page14Scene;
}(DragAnyMakeRuleListCommonScene));
__reflect(Moudle_Page14Scene.prototype, "Moudle_Page14Scene");
//# sourceMappingURL=Moudle_Page14Scene.js.map