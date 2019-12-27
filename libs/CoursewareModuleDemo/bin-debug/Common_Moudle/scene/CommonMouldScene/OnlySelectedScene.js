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
 * by 郑岩
 * 需要显示选择状态的场景
 * @param arr : Array<Array<eui.Image>>
 * 当传入一个数组时，只显示点击选择状态
 * 当多个数组时，请把相同类型状态放入同一个数组 例如: A B  分别放入两个数组
 */
var OnlySelectedScene = (function (_super) {
    __extends(OnlySelectedScene, _super);
    function OnlySelectedScene() {
        var _this = _super.call(this) || this;
        _this._arr = new Array();
        return _this;
    }
    /** 移除场景处理 */
    OnlySelectedScene.prototype.onDestroy = function () {
        for (var i = 0; i < this._arr.length; i++) {
            for (var j = 0; j < this._arr[i].length; j++) {
                this._arr[i][j].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.doSelectedTouchHandle, this);
            }
        }
        delete this._arr;
        this._arr = [];
    };
    /** 初始化 */
    OnlySelectedScene.prototype.initScene = function (arr) {
        if (arr.length <= 0) {
            Log.trace("onlySelectedScene", "image arr error!!!");
            return;
        }
        this._arr = arr;
        var nameIndex = 1;
        for (var i = 0; i < this._arr.length; i++) {
            for (var j = 0; j < this._arr[i].length; j++) {
                this._arr[i][j].alpha = 0;
                this._arr[i][j].addEventListener(egret.TouchEvent.TOUCH_TAP, this.doSelectedTouchHandle, this);
                this._arr[i][j].name = "image" + String(nameIndex) + String(j);
                nameIndex++;
            }
        }
    };
    /** 处理点击选中 */
    OnlySelectedScene.prototype.doSelectedTouchHandle = function (e) {
        if (this._arr.length == 1) {
            for (var i = 0; i < this._arr.length; i++) {
                for (var j = 0; j < this._arr[i].length; j++) {
                    if (this._arr[i][j] === e.currentTarget) {
                        this._arr[i][j].alpha = 1;
                        CommunicationManager.getInstance().makePostMessage("onFileMessage", "selected", this._arr[i][j].name);
                    }
                    else {
                        this._arr[i][j].alpha = 0;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this._arr.length; i++) {
                for (var j = 0; j < this._arr[i].length; j++) {
                    if (this._arr[i][j] === e.currentTarget) {
                        this._arr[i][j].alpha = 1;
                        CommunicationManager.getInstance().makePostMessage("onFileMessage", "selected", this._arr[i][j].name);
                        for (var n = 0; n < this._arr.length; n++) {
                            if (this._arr[n][j] === this._arr[i][j])
                                continue;
                            this._arr[n][j].alpha = 0;
                        }
                        break;
                    }
                }
            }
        }
    };
    /** 接收信令 */
    OnlySelectedScene.prototype.execMessage = function (data) {
        if (data["selected"]) {
            var imgName = String(data["selected"]);
            if (this._arr.length == 1) {
                for (var i = 0; i < this._arr.length; i++) {
                    for (var j = 0; j < this._arr[i].length; j++) {
                        if (this._arr[i][j].name === imgName) {
                            this._arr[i][j].alpha = 1;
                        }
                        else {
                            this._arr[i][j].alpha = 0;
                        }
                    }
                }
            }
            else {
                for (var i = 0; i < this._arr.length; i++) {
                    for (var j = 0; j < this._arr[i].length; j++) {
                        if (this._arr[i][j].name === imgName) {
                            this._arr[i][j].alpha = 1;
                            for (var n = 0; n < this._arr.length; n++) {
                                if (this._arr[n][j] === this._arr[i][j])
                                    continue;
                                this._arr[n][j].alpha = 0;
                            }
                            break;
                        }
                    }
                }
            }
        }
    };
    return OnlySelectedScene;
}(UIObject));
__reflect(OnlySelectedScene.prototype, "OnlySelectedScene");
//# sourceMappingURL=OnlySelectedScene.js.map