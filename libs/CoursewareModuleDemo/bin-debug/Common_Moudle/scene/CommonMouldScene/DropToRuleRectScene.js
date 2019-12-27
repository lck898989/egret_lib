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
var DropToRuleRectScene = (function (_super) {
    __extends(DropToRuleRectScene, _super);
    function DropToRuleRectScene() {
        var _this = _super.call(this) || this;
        _this.ImgList = [];
        _this.ruleRectList = [];
        _this.imgPosList = [];
        _this.curMoveIndex = -1;
        _this.objIndexToSiteIndexMap = {};
        _this.siteIndexToObjIndexMap = {};
        return _this;
    }
    /** 每次进入 */
    DropToRuleRectScene.prototype.onAdd = function () {
        // this.scene_Ani.play(0);
        this.initData();
        this.initAddEvent();
    };
    DropToRuleRectScene.prototype.initData = function () {
        this.siteIndexToObjIndexMap = {};
        this.objIndexToSiteIndexMap = {};
        this.curMoveIndex = -1;
        this.imgPosList = [];
        for (var i = 0; i < this.ImgList.length; i++) {
            var obj = this.ImgList[i];
            if (obj) {
                this.imgPosList.push(new egret.Point(obj.x, obj.y));
            }
            this.objIndexToSiteIndexMap[i] = -1;
        }
        for (var i = 0; i < this.ruleRectList.length; i++) {
            this.siteIndexToObjIndexMap[i] = -1;
        }
    };
    DropToRuleRectScene.prototype.initAddEvent = function () {
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
    DropToRuleRectScene.prototype.onDestroy = function () {
        // this.scene_Ani_next.play(0);
        this.resetImgPosForList();
        this.destoryEvent();
        this.destoryData();
    };
    DropToRuleRectScene.prototype.resetImgPosForList = function () {
        for (var index in this.ImgList) {
            var obj = this.ImgList[index];
            var pos = this.imgPosList[index];
            if (obj && pos) {
                obj.x = pos.x;
                obj.y = pos.y;
            }
        }
    };
    DropToRuleRectScene.prototype.destoryData = function () {
        this.curMoveIndex = -1;
        delete this.siteIndexToObjIndexMap;
        this.siteIndexToObjIndexMap = {};
        delete this.objIndexToSiteIndexMap;
        this.objIndexToSiteIndexMap = {};
        delete this.ImgList;
        this.ImgList = [];
        delete this.ruleRectList;
        this.ruleRectList = [];
        delete this.imgPosList;
        this.imgPosList = [];
    };
    DropToRuleRectScene.prototype.destoryEvent = function () {
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
    DropToRuleRectScene.prototype.touchBeginEvent = function (event) {
        var curIndex = this.ImgList.indexOf(event.target);
        if (curIndex >= 0) {
            var childIndex = this.group.numChildren;
            this.group.setChildIndex(event.target, childIndex - 1);
            this.curMoveIndex = curIndex;
        }
    };
    DropToRuleRectScene.prototype.touchMoveLayerEvent = function (event) {
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
    DropToRuleRectScene.prototype.touchEndLayerEvent = function (event) {
        var moveName = "";
        var moveSite = "";
        if (this.curMoveIndex >= 0) {
            var target = this.ImgList[this.curMoveIndex];
            if (target) {
                // 2位以上 位点击的上边
                var stageX = event.stageX;
                var stageY = event.stageY;
                var siteIndex = this.getSiteIndexForGlobalPos(stageX, stageY);
                if (siteIndex >= 0) {
                    if (this.isCanSetForSiteIndex(siteIndex)) {
                        // 没有东西  放置数据
                        var oldSiteIndex = this.objIndexToSiteIndexMap[this.curMoveIndex];
                        if (oldSiteIndex >= 0) {
                            this.siteIndexToObjIndexMap[oldSiteIndex] = -1;
                        }
                        this.siteIndexToObjIndexMap[siteIndex] = this.curMoveIndex;
                        this.objIndexToSiteIndexMap[this.curMoveIndex] = siteIndex;
                        moveName = this.curMoveIndex.toString();
                        moveSite = siteIndex.toString();
                    }
                }
                else {
                    var oldSiteIndex = this.objIndexToSiteIndexMap[this.curMoveIndex];
                    if (oldSiteIndex >= 0) {
                        this.siteIndexToObjIndexMap[oldSiteIndex] = -1;
                    }
                    this.objIndexToSiteIndexMap[this.curMoveIndex] = -1;
                    moveName = this.curMoveIndex.toString();
                    moveSite = "-1";
                }
            }
        }
        this.curMoveIndex = -1;
        this.refreshView();
        // 给学生发送信令  移动中
        var obj = new Object();
        obj["moveName"] = moveName;
        obj["moveSite"] = moveSite;
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchEndLayer", obj);
    };
    DropToRuleRectScene.prototype.isCanSetForSiteIndex = function (siteIndex) {
        if (this.siteIndexToObjIndexMap[siteIndex] != null && this.siteIndexToObjIndexMap[siteIndex] >= 0) {
            return false;
        }
        return true;
    };
    // 获取碰撞的是哪个rect
    DropToRuleRectScene.prototype.getSiteIndexForGlobalPos = function (xGlobal, yGlobal) {
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
    DropToRuleRectScene.prototype.refreshView = function () {
        for (var objIndex in this.ImgList) {
            var obj = this.ImgList[objIndex];
            if (obj) {
                if (this.objIndexToSiteIndexMap[objIndex] != null && this.objIndexToSiteIndexMap[objIndex] >= 0) {
                    // 位置不在初始位置
                    var siteIndex = this.objIndexToSiteIndexMap[objIndex];
                    if (this.ruleRectList[siteIndex]) {
                        var rectObj = this.ruleRectList[siteIndex];
                        obj.x = rectObj.x + rectObj.width / 2 - obj.width / 2;
                        obj.y = rectObj.y + rectObj.height / 2 - obj.height / 2;
                    }
                }
                else {
                    // 位置在初始位置
                    if (this.imgPosList[objIndex]) {
                        var pos = this.imgPosList[objIndex];
                        obj.x = pos.x;
                        obj.y = pos.y;
                    }
                }
                // 检查书是否放置到了正确位置
            }
        }
    };
    /** 收到信令消息 */
    DropToRuleRectScene.prototype.execMessage = function (data) {
        if (data["touchMove"]) {
            var name_1 = data["touchMove"]["name"];
            var targetX = Number(data["touchMove"]["targetX"]);
            var targetY = Number(data["touchMove"]["targetY"]);
            this.revMoveingHandle(name_1, targetX, targetY);
        }
        else if (data["touchEndLayer"]) {
            var moveName = data["touchEndLayer"]["moveName"];
            var moveSite = data["touchEndLayer"]["moveSite"];
            this.revMoveEndLayerHandle(moveName, moveSite);
        }
    };
    DropToRuleRectScene.prototype.revMoveingHandle = function (name, targetX, targetY) {
        if (name && name.length > 0) {
            var objIndex = parseInt(name);
            if (objIndex != null && this.ImgList[objIndex]) {
                var targetObj = this.ImgList[objIndex];
                if (targetObj) {
                    targetObj.x = targetX;
                    targetObj.y = targetY;
                    var childIndex = this.group.numChildren;
                    this.group.setChildIndex(targetObj, childIndex - 1);
                }
                else {
                    Log.trace("DropToRuleRectScene", "revMoveingHandle data error please check");
                }
            }
        }
        else {
            Log.trace("DropToRuleRectScene", "revMoveingHandle data error please check");
        }
    };
    /** 接收停止移动 */
    DropToRuleRectScene.prototype.revMoveEndLayerHandle = function (moveName, moveSite) {
        if (moveName && moveSite && moveSite.length > 0 && moveName.length > 0) {
            var objIndex = parseInt(moveName);
            var siteIndex = parseInt(moveSite);
            if (siteIndex >= 0) {
                var oldSiteIndex = this.objIndexToSiteIndexMap[objIndex];
                if (oldSiteIndex >= 0) {
                    this.siteIndexToObjIndexMap[oldSiteIndex] = -1;
                }
                this.siteIndexToObjIndexMap[siteIndex] = objIndex;
                this.objIndexToSiteIndexMap[objIndex] = siteIndex;
            }
            else {
                var oldSiteIndex = this.objIndexToSiteIndexMap[objIndex];
                if (oldSiteIndex >= 0) {
                    this.siteIndexToObjIndexMap[oldSiteIndex] = -1;
                }
                this.objIndexToSiteIndexMap[objIndex] = -1;
            }
        }
        else {
            Log.trace("DropToRuleRectScene", "revMoveEndHandle data error please check");
        }
        this.refreshView();
    };
    return DropToRuleRectScene;
}(UIObject));
__reflect(DropToRuleRectScene.prototype, "DropToRuleRectScene");
//# sourceMappingURL=DropToRuleRectScene.js.map