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
var DropAnyToRuleRectScene = (function (_super) {
    __extends(DropAnyToRuleRectScene, _super);
    function DropAnyToRuleRectScene() {
        var _this = _super.call(this) || this;
        _this.ImgList = [];
        _this.ruleRectList = [];
        _this.imgPosList = [];
        _this.curMoveIndex = -1;
        return _this;
    }
    /** 每次进入 */
    DropAnyToRuleRectScene.prototype.onAdd = function () {
        // this.scene_Ani.play(0);
        this.initData();
        this.initAddEvent();
    };
    DropAnyToRuleRectScene.prototype.initData = function () {
        this.curMoveIndex = -1;
        this.imgPosList = [];
        for (var i = 0; i < this.ImgList.length; i++) {
            var obj = this.ImgList[i];
            if (obj) {
                this.imgPosList.push(new egret.Point(obj.x, obj.y));
            }
        }
    };
    DropAnyToRuleRectScene.prototype.initAddEvent = function () {
        for (var _i = 0, _a = this.ImgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginEvent, this);
        }
        for (var _b = 0, _c = this.ruleRectList; _b < _c.length; _b++) {
            var rectObj = _c[_b];
            rectObj.touchEnabled = false;
        }
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    /** 这里进行移出场景的处理 **/
    DropAnyToRuleRectScene.prototype.onDestroy = function () {
        // this.scene_Ani_next.play(0);
        this.resetImgPosForList();
        this.destoryEvent();
        this.destoryData();
    };
    DropAnyToRuleRectScene.prototype.resetImgPosForList = function () {
        for (var index in this.ImgList) {
            var obj = this.ImgList[index];
            var pos = this.imgPosList[index];
            if (obj && pos) {
                obj.x = pos.x;
                obj.y = pos.y;
            }
        }
    };
    DropAnyToRuleRectScene.prototype.destoryData = function () {
        this.curMoveIndex = -1;
        delete this.ImgList;
        this.ImgList = [];
        delete this.ruleRectList;
        this.ruleRectList = [];
        delete this.imgPosList;
        this.imgPosList = [];
    };
    DropAnyToRuleRectScene.prototype.destoryEvent = function () {
        for (var _i = 0, _a = this.ImgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginEvent, this);
        }
        for (var _b = 0, _c = this.ruleRectList; _b < _c.length; _b++) {
            var rectObj = _c[_b];
            rectObj.touchEnabled = false;
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    DropAnyToRuleRectScene.prototype.touchBeginEvent = function (event) {
        var curIndex = this.ImgList.indexOf(event.target);
        if (curIndex >= 0) {
            var childIndex = this.group.numChildren;
            this.group.setChildIndex(event.target, childIndex - 1);
            this.curMoveIndex = curIndex;
        }
    };
    DropAnyToRuleRectScene.prototype.touchMoveLayerEvent = function (event) {
        if (this.curMoveIndex >= 0) {
            var target = this.ImgList[this.curMoveIndex];
            if (target) {
                var stageX = event.stageX;
                var stageY = event.stageY;
                var posTarget = this.globalToLocal(stageX, stageY);
                target.x = posTarget.x - target.width / 2;
                target.y = posTarget.y - target.height / 2;
                // 给学生发送信令  移动中
                var obj = new Object();
                obj["name"] = this.curMoveIndex.toString();
                obj["targetX"] = target.x;
                obj["targetY"] = target.y;
                CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchMove", obj);
            }
        }
    };
    DropAnyToRuleRectScene.prototype.touchEndLayerEvent = function (event) {
        var moveName = "";
        var isResetStr = "true";
        if (this.curMoveIndex >= 0) {
            var target = this.ImgList[this.curMoveIndex];
            if (target) {
                // 2位以上 位点击的上边
                var stageX = event.stageX;
                var stageY = event.stageY;
                var siteIndex = this.getSiteIndexForGlobalPos(stageX, stageY);
                if (siteIndex >= 0) {
                    // 没有东西  放置数据
                    var posTarget = this.globalToLocal(stageX, stageY);
                    target.x = posTarget.x - target.width / 2;
                    target.y = posTarget.y - target.height / 2;
                    moveName = this.curMoveIndex.toString();
                    isResetStr = "false";
                }
                else {
                    if (this.imgPosList[this.curMoveIndex]) {
                        var pos = this.imgPosList[this.curMoveIndex];
                        target.x = pos.x;
                        target.y = pos.y;
                    }
                    moveName = this.curMoveIndex.toString();
                    isResetStr = "true";
                }
            }
            this.curMoveIndex = -1;
            // 给学生发送信令  移动中
            var obj = new Object();
            obj["moveName"] = moveName;
            obj["targetX"] = target.x;
            obj["targetY"] = target.y;
            obj["isResetStr"] = isResetStr;
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchEndLayer", obj);
        }
    };
    DropAnyToRuleRectScene.prototype.getSiteIndexForGlobalPos = function (xGlobal, yGlobal) {
        var localPos = this.globalToLocal(xGlobal, yGlobal);
        var curX = localPos.x;
        var curY = localPos.y;
        for (var siteIndex in this.ruleRectList) {
            var rectObj = this.ruleRectList[siteIndex];
            if (rectObj) {
                if (rectObj.hitTestPoint(curX, curY)) {
                    return parseInt(siteIndex);
                }
            }
        }
        return -1;
    };
    /** 收到信令消息 */
    DropAnyToRuleRectScene.prototype.execMessage = function (data) {
        if (data["touchMove"]) {
            var name_1 = data["touchMove"]["name"];
            var targetX = Number(data["touchMove"]["targetX"]);
            var targetY = Number(data["touchMove"]["targetY"]);
            this.revMoveingHandle(name_1, targetX, targetY);
        }
        else if (data["touchEndLayer"]) {
            var moveName = data["touchEndLayer"]["moveName"];
            var targetX = Number(data["touchEndLayer"]["targetX"]);
            var targetY = Number(data["touchEndLayer"]["targetY"]);
            var isResetStr = data["touchEndLayer"]["isResetStr"];
            this.revMoveEndLayerHandle(moveName, isResetStr, targetX, targetY);
        }
    };
    DropAnyToRuleRectScene.prototype.revMoveingHandle = function (name, targetX, targetY) {
        if (name && name.length > 0) {
            if (this.ImgList[name]) {
                var targetObj = this.ImgList[name];
                if (targetObj) {
                    targetObj.x = targetX;
                    targetObj.y = targetY;
                    var childIndex = this.group.numChildren;
                    this.group.setChildIndex(targetObj, childIndex - 1);
                }
                else {
                    Log.trace("DropAnyToRuleRectScene", "revMoveingHandle data error please check");
                }
            }
        }
        else {
            Log.trace("DropAnyToRuleRectScene", "revMoveingHandle data error please check");
        }
    };
    /** 接收停止移动 */
    DropAnyToRuleRectScene.prototype.revMoveEndLayerHandle = function (moveIndex, isResetStr, targetX, targetY) {
        var target = this.ImgList[moveIndex];
        if (target) {
            // 2位以上 位点击的上边
            var stageX = targetX;
            var stageY = targetY;
            if (isResetStr == "false") {
                // 没有东西  放置数据
                var posTarget = this.globalToLocal(stageX, stageY);
                target.x = posTarget.x;
                target.y = posTarget.y;
            }
            else {
                if (this.imgPosList[moveIndex]) {
                    var pos = this.imgPosList[moveIndex];
                    target.x = pos.x;
                    target.y = pos.y;
                }
            }
        }
        else {
            Log.trace("DropAnyToRuleRectScene", "revMoveEndLayerHandle data error please check");
        }
    };
    return DropAnyToRuleRectScene;
}(UIObject));
__reflect(DropAnyToRuleRectScene.prototype, "DropAnyToRuleRectScene");
//# sourceMappingURL=DropAnyToRuleRectScene.js.map