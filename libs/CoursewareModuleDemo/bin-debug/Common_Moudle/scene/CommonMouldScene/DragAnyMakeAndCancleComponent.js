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
var DragAnyMakeAndCancleComponent = (function (_super) {
    __extends(DragAnyMakeAndCancleComponent, _super);
    function DragAnyMakeAndCancleComponent() {
        var _this = _super.call(this) || this;
        _this.isNewItem = false;
        _this.ImgList = [];
        _this.curMoveItemIndex = -2;
        _this.curComponentIndex = 0;
        return _this;
    }
    /** 每次进入 */
    DragAnyMakeAndCancleComponent.prototype.onAdd = function () {
        // this.scene_Ani.play(0);
        this.initData();
        this.initAddEvent();
        // let img = new eui.Group()
        // img.width = this.width
        // img.height = this.height
        // this.addChild(img)
    };
    DragAnyMakeAndCancleComponent.prototype.initData = function () {
        this.targetList = [];
    };
    DragAnyMakeAndCancleComponent.prototype.initAddEvent = function () {
        for (var _i = 0, _a = this.ImgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginOriginalEvent, this);
        }
        if (this.btnReset) {
            this.btnReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
        }
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    DragAnyMakeAndCancleComponent.prototype.touchBeginOriginalEvent = function (event) {
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
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchBegin" + this.curComponentIndex.toString(), obj);
        }
    };
    DragAnyMakeAndCancleComponent.prototype.newObjForTouchBegin = function (obj, xGlobal, yGlobal) {
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
    DragAnyMakeAndCancleComponent.prototype.deleteObj = function (obj) {
        if (!obj) {
            return;
        }
        obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginMakedItemEvent, this);
        this.group.removeChild(obj);
    };
    DragAnyMakeAndCancleComponent.prototype.touchBeginMakedItemEvent = function (event) {
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
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchBegin" + this.curComponentIndex.toString(), obj);
        }
    };
    DragAnyMakeAndCancleComponent.prototype.touchMoveLayerEvent = function (event) {
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
                CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchMove" + this.curComponentIndex.toString(), obj);
            }
        }
    };
    DragAnyMakeAndCancleComponent.prototype.touchEndLayerEvent = function (event) {
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
            var isCenSet = this.rectCanSet.hitTestPoint(stageX, stageY);
            if (!isCenSet) {
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
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchEndLayer" + this.curComponentIndex.toString(), obj);
    };
    DragAnyMakeAndCancleComponent.prototype.resetData = function () {
        if (this.targetList && this.targetList.length > 0) {
            for (var _i = 0, _a = this.targetList; _i < _a.length; _i++) {
                var obj = _a[_i];
                this.deleteObj(obj);
            }
            this.targetList = [];
        }
    };
    DragAnyMakeAndCancleComponent.prototype.touchTapEvent = function (event) {
        this.resetData();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "reset" + this.curComponentIndex.toString(), 1);
    };
    /** 这里进行移出场景的处理 **/
    DragAnyMakeAndCancleComponent.prototype.onDestroy = function () {
        // this.scene_Ani_next.play(0);
        this.destoryEvent();
        this.destoryData();
    };
    DragAnyMakeAndCancleComponent.prototype.destoryData = function () {
        delete this.ImgList;
        this.ImgList = [];
        this.resetData();
    };
    DragAnyMakeAndCancleComponent.prototype.destoryEvent = function () {
        for (var _i = 0, _a = this.ImgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginOriginalEvent, this);
        }
        if (this.btnReset) {
            this.btnReset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    DragAnyMakeAndCancleComponent.prototype.execMessage = function (data) {
        if (data["reset" + this.curComponentIndex.toString()]) {
            this.resetData();
        }
        else if (data["touchBegin" + this.curComponentIndex.toString()]) {
            var keyData = data["touchBegin" + this.curComponentIndex.toString()];
            var isNewItem = keyData["isNewItem"];
            var curIndexStr = keyData["curIndexStr"];
            var targetX = parseInt(keyData["targetX"]);
            var targetY = parseInt(keyData["targetY"]);
            this.revStartHandle(isNewItem, curIndexStr, targetX, targetY);
        }
        else if (data["touchMove" + this.curComponentIndex.toString()]) {
            var keyData = data["touchMove" + this.curComponentIndex.toString()];
            var targetX = parseInt(keyData["targetX"]);
            var targetY = parseInt(keyData["targetY"]);
            this.revMoveHandle(targetX, targetY);
        }
        else if (data["touchEndLayer" + this.curComponentIndex.toString()]) {
            var keyData = data["touchEndLayer" + this.curComponentIndex.toString()];
            var isCancelStr = keyData["isCancelStr"];
            var isNewItemStr = keyData["isNewItemStr"];
            var targetX = parseInt(keyData["targetX"]);
            var targetY = parseInt(keyData["targetY"]);
            var deleteIndex = parseInt(keyData["deleteIndex"]);
            this.revEndHandle(isCancelStr, isNewItemStr, targetX, targetY, deleteIndex);
        }
    };
    DragAnyMakeAndCancleComponent.prototype.revStartHandle = function (isNewItemStr, curIndexStr, targetX, targetY) {
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
    DragAnyMakeAndCancleComponent.prototype.revMoveHandle = function (targetX, targetY) {
        var target = this.curMoveItemObj;
        if (target) {
            var posTarget = this.globalToLocal(targetX, targetY);
            target.x = posTarget.x;
            target.y = posTarget.y;
        }
    };
    DragAnyMakeAndCancleComponent.prototype.revEndHandle = function (isCancelStr, isNewItemStr, targetX, targetY, deleteIndex) {
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
    return DragAnyMakeAndCancleComponent;
}(eui.Component));
__reflect(DragAnyMakeAndCancleComponent.prototype, "DragAnyMakeAndCancleComponent");
//# sourceMappingURL=DragAnyMakeAndCancleComponent.js.map