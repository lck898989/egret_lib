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
 * by zheng
 * 点击任意组件显示下一阶段
 * @param clickItemArr  点击的组件数组
 * @param showPhaseArr  显示下一场景数组
 * @param showIndexArr  显示阶段索引
 * 请一一对应
 */
var ClickItemForShowPhaseScene = (function (_super) {
    __extends(ClickItemForShowPhaseScene, _super);
    function ClickItemForShowPhaseScene() {
        var _this = _super.call(this) || this;
        _this.clickItemArr = new Array();
        _this.showPhaseArr = new Array();
        _this.showIndexArr = new Array();
        return _this;
    }
    /** 这里进行移出场景的处理 **/
    ClickItemForShowPhaseScene.prototype.onDestroy = function () {
        for (var i = 0; i < this.clickItemArr.length; i++) {
            this.clickItemArr[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.doShowNextPhaseItemHandle, this);
        }
        for (var i = 0; i < this.showPhaseArr.length; i++) {
            for (var j = 0; j < this.showPhaseArr[i].length; j++) {
                this.showPhaseArr[i][j].visible = false;
            }
            this.showIndexArr[i] = 0;
        }
        if (this.backImg) {
            this.backImg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.doBackInitHandle, this);
        }
    };
    /** 初始化场景 */
    ClickItemForShowPhaseScene.prototype.initScene = function () {
        if (this.clickItemArr.length <= 0 || this.showPhaseArr.length <= 0) {
            return;
        }
        for (var i = 0; i < this.clickItemArr.length; i++) {
            this.clickItemArr[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.doShowNextPhaseItemHandle, this);
            this.clickItemArr[i].name = String(i + 1);
        }
        for (var i = 0; i < this.showPhaseArr.length; i++) {
            for (var j = 0; j < this.showPhaseArr[i].length; j++) {
                this.showPhaseArr[i][j].name = String(i + 1) + "_" + String(j);
                this.showPhaseArr[i][j].visible = false;
            }
            var index = 0;
            this.showIndexArr.push(index);
        }
        if (this.backImg) {
            this.backImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doBackInitHandle, this);
        }
    };
    /** 点击显示下一阶段 */
    ClickItemForShowPhaseScene.prototype.doShowNextPhaseItemHandle = function (e) {
        var nIndex = e.currentTarget.name;
        if (this.showIndexArr[Number(nIndex) - 1] > this.showPhaseArr[Number(nIndex) - 1].length - 1) {
            return;
        }
        this.showPhaseArr[Number(nIndex) - 1][this.showIndexArr[Number(nIndex) - 1]].visible = true;
        this.showIndexArr[Number(nIndex) - 1]++;
        var obj = new Object();
        obj["name"] = nIndex;
        obj["phase"] = this.showIndexArr[Number(nIndex) - 1] - 1;
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "showPhase", obj);
    };
    /** 返回初始状态 */
    ClickItemForShowPhaseScene.prototype.doBackInitHandle = function () {
        this.initScene();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "backInit", 1);
    };
    /** 接收信令 */
    ClickItemForShowPhaseScene.prototype.execMessage = function (data) {
        if (data["showPhase"]) {
            var nIndex = Number(data["showPhase"]["name"]);
            var phase = Number(data["showPhase"]["phase"]);
            this.showPhaseArr[nIndex - 1][phase].visible = true;
            this.showIndexArr[nIndex - 1] = phase;
        }
        else if (data["backInit"]) {
            this.initScene();
        }
    };
    return ClickItemForShowPhaseScene;
}(UIObject));
__reflect(ClickItemForShowPhaseScene.prototype, "ClickItemForShowPhaseScene");
//# sourceMappingURL=ClickItemForShowPhaseScene.js.map