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
var DragAnyMakeForMaxAndCancleScene = (function (_super) {
    __extends(DragAnyMakeForMaxAndCancleScene, _super);
    function DragAnyMakeForMaxAndCancleScene() {
        var _this = _super.call(this) || this;
        _this.isNewItem = false;
        _this.ImgList = [];
        _this.numMax = 1;
        _this.curMoveItemIndex = -2;
        return _this;
    }
    /** 每次进入 */
    DragAnyMakeForMaxAndCancleScene.prototype.onAdd = function () {
        // this.scene_Ani.play(0);
        this.initData();
        this.initAddEvent();
    };
    DragAnyMakeForMaxAndCancleScene.prototype.initData = function () {
        this.targetList = [];
    };
    DragAnyMakeForMaxAndCancleScene.prototype.initAddEvent = function () {
        for (var _i = 0, _a = this.ImgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginOriginalEvent, this);
        }
        this.btnReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    DragAnyMakeForMaxAndCancleScene.prototype.touchBeginOriginalEvent = function (event) {
        var curIndex = this.ImgList.indexOf(event.target);
        if (curIndex >= -1) {
            // let childIndex = this.group.numChildren
            // this.group.setChildIndex(event.target, childIndex - 1)
            this.curMoveItemIndex = curIndex;
            this.isNewItem = true;
            this.curMoveItemObj = this.newObjForTouchBegin(event.target, event.stageX, event.stageY);
            var obj = new Object();
            obj["isNewItem"] = "1";
            obj["curIndexStr"] = curIndex.toString();
            obj["targetX"] = event.stageX.toString();
            obj["targetY"] = event.stageY.toString();
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchBegin", obj);
        }
    };
    DragAnyMakeForMaxAndCancleScene.prototype.newObjForTouchBegin = function (obj, xGlobal, yGlobal) {
        var localPos = this.group.globalToLocal(xGlobal, yGlobal);
        var path = obj.source;
        var img = new eui.Image(path);
        img.anchorOffsetX = obj.anchorOffsetX;
        img.anchorOffsetY = obj.anchorOffsetY;
        img.rotation = obj.rotation;
        img.x = localPos.x;
        img.y = localPos.y;
        this.group.addChild(img);
        img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginMakedItemEvent, this);
        return img;
    };
    DragAnyMakeForMaxAndCancleScene.prototype.deleteObj = function (obj) {
        if (!obj) {
            return;
        }
        obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginMakedItemEvent, this);
        this.group.removeChild(obj);
    };
    DragAnyMakeForMaxAndCancleScene.prototype.touchBeginMakedItemEvent = function (event) {
        var curIndex = 0;
        for (var index in this.targetList) {
            var obj = this.targetList[index];
            if (obj == event.currentTarget) {
                curIndex = parseInt(index);
            }
        }
        if (curIndex >= -1) {
            var childIndex = this.group.numChildren;
            this.group.setChildIndex(event.target, childIndex - 1);
            this.curMoveItemIndex = curIndex;
            this.isNewItem = false;
            this.curMoveItemObj = event.target;
            // 给学生发送信令  移动中
            var obj = new Object();
            obj["isNewItem"] = "0";
            obj["curIndexStr"] = curIndex.toString();
            obj["targetX"] = event.stageX.toString();
            obj["targetY"] = event.stageY.toString();
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchBegin", obj);
        }
    };
    DragAnyMakeForMaxAndCancleScene.prototype.touchMoveLayerEvent = function (event) {
        if (this.curMoveItemObj) {
            var target = this.curMoveItemObj;
            if (target) {
                var stageX = event.stageX;
                var stageY = event.stageY;
                var posTarget = this.globalToLocal(stageX, stageY);
                target.x = posTarget.x;
                target.y = posTarget.y;
                // 给学生发送信令  移动中
                var obj = new Object();
                obj["targetX"] = target.x.toString();
                obj["targetY"] = target.y.toString();
                CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchMove", obj);
            }
        }
    };
    DragAnyMakeForMaxAndCancleScene.prototype.touchEndLayerEvent = function (event) {
        var isCancelStr = 0;
        var isNewItemStr = 0;
        var stageXStr = 0;
        var stageYStr = 0;
        var deleteIndex = -2;
        if (this.curMoveItemIndex >= -1 && this.curMoveItemObj) {
            var target = this.curMoveItemObj;
            var stageX = event.stageX;
            var stageY = event.stageY;
            stageXStr = event.stageX;
            stageYStr = event.stageY;
            this.curMoveItemObj.x = stageX;
            this.curMoveItemObj.y = stageY;
            var isCancel = this.rectCancle.hitTestPoint(stageX, stageY);
            if (isCancel) {
                isCancelStr = 1;
                // 取消
                if (this.isNewItem) {
                    isNewItemStr = 1;
                    // 表示创建了一个新的 但是不需要了 需要删除
                    this.deleteObj(this.curMoveItemObj);
                    this.curMoveItemObj = null;
                }
                else {
                    isNewItemStr = 0;
                    // 表示 拖动的创建好的 需要删除数据
                    // let curIndex = this.targetList.indexOf(event.currentTarget)
                    var curIndex = 0;
                    for (var index in this.targetList) {
                        var obj_1 = this.targetList[index];
                        if (obj_1 == this.curMoveItemObj) {
                            curIndex = parseInt(index);
                        }
                    }
                    deleteIndex = curIndex;
                    this.targetList.splice(curIndex, 1);
                    this.deleteObj(this.curMoveItemObj);
                    this.curMoveItemObj = null;
                }
            }
            else {
                isCancelStr = 0;
                // 不是取消
                if (this.isNewItem) {
                    isNewItemStr = 1;
                    // 表示 创建了一个新的 需要保存到target列表
                    this.targetList.push(this.curMoveItemObj);
                    this.curMoveItemObj = null;
                }
                else {
                    isNewItemStr = 0;
                    // 表示 移动的是原来创建好的 , 只设置坐标就可以
                    this.curMoveItemObj = null;
                }
            }
        }
        // 给学生发送信令  移动中
        var obj = new Object();
        obj["isCancelStr"] = isCancelStr.toString();
        obj["isNewItemStr"] = isNewItemStr.toString();
        obj["targetX"] = stageXStr.toString();
        obj["targetY"] = stageYStr.toString();
        obj["deleteIndex"] = deleteIndex.toString();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchEndLayer", obj);
    };
    DragAnyMakeForMaxAndCancleScene.prototype.resetData = function () {
        if (this.targetList && this.targetList.length > 0) {
            for (var _i = 0, _a = this.targetList; _i < _a.length; _i++) {
                var obj = _a[_i];
                this.deleteObj(obj);
            }
            this.targetList = [];
        }
    };
    DragAnyMakeForMaxAndCancleScene.prototype.touchTapEvent = function (event) {
        this.resetData();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "reset", 1);
    };
    /** 这里进行移出场景的处理 **/
    DragAnyMakeForMaxAndCancleScene.prototype.onDestroy = function () {
        // this.scene_Ani_next.play(0);
        this.destoryEvent();
        this.destoryData();
    };
    DragAnyMakeForMaxAndCancleScene.prototype.destoryData = function () {
        delete this.ImgList;
        this.ImgList = [];
        this.resetData();
    };
    DragAnyMakeForMaxAndCancleScene.prototype.destoryEvent = function () {
        for (var _i = 0, _a = this.ImgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginOriginalEvent, this);
        }
        this.btnReset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    DragAnyMakeForMaxAndCancleScene.prototype.execMessage = function (data) {
        if (data["reset"]) {
            this.resetData();
        }
        else if (data["touchBegin"]) {
            var isNewItem = data["touchBegin"]["isNewItem"];
            var curIndexStr = data["touchBegin"]["curIndexStr"];
            var targetX = parseInt(data["touchBegin"]["targetX"]);
            var targetY = parseInt(data["touchBegin"]["targetY"]);
            this.revStartHandle(isNewItem, curIndexStr, targetX, targetY);
        }
        else if (data["touchMove"]) {
            var targetX = parseInt(data["touchMove"]["targetX"]);
            var targetY = parseInt(data["touchMove"]["targetY"]);
            this.revMoveHandle(targetX, targetY);
        }
        else if (data["touchEndLayer"]) {
            var isCancelStr = data["touchEndLayer"]["isCancelStr"];
            var isNewItemStr = data["touchEndLayer"]["isNewItemStr"];
            var targetX = parseInt(data["touchEndLayer"]["targetX"]);
            var targetY = parseInt(data["touchEndLayer"]["targetY"]);
            var deleteIndex = parseInt(data["touchEndLayer"]["deleteIndex"]);
            this.revEndHandle(isCancelStr, isNewItemStr, targetX, targetY, deleteIndex);
        }
    };
    DragAnyMakeForMaxAndCancleScene.prototype.revStartHandle = function (isNewItemStr, curIndexStr, targetX, targetY) {
        if (isNewItemStr == "1") {
            var curIndex = parseInt(curIndexStr);
            var obj = this.ImgList[curIndex];
            if (obj) {
                this.curMoveItemObj = this.newObjForTouchBegin(obj, targetX, targetY);
            }
            else {
                Log.trace("DragAnyMakeForMaxAndCancleScene", "revStartHandle error  index to obj not find isNewItemStr = 1");
            }
        }
        else {
            var curIndex = parseInt(curIndexStr);
            var obj = this.targetList[curIndex];
            if (obj) {
                var childIndex = this.group.numChildren;
                this.group.setChildIndex(obj, childIndex - 1);
                this.curMoveItemObj = obj;
            }
            else {
                Log.trace("DragAnyMakeForMaxAndCancleScene", "revStartHandle error  index to obj not find isNewItemStr = 0");
            }
        }
    };
    DragAnyMakeForMaxAndCancleScene.prototype.revMoveHandle = function (targetX, targetY) {
        var target = this.curMoveItemObj;
        if (target) {
            var posTarget = this.globalToLocal(targetX, targetY);
            target.x = posTarget.x;
            target.y = posTarget.y;
        }
    };
    DragAnyMakeForMaxAndCancleScene.prototype.revEndHandle = function (isCancelStr, isNewItemStr, targetX, targetY, deleteIndex) {
        if (isCancelStr == "1") {
            // 取消
            if (isNewItemStr == "1") {
                // 表示创建了一个新的 但是不需要了 需要删除
                if (this.curMoveItemObj) {
                    this.deleteObj(this.curMoveItemObj);
                }
                this.curMoveItemObj = null;
            }
            else {
                if (deleteIndex >= -1) {
                    // 表示 拖动的创建好的 需要删除数据
                    var curIndex = deleteIndex;
                    this.targetList.splice(curIndex, 1);
                    if (this.curMoveItemObj) {
                        this.deleteObj(this.curMoveItemObj);
                    }
                    this.curMoveItemObj = null;
                }
                else {
                    Log.trace("DragAnyMakeForMaxAndCancleScene", "revEndHandle error  index to obj not find ");
                }
            }
        }
        else {
            // 不是取消
            if (isNewItemStr == "1") {
                // 表示 创建了一个新的 需要保存到target列表
                if (this.curMoveItemObj) {
                    this.targetList.push(this.curMoveItemObj);
                }
                this.curMoveItemObj = null;
            }
            else {
                // 表示 移动的是原来创建好的 , 只设置坐标就可以
                this.curMoveItemObj = null;
            }
        }
    };
    return DragAnyMakeForMaxAndCancleScene;
}(UIObject));
__reflect(DragAnyMakeForMaxAndCancleScene.prototype, "DragAnyMakeForMaxAndCancleScene");
//# sourceMappingURL=DragAnyMakeForMaxAndCancleScene.js.map