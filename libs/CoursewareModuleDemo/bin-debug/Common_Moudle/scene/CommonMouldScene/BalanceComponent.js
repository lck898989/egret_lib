var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BalanceComponent = (function () {
    function BalanceComponent() {
        // 旋转最大角度
        this.rotMax = 30;
        // 旋转最大角度 所需要的左右差值
        this.numWeightRotMax = 30;
    }
    BalanceComponent.prototype.initData = function () {
        this.imgListLeft = [];
        this.imgListRight = [];
        this.imgListBalanceLine = [];
        this.numWeightLeftInit = 0;
        this.numWeightRightInit = 0;
        this.numWeightLeftCur = 0;
        this.numWeightRightCur = 0;
        this.rotMax = 30;
        this.numWeightRotMax = 30;
        this.pointCenter = new egret.Point(0, 0);
    };
    BalanceComponent.prototype.onInit = function () {
        this.startRotTween(0, 0, true);
    };
    BalanceComponent.prototype.onDestroy = function () {
    };
    BalanceComponent.prototype.setLeftItemObjList = function (time, xTemp, yTemp) {
        if (time === void 0) { time = null; }
        if (xTemp === void 0) { xTemp = null; }
        if (yTemp === void 0) { yTemp = null; }
    };
    BalanceComponent.prototype.setRightItemObjList = function (time, xTemp, yTemp) {
        if (time === void 0) { time = null; }
        if (xTemp === void 0) { xTemp = null; }
        if (yTemp === void 0) { yTemp = null; }
    };
    BalanceComponent.prototype.startRotTween = function (numWeightLeftNew, numWeightRightNew, isInit) {
        if (isInit === void 0) { isInit = false; }
        var isReturn = false;
        if (numWeightLeftNew == this.numWeightLeftCur && numWeightRightNew == this.numWeightRightCur) {
            // 和上次的数据相同 return
            isReturn = true;
        }
        if (this.numWeightLeftCur + this.numWeightLeftInit - this.numWeightRightCur - this.numWeightRightInit >= this.numWeightRotMax
            && numWeightLeftNew + this.numWeightLeftInit - numWeightRightNew - this.numWeightRightInit >= this.numWeightRotMax) {
            // 超过旋转上限 return  左侧
            isReturn = true;
        }
        if (this.numWeightRightCur + this.numWeightRightInit - this.numWeightLeftCur - this.numWeightLeftInit >= this.numWeightRotMax
            && numWeightRightNew + this.numWeightRightInit - numWeightLeftNew - this.numWeightLeftInit >= this.numWeightRotMax) {
            // 超过旋转上限 return  右侧
            isReturn = true;
        }
        if (isReturn && !isInit) {
            // left item
            this.setLeftItemObjList();
            // right item
            this.setRightItemObjList();
            return;
        }
        this.numWeightLeftCur = numWeightLeftNew;
        this.numWeightRightCur = numWeightRightNew;
        var time = 200;
        if (isInit) {
            time = 0;
        }
        // 开始旋转
        var ro = 0;
        if (this.numWeightLeftCur + this.numWeightLeftInit == this.numWeightRightCur + this.numWeightRightInit) {
            ro = 0;
        }
        else if (this.numWeightLeftCur + this.numWeightLeftInit == 0) {
            ro = this.rotMax;
        }
        else if (this.numWeightRightCur + this.numWeightRightInit == 0) {
            ro = -this.rotMax;
        }
        else {
            var percent = (-this.numWeightLeftCur - this.numWeightLeftInit + this.numWeightRightCur + this.numWeightRightInit) / this.numWeightRotMax;
            if (percent < -1) {
                percent = -1;
            }
            if (percent > 1) {
                percent = 1;
            }
            ro = this.rotMax * percent;
        }
        for (var _i = 0, _a = this.imgListBalanceLine; _i < _a.length; _i++) {
            var obj = _a[_i];
            egret.Tween.removeTweens(obj);
            egret.Tween.get(obj).to({ rotation: ro }, time);
        }
        // const half: number = this.baseImg.width / 2 - 33;
        // left
        var leftXTemp = null;
        var leftYTemp = null;
        for (var _b = 0, _c = this.imgListLeft; _b < _c.length; _b++) {
            var obj = _c[_b];
            var half = egret.Point.distance(this.pointCenter, new egret.Point(obj.x, obj.y));
            var leftX = this.pointCenter.x - Math.cos(ro * Math.PI / 180) * half;
            var leftY = this.pointCenter.y - Math.sin(ro * Math.PI / 180) * half;
            egret.Tween.removeTweens(obj);
            egret.Tween.get(obj).to({ x: leftX, y: leftY }, time);
            if (leftXTemp == null) {
                leftXTemp = leftX;
            }
            if (leftYTemp == null) {
                leftYTemp = leftY;
            }
        }
        // right
        var rightXTemp = null;
        var rightYTemp = null;
        for (var _d = 0, _e = this.imgListRight; _d < _e.length; _d++) {
            var obj = _e[_d];
            var half = egret.Point.distance(this.pointCenter, new egret.Point(obj.x, obj.y));
            var rightX = this.pointCenter.x + Math.cos(ro * Math.PI / 180) * half;
            var rightY = this.pointCenter.y + Math.sin(ro * Math.PI / 180) * half;
            egret.Tween.removeTweens(obj);
            egret.Tween.get(obj).to({ x: rightX, y: rightY }, time);
            if (rightXTemp == null) {
                rightXTemp = rightX;
            }
            if (rightYTemp == null) {
                rightYTemp = rightY;
            }
        }
        // left item
        this.setLeftItemObjList(time, leftXTemp, leftYTemp);
        // right item
        this.setRightItemObjList(time, rightXTemp, rightYTemp);
    };
    return BalanceComponent;
}());
__reflect(BalanceComponent.prototype, "BalanceComponent");
//# sourceMappingURL=BalanceComponent.js.map