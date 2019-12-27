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
/* tslint:disable:no-shadowed-variable variable-name no-for-in-array*/
// 不允许子作用域与外层作用域声明同名变量  驼峰  不允许对Array使用for-in
var DragAnyMakeRuleListCommonScene = (function (_super) {
    __extends(DragAnyMakeRuleListCommonScene, _super);
    function DragAnyMakeRuleListCommonScene() {
        var _this = _super.call(this) || this;
        _this.targetDataMap = {}; // key index  value [{obj, index}]   target对应位置的列表 map example {1:[{obj:obj, index:index}], 2:[{obj:obj, index:index}]}
        _this.isNewItem = false;
        _this.ImgList = [];
        _this.rectCanSetList = [];
        _this.numMax = 1;
        _this.curMoveItemIndex = -2;
        _this.countImgList = [];
        _this.curNumImgList = [];
        return _this;
    }
    /** 每次进入 */
    DragAnyMakeRuleListCommonScene.prototype.onAdd = function () {
        // this.scene_Ani.play(0);
        this.initData();
        this.initAddEvent();
        this.refreshForListTouchEnd();
    };
    /** 这里进行移出场景的处理 **/
    DragAnyMakeRuleListCommonScene.prototype.onDestroy = function () {
        // this.scene_Ani_next.play(0);
        this.destoryEvent();
        this.destoryData();
    };
    DragAnyMakeRuleListCommonScene.prototype.execMessage = function (data) {
        if (true) {
            return;
        }
        if (data["reset"]) {
            this.resetData();
            this.refreshForListTouchEnd();
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
            var targetListIndex = parseInt(data["touchEndLayer"]["targetListIndex"]);
            this.revEndHandle(isCancelStr, isNewItemStr, targetX, targetY, deleteIndex, targetListIndex);
        }
    };
    DragAnyMakeRuleListCommonScene.prototype.initData = function () {
        this.targetList = [];
        this.targetDataMap = {};
        this.curNumImgList = [];
        if (this.countImgList.length <= 0) {
            for (var i = 0; i < this.ImgList.length; i++) {
                this.countImgList[i] = 9999;
                this.curNumImgList[i] = 0;
            }
        }
        else {
            for (var i = 0; i < this.ImgList.length; i++) {
                this.curNumImgList[i] = 0;
            }
        }
    };
    DragAnyMakeRuleListCommonScene.prototype.initAddEvent = function () {
        for (var _i = 0, _a = this.ImgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginOriginalEvent, this);
        }
        if (this.btnReset) {
            this.btnReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
        }
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginLayerEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    DragAnyMakeRuleListCommonScene.prototype.touchBeginOriginalEvent = function (event) {
        // 错误兼容处理 ( 如果点击的不是临时的..说明上次临时的没用.兼容处理 )
        this.errorEndEventFunc();
        event.stopPropagation();
        // event.stopImmediatePropagation()
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
            // 刷新 是否超过可拖动的上限
            this.refreshToIsHideTouchBegin(curIndex);
        }
    };
    DragAnyMakeRuleListCommonScene.prototype.newObjForTouchBegin = function (obj, xGlobal, yGlobal) {
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
    DragAnyMakeRuleListCommonScene.prototype.deleteObj = function (obj) {
        if (!obj) {
            return;
        }
        obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginMakedItemEvent, this);
        egret.Tween.removeTweens(obj);
        this.group.removeChild(obj);
    };
    DragAnyMakeRuleListCommonScene.prototype.touchBeginMakedItemEvent = function (event) {
        // 错误兼容处理 ( 如果点击的是临时的..如果点击的不是上次点击的.兼容处理)
        if (this.curMoveItemIndex >= -1 && this.curMoveItemObj) {
            if (this.curMoveItemObj == event.currentTarget) {
                // 如果是上次点击的 数据不变, return
                return;
            }
            else {
                // 如果不是上次点击的 数据清除 继续正常逻辑
                this.errorEndEventFunc();
            }
        }
        event.stopPropagation();
        var curIndex = -1;
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
    DragAnyMakeRuleListCommonScene.prototype.touchMoveLayerEvent = function (event) {
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
    DragAnyMakeRuleListCommonScene.prototype.touchBeginLayerEvent = function (event) {
        // 错误兼容处理 ( 如果点击的不是临时的..说明上次临时的没用.兼容处理 )
        this.errorEndEventFunc();
    };
    DragAnyMakeRuleListCommonScene.prototype.touchEndLayerEvent = function (event) {
        var isCancelStr = 0;
        var isNewItemStr = 0;
        var stageXStr = 0;
        var stageYStr = 0;
        var deleteIndex = -2;
        var index = -1;
        if (this.curMoveItemIndex >= -1 && this.curMoveItemObj) {
            var target = this.curMoveItemObj;
            var stageX = event.stageX;
            var stageY = event.stageY;
            stageXStr = event.stageX;
            stageYStr = event.stageY;
            this.curMoveItemObj.x = stageX;
            this.curMoveItemObj.y = stageY;
            index = this.getRectIndexCanSet(stageX, stageY);
            if (!this.isCanSetToRect(this.curMoveItemIndex, index, this.curMoveItemObj, this.isNewItem)) {
                index = -1;
            }
            if (index <= -1) {
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
                    for (var index_1 in this.targetList) {
                        var obj_1 = this.targetList[index_1];
                        if (obj_1 == this.curMoveItemObj) {
                            curIndex = parseInt(index_1);
                        }
                    }
                    deleteIndex = curIndex;
                    this.targetList.splice(curIndex, 1);
                    this.removeToTarget(this.curMoveItemObj);
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
                    this.pushToTarget(this.curMoveItemObj, this.curMoveItemIndex, index);
                    this.curMoveItemObj = null;
                }
                else {
                    isNewItemStr = 0;
                    // 表示 移动的是原来创建好的 , 只设置坐标就可以
                    this.refreshToTarget(this.curMoveItemObj, index);
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
        obj["targetListIndex"] = index.toString();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchEndLayer", obj);
        this.refreshForListTouchEnd();
    };
    DragAnyMakeRuleListCommonScene.prototype.resetData = function () {
        if (this.targetList && this.targetList.length > 0) {
            for (var _i = 0, _a = this.targetList; _i < _a.length; _i++) {
                var obj = _a[_i];
                this.deleteObj(obj);
            }
            this.targetList = [];
        }
        this.targetDataMap = {};
        for (var i = 0; i < this.curNumImgList.length; i++) {
            this.curNumImgList[i] = 0;
        }
    };
    DragAnyMakeRuleListCommonScene.prototype.touchTapEvent = function (event) {
        this.resetData();
        this.refreshForListTouchEnd();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "reset", 1);
    };
    DragAnyMakeRuleListCommonScene.prototype.destoryData = function () {
        delete this.ImgList;
        this.ImgList = [];
        delete this.rectCanSetList;
        this.rectCanSetList = [];
        delete this.targetDataMap;
        this.targetDataMap = {};
        delete this.countImgList;
        this.countImgList = [];
        delete this.curNumImgList;
        this.curNumImgList = [];
        this.resetData();
    };
    DragAnyMakeRuleListCommonScene.prototype.destoryEvent = function () {
        for (var _i = 0, _a = this.ImgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginOriginalEvent, this);
        }
        if (this.btnReset) {
            this.btnReset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginLayerEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    DragAnyMakeRuleListCommonScene.prototype.revStartHandle = function (isNewItemStr, curIndexStr, targetX, targetY) {
        this.curMoveItemIndex = -2;
        if (isNewItemStr == "1") {
            var curIndex = parseInt(curIndexStr);
            var obj = this.ImgList[curIndex];
            if (obj) {
                this.curMoveItemObj = this.newObjForTouchBegin(obj, targetX, targetY);
                this.isNewItem = true;
                this.curMoveItemIndex = parseInt(curIndexStr);
            }
            else {
                Log.trace("DragAnyMakeForMaxAndCancleScene", "revStartHandle error  index to obj not find isNewItemStr = 1");
            }
            // 刷新 是否超过可拖动的上限(新拖动出来的才需要判断)
            this.refreshToIsHideTouchBegin(curIndex);
        }
        else {
            var curIndex = parseInt(curIndexStr);
            var obj = this.targetList[curIndex];
            if (obj) {
                this.isNewItem = false;
                var childIndex = this.group.numChildren;
                this.group.setChildIndex(obj, childIndex - 1);
                this.curMoveItemObj = obj;
            }
            else {
                Log.trace("DragAnyMakeForMaxAndCancleScene", "revStartHandle error  index to obj not find isNewItemStr = 0");
            }
        }
    };
    DragAnyMakeRuleListCommonScene.prototype.revMoveHandle = function (targetX, targetY) {
        var target = this.curMoveItemObj;
        if (target) {
            var posTarget = this.globalToLocal(targetX, targetY);
            target.x = posTarget.x;
            target.y = posTarget.y;
        }
    };
    DragAnyMakeRuleListCommonScene.prototype.revEndHandle = function (isCancelStr, isNewItemStr, targetX, targetY, deleteIndex, targetListIndex) {
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
                        this.removeToTarget(this.curMoveItemObj);
                    }
                    this.curMoveItemObj = null;
                }
                else {
                    Log.trace("DragAnyMakeForMaxAndCancleScene", "revEndHandle error  index to obj not find ");
                }
            }
        }
        else {
            Log.trace("不是取消");
            Log.trace("curMoveItemObj is ", this.curMoveItemObj);
            Log.trace("targetList is ", this.targetList);
            Log.trace("targetDataMap is ", this.targetDataMap);
            // 不是取消
            if (isNewItemStr == "1") {
                // 表示 创建了一个新的 需要保存到target列表
                if (this.curMoveItemObj) {
                    this.targetList.push(this.curMoveItemObj);
                    if (targetListIndex > -1) {
                        this.pushToTarget(this.curMoveItemObj, this.curMoveItemIndex, targetListIndex);
                    }
                }
                this.curMoveItemIndex = -2;
                this.curMoveItemObj = null;
            }
            else {
                // 表示 移动的是原来创建好的 , 只设置坐标就可以
                this.refreshToTarget(this.curMoveItemObj, targetListIndex);
                this.curMoveItemObj = null;
            }
        }
        this.refreshForListTouchEnd();
    };
    // 获取rect的index 如果嫌效率低.可以不用rect 重写此方法 手动控制index
    DragAnyMakeRuleListCommonScene.prototype.getRectIndexCanSet = function (stageX, stageY) {
        for (var indexCur in this.rectCanSetList) {
            var obj = this.rectCanSetList[indexCur];
            if (obj.hitTestPoint(stageX, stageY)) {
                return parseInt(indexCur);
            }
        }
        return -1;
    };
    // indexForImgList 图片索引(new = true为图片索引 为false 为target索引 需要getDataFromTargetDataMap 通过图片获取索引),
    // indexRect 目标方框索引
    // obj 当前拖动的对象
    // isNewItem 是否是新建的对象(新产生的=true  已经产生的二次拖动=false)
    DragAnyMakeRuleListCommonScene.prototype.isCanSetToRect = function (indexForImgList, indexRect, obj, isNewItem) {
        if (isNewItem) {
            return this.isCanSetToRectForReal(indexForImgList, indexRect, obj, isNewItem);
        }
        else {
            var dataTemp = this.getDataFromTargetDataMap(obj);
            if (dataTemp) {
                return this.isCanSetToRectForReal(dataTemp.index, indexRect, obj, isNewItem);
            }
        }
        return true;
    };
    DragAnyMakeRuleListCommonScene.prototype.isCanSetToRectForReal = function (indexForImgList, indexRect, obj, isNewItem) {
        return true;
    };
    // 扩展方法
    // 每个方框里只能放 numMax 张图片
    DragAnyMakeRuleListCommonScene.prototype.isCanSetToRectForRectMax = function (indexRect, obj, numMax) {
        if (this.targetDataMap[indexRect] && this.targetDataMap[indexRect].length > 0) {
            if (this.targetDataMap[indexRect].length < numMax) {
                return true;
            }
            else if (this.targetDataMap[indexRect].length == numMax) {
                for (var _i = 0, _a = this.targetDataMap[indexRect]; _i < _a.length; _i++) {
                    var data = _a[_i];
                    if (data.obj == obj) {
                        return true;
                    }
                }
                return false;
            }
            else {
                return false;
            }
        }
        return true;
    };
    // 临时map对象 数据
    DragAnyMakeRuleListCommonScene.prototype.pushToTarget = function (obj, indexForImgList, indexRect) {
        var dataList = null;
        if (this.targetDataMap[indexRect]) {
            dataList = this.targetDataMap[indexRect];
            var data = { obj: obj, index: indexForImgList };
            dataList.push(data);
        }
        else {
            dataList = [{ obj: obj, index: indexForImgList }];
            this.targetDataMap[indexRect] = dataList;
        }
        this.curNumImgList[indexForImgList]++;
    };
    DragAnyMakeRuleListCommonScene.prototype.removeToTarget = function (objCur) {
        for (var key in this.targetDataMap) {
            var dataList = this.targetDataMap[key];
            if (dataList) {
                for (var i in dataList) {
                    var data = dataList[parseInt(i)];
                    if (data) {
                        if (data.obj == objCur) {
                            dataList.splice(i, 1);
                            this.curNumImgList[data.index]--;
                            return;
                        }
                    }
                }
            }
        }
    };
    // 需要test
    DragAnyMakeRuleListCommonScene.prototype.refreshToTarget = function (objCur, indexRect) {
        for (var key in this.targetDataMap) {
            var dataList = this.targetDataMap[key];
            if (dataList) {
                for (var i in dataList) {
                    var data = dataList[parseInt(i)];
                    if (data) {
                        if (data.obj == objCur) {
                            this.removeToTarget(objCur);
                            this.pushToTarget(data.obj, data.index, indexRect);
                            return;
                        }
                    }
                }
            }
        }
    };
    // 需要判空
    DragAnyMakeRuleListCommonScene.prototype.getDataFromTargetDataMap = function (objCur) {
        for (var key in this.targetDataMap) {
            var dataList = this.targetDataMap[key];
            if (dataList) {
                for (var i in dataList) {
                    var data = dataList[parseInt(i)];
                    if (data) {
                        if (data.obj == objCur) {
                            return data;
                        }
                    }
                }
            }
        }
        return null;
    };
    DragAnyMakeRuleListCommonScene.prototype.refreshToIsHideTouchBegin = function (imgIndex) {
        for (var i in this.ImgList) {
            var index = parseInt(i);
            var obj = this.ImgList[index];
            var numCurTake = 0;
            if (index == imgIndex) {
                numCurTake = 1;
            }
            if (obj) {
                if (this.curNumImgList[index] + numCurTake < this.countImgList[index]) {
                    // 数量没超上限
                    obj.visible = true;
                }
                else {
                    // 数量超过上限
                    obj.visible = false;
                }
            }
        }
    };
    // 每次点击结束都调用
    DragAnyMakeRuleListCommonScene.prototype.refreshForListTouchEnd = function () {
        for (var i in this.ImgList) {
            var index = parseInt(i);
            var obj = this.ImgList[index];
            if (obj) {
                if (this.curNumImgList[index] < this.countImgList[index]) {
                    // 数量没超上限
                    obj.visible = true;
                }
                else {
                    // 数量超过上限
                    obj.visible = false;
                }
            }
        }
    };
    DragAnyMakeRuleListCommonScene.prototype.errorEndEventFunc = function () {
        if (this.curMoveItemIndex >= -1 && this.curMoveItemObj) {
            // 错误兼容处理 如果上次的没释放.并且错误 .重新处理end
            var errorEndEvent = new egret.TouchEvent(egret.TouchEvent.TOUCH_END, null, null, 999999, 999999);
            this.touchEndLayerEvent(errorEndEvent);
        }
    };
    return DragAnyMakeRuleListCommonScene;
}(UIObject));
__reflect(DragAnyMakeRuleListCommonScene.prototype, "DragAnyMakeRuleListCommonScene");
//# sourceMappingURL=DragAnyMakeRuleListCommonScene.js.map