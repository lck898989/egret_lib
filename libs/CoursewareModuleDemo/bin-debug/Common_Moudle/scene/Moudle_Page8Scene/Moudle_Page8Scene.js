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
//          this.rectCanSetList   可以放置的位置列表          锚点需要在中心 
//          可选                  countImgList            可放置数量  默认9999
// desc:    点击图片       拖动图片 
//          拖动        
//          拖动结束       可放置区域放置 随意放置
//          isCanSetToRect                              是否可以放置到rect
//          refreshForListTouchEnd                      每次点击结束都调用
//          getDataFromTargetDataMap                    从拖动出来的对象里 获取data
//          removeToTarget                              从拖动出来的对象里 移除
//          pushToTarget                                添加到 拖动出来的对象里 
var Moudle_Page8Scene = (function (_super) {
    __extends(Moudle_Page8Scene, _super);
    function Moudle_Page8Scene() {
        var _this = _super.call(this) || this;
        // 子类数据
        _this.curIndexLineSelf = 0;
        _this.targetMap = {};
        _this.curListTarget = {};
        _this.targetPosMap = {};
        _this.skinName = "Moudle_Page8Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    Moudle_Page8Scene.prototype.onAdd = function () {
        this.ImgList.push(this.img_1);
        this.ImgList.push(this.img_2);
        this.ImgList.push(this.img_3);
        this.countImgList.push(1);
        this.countImgList.push(4);
        this.countImgList.push(6);
        this.rectCanSetList.push(this.rect_1);
        _super.prototype.onAdd.call(this);
        this.curIndexLineSelf = 0;
        this.targetMap["_50_1_20_2_10_1"] = "lable_t7_1";
        this.targetMap["_50_1_20_1_10_3"] = "lable_t7_2";
        this.targetMap["_50_1_20_0_10_5"] = "lable_t7_3";
        this.targetMap["_50_0_20_4_10_2"] = "lable_t7_4";
        this.targetMap["_50_0_20_3_10_4"] = "lable_t7_5";
        this.targetMap["_50_0_20_2_10_6"] = "lable_t7_6";
        this.targetPosMap = {};
        this.targetPosMap[1] = { x: 954.22, y: 313.91 };
        this.targetPosMap[2] = { x: 954.22, y: 435.5 };
        this.targetPosMap[3] = { x: 954.22, y: 563.3 };
        this.targetPosMap[4] = { x: 954.22, y: 689.15 };
        this.targetPosMap[5] = { x: 954.22, y: 810.7 };
        this.targetPosMap[6] = { x: 954.22, y: 936.03 };
        this.curListTarget = {};
        this.initLable();
        this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapNextEvent, this);
    };
    /** 这里进行移出场景的处理 **/
    Moudle_Page8Scene.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.btnNext.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapNextEvent, this);
    };
    Moudle_Page8Scene.prototype.execMessage = function (data) {
        _super.prototype.execMessage.call(this, data);
        if (data["next"]) {
            this.curIndexLineSelf++;
            this.resetData();
            this.refreshForListTouchEnd();
        }
    };
    Moudle_Page8Scene.prototype.touchTapNextEvent = function (event) {
        this.curIndexLineSelf++;
        this.resetData();
        this.refreshForListTouchEnd();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "next", 1);
    };
    Moudle_Page8Scene.prototype.initLable = function () {
        for (var i = 1; i <= 6; i++) {
            var lable1 = this["lable_" + i + "_1"];
            var lable2 = this["lable_" + i + "_2"];
            var lable3 = this["lable_" + i + "_3"];
            var lable4 = this["lable_t7_" + i];
            if (lable1) {
                lable1.visible = false;
            }
            if (lable2) {
                lable2.visible = false;
            }
            if (lable3) {
                lable3.visible = false;
            }
            if (lable4) {
                lable4.visible = false;
            }
        }
    };
    Moudle_Page8Scene.prototype.refreshForListTouchEnd = function () {
        _super.prototype.refreshForListTouchEnd.call(this);
        this.refreshViewList();
    };
    Moudle_Page8Scene.prototype.refreshViewList = function () {
        var lable1 = this["lable_" + this.curIndexLineSelf + "_1"];
        var lable2 = this["lable_" + this.curIndexLineSelf + "_2"];
        var lable3 = this["lable_" + this.curIndexLineSelf + "_3"];
        if (lable1 && lable2 && lable3) {
            var key = "";
            lable1.text = this.curNumImgList[0].toString();
            lable1.visible = true;
            key += "_50_" + this.curNumImgList[0];
            lable2.text = this.curNumImgList[1].toString();
            lable2.visible = true;
            key += "_20_" + this.curNumImgList[1];
            lable3.text = this.curNumImgList[2].toString();
            lable3.visible = true;
            key += "_10_" + this.curNumImgList[2];
            // 结果
            if (this.targetMap[key]) {
                if (!this.curListTarget[key]) {
                    var targetName = this.targetMap[key];
                    this.curListTarget[key] = this.curIndexLineSelf;
                    var lable4 = this[targetName];
                    if (lable4) {
                        lable4.visible = true;
                        lable4.x = this.targetPosMap[this.curIndexLineSelf].x;
                        lable4.y = this.targetPosMap[this.curIndexLineSelf].y;
                    }
                }
            }
        }
    };
    Moudle_Page8Scene.key = "Moudle_Page8Scene";
    return Moudle_Page8Scene;
}(DragAnyMakeRuleListCommonScene));
__reflect(Moudle_Page8Scene.prototype, "Moudle_Page8Scene");
//# sourceMappingURL=Moudle_Page8Scene.js.map