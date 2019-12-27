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
var DragAnyOptionalChooseBtn = (function (_super) {
    __extends(DragAnyOptionalChooseBtn, _super);
    function DragAnyOptionalChooseBtn() {
        var _this = _super.call(this) || this;
        _this.ImgList = [];
        _this.rectListSelect = [];
        _this.imgPosList = [];
        _this.imgSelected = null;
        _this.curMoveIndex = -1;
        return _this;
    }
    /** 每次进入 */
    DragAnyOptionalChooseBtn.prototype.onAdd = function () {
        // this.scene_Ani.play(0);
        this.initData();
        this.initAddEvent();
    };
    DragAnyOptionalChooseBtn.prototype.initData = function () {
        this.curMoveIndex = -1;
        this.imgPosList = [];
        for (var index in this.ImgList) {
            var obj = this.ImgList[parseInt(index)];
            if (obj) {
                this.imgPosList[parseInt(index)] = new egret.Point(obj.x, obj.y);
            }
        }
        if (this.imgSelected) {
            this.imgSelected.visible = false;
        }
    };
    DragAnyOptionalChooseBtn.prototype.initSelectData = function (rectListSelect, imgSelected, indexTrueAnswer) {
        if (rectListSelect && imgSelected && indexTrueAnswer != null) {
            this.rectListSelect = rectListSelect;
            this.imgSelected = imgSelected;
            this.indexTrueAnswer = indexTrueAnswer;
        }
        else {
            Log.trace("DragAnyOptionalChooseBtn", "initSelectData error args is null");
        }
    };
    DragAnyOptionalChooseBtn.prototype.initAddEvent = function () {
        for (var _i = 0, _a = this.ImgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginEvent, this);
        }
        if (this.rectListSelect) {
            for (var _b = 0, _c = this.rectListSelect; _b < _c.length; _b++) {
                var obj = _c[_b];
                obj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapChooseRectEvent, this);
            }
        }
        this.btnReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapResetEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    DragAnyOptionalChooseBtn.prototype.resetData = function () {
        for (var index in this.ImgList) {
            var obj = this.ImgList[parseInt(index)];
            var pos = this.imgPosList[parseInt(index)];
            if (obj) {
                obj.x = pos.x;
                obj.y = pos.y;
            }
        }
    };
    DragAnyOptionalChooseBtn.prototype.touchTapResetEvent = function (event) {
        this.resetData();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "reset", "1");
    };
    DragAnyOptionalChooseBtn.prototype.touchTapChooseRectEvent = function (event) {
        var index = this.rectListSelect.indexOf(event.currentTarget);
        if (index > -1) {
            if (this.imgSelected) {
                this.imgSelected.visible = true;
                this.imgSelected.x = event.currentTarget.x;
                this.imgSelected.y = event.currentTarget.y;
            }
            if (index == this.indexTrueAnswer) {
                GM.dlg.popDlg(CommonMovieDlg, "", null, { soundType: 1, movie: "success", movieCount: 2 });
            }
            else {
                GM.dlg.popDlg(CommonMovieDlg, "", null, { soundType: 2, movie: "failed", movieCount: 2 });
            }
            var obj = new Object();
            obj["chooseIndex"] = index.toString();
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "choose", obj);
        }
        else {
            Log.trace("DragAnyOptionalChooseBtn", " touchTapChooseRectEvent error  index error ");
        }
    };
    DragAnyOptionalChooseBtn.prototype.touchBeginEvent = function (event) {
        var curIndex = this.ImgList.indexOf(event.currentTarget);
        if (curIndex >= 0) {
            var childIndex = this.group.numChildren;
            this.group.setChildIndex(event.target, childIndex - 1);
            this.curMoveIndex = curIndex;
            var obj = new Object();
            obj["clickIndex"] = curIndex.toString();
            obj["targetX"] = event.stageX.toString();
            obj["targetY"] = event.stageY.toString();
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchBegin", obj);
        }
    };
    DragAnyOptionalChooseBtn.prototype.touchMoveLayerEvent = function (event) {
        if (this.curMoveIndex >= 0) {
            var target = this.ImgList[this.curMoveIndex];
            if (target) {
                var stageX = event.stageX;
                var stageY = event.stageY;
                var posTarget = this.globalToLocal(stageX, stageY);
                target.x = posTarget.x;
                target.y = posTarget.y;
                // 给学生发送信令  移动中
                var obj = new Object();
                obj["clickIndex"] = this.curMoveIndex.toString();
                obj["targetX"] = target.x.toString();
                obj["targetY"] = target.y.toString();
                CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchMoveLayer", obj);
            }
        }
    };
    DragAnyOptionalChooseBtn.prototype.touchEndLayerEvent = function (event) {
        if (this.curMoveIndex >= 0) {
            var target = this.ImgList[this.curMoveIndex];
            if (target) {
                var target_1 = this.ImgList[this.curMoveIndex];
                if (target_1) {
                    var stageX = event.stageX;
                    var stageY = event.stageY;
                    var posTarget = this.globalToLocal(stageX, stageY);
                    target_1.x = posTarget.x;
                    target_1.y = posTarget.y;
                    // 给学生发送信令  移动中
                    var obj = new Object();
                    obj["clickIndex"] = this.curMoveIndex.toString();
                    obj["targetX"] = target_1.x.toString();
                    obj["targetY"] = target_1.y.toString();
                    CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchEndLayer", obj);
                }
                this.curMoveIndex = -1;
            }
        }
    };
    /** 这里进行移出场景的处理 **/
    DragAnyOptionalChooseBtn.prototype.onDestroy = function () {
        // this.scene_Ani_next.play(0);
        this.destroyEvent();
        this.destroyData();
    };
    DragAnyOptionalChooseBtn.prototype.destroyData = function () {
        this.resetData();
        delete this.ImgList;
        this.ImgList = [];
        delete this.rectListSelect;
        this.rectListSelect = [];
        delete this.imgSelected;
        this.imgSelected = null;
        delete this.imgPosList;
        this.imgPosList = [];
    };
    DragAnyOptionalChooseBtn.prototype.destroyEvent = function () {
        for (var _i = 0, _a = this.ImgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginEvent, this);
        }
        if (this.rectListSelect) {
            for (var _b = 0, _c = this.rectListSelect; _b < _c.length; _b++) {
                var obj = _c[_b];
                obj.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapChooseRectEvent, this);
            }
        }
        this.btnReset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapResetEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    };
    DragAnyOptionalChooseBtn.prototype.execMessage = function (data) {
        if (data["reset"]) {
            this.resetData();
        }
        else if (data["choose"]) {
            var chooseIndex = parseInt(data["choose"]["chooseIndex"]);
            this.revChooseHandle(chooseIndex);
        }
        else if (data["touchBegin"]) {
            var clickIndex = parseInt(data["touchBegin"]["clickIndex"]);
            var targetX = parseInt(data["touchBegin"]["targetX"]);
            var targetY = parseInt(data["touchBegin"]["targetY"]);
            this.revStartHandle(clickIndex, targetX, targetY);
        }
        else if (data["touchMoveLayer"]) {
            var clickIndex = parseInt(data["touchMoveLayer"]["clickIndex"]);
            var targetX = parseInt(data["touchMoveLayer"]["targetX"]);
            var targetY = parseInt(data["touchMoveLayer"]["targetY"]);
            this.revMoveLayerHandle(clickIndex, targetX, targetY);
        }
        else if (data["touchEndLayer"]) {
            var clickIndex = parseInt(data["touchEndLayer"]["clickIndex"]);
            var targetX = parseInt(data["touchEndLayer"]["targetX"]);
            var targetY = parseInt(data["touchEndLayer"]["targetY"]);
            this.revEndLayerHandle(clickIndex, targetX, targetY);
        }
    };
    DragAnyOptionalChooseBtn.prototype.revChooseHandle = function (chooseIndex) {
        if (chooseIndex > -1) {
            var target = this.rectListSelect[chooseIndex];
            if (this.imgSelected && target) {
                this.imgSelected.visible = true;
                this.imgSelected.x = target.x;
                this.imgSelected.y = target.y;
            }
            if (chooseIndex == this.indexTrueAnswer) {
                GM.dlg.popDlg(CommonMovieDlg, "", null, { soundType: 1, movie: "success", movieCount: 2 });
            }
            else {
                GM.dlg.popDlg(CommonMovieDlg, "", null, { soundType: 2, movie: "failed", movieCount: 2 });
            }
        }
    };
    DragAnyOptionalChooseBtn.prototype.revStartHandle = function (clickIndex, targetX, targetY) {
        var target = this.ImgList[clickIndex];
        if (target) {
            var childIndex = this.group.numChildren;
            this.group.setChildIndex(target, childIndex - 1);
        }
        else {
            Log.trace("DragAnyOptionalChooseBtn", "revStartHandle error target not find");
        }
    };
    DragAnyOptionalChooseBtn.prototype.revMoveLayerHandle = function (clickIndex, targetX, targetY) {
        var target = this.ImgList[clickIndex];
        if (target) {
            target.x = targetX;
            target.y = targetY;
        }
        else {
            Log.trace("DragAnyOptionalChooseBtn", "revMoveLayerHandle error target not find");
        }
    };
    DragAnyOptionalChooseBtn.prototype.revEndLayerHandle = function (clickIndex, targetX, targetY) {
        var target = this.ImgList[clickIndex];
        if (target) {
            target.x = targetX;
            target.y = targetY;
        }
        else {
            Log.trace("DragAnyOptionalChooseBtn", "revEndLayerHandle error target not find");
        }
    };
    return DragAnyOptionalChooseBtn;
}(UIObject));
__reflect(DragAnyOptionalChooseBtn.prototype, "DragAnyOptionalChooseBtn");
//# sourceMappingURL=DragAnyOptionalChooseBtn.js.map