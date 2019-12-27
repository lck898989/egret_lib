// from 刘斌毅
// need:    参考DragAnyMakeRuleListCommonScene
//          天平组件need
//                      imgListLeft                 左侧天平上的图片
//                      imgListRight                右侧天平上的图片
//                      imgListBalanceLine          中间旋转的图片
//                      numWeightLeftInit           左侧初始重量
//                      numWeightRightInit          右侧初始重量
//                      rotMax                      最大旋转量
//                      numWeightRotMax             开始旋转的差值重量
//                      pointCenter                 天平中心
//                      setRightItemObjList         左侧放上去的道具 动画 && 坐标       子动画需要自己处理
//                      setLeftItemObjList          右侧放上去的道具 动画 && 坐标       子动画需要自己处理
//                      
//                      refreshForListTouchEnd      设置每个物品有多少重量
// desc:    天平
//          可以放多个天平
//          坐标自己控制
class Moudle_Page14Scene extends DragAnyMakeRuleListCommonScene{
    static key:string = "Moudle_Page14Scene";

    private img_1:eui.Image;
    private img_2:eui.Image;
    private img_3:eui.Image;
    private img_4:eui.Image;
    private img_5:eui.Image;

    private rect_1:eui.Rect;
    private rect_2:eui.Rect;

    private img_tp1_1:eui.Image;
    private img_tp1_2:eui.Image;
    private img_tp1_3:eui.Image;
    private img_tp1_4:eui.Image;
    private img_tp1_5:eui.Image;

    private img_tp2_1:eui.Image;
    private img_tp2_2:eui.Image;
    private img_tp2_3:eui.Image;
    private img_tp2_4:eui.Image;
    private img_tp2_5:eui.Image;
    private img_tp2_6:eui.Image;
    private img_tp2_7:eui.Image;
    private img_tp2_8:eui.Image;
    private img_tp2_9:eui.Image;


    private balanceComponent1:BalanceComponent;
    private balanceComponent2:BalanceComponent;

    public constructor() {
        super();
        this.skinName = "Moudle_Page14Scene_Skin";
    }
    
    /** 每次进入 */
    public onAdd(): void {

        this.initSelf()

        this.ImgList.push(this.img_1)
        this.ImgList.push(this.img_2)
        this.ImgList.push(this.img_3)
        this.ImgList.push(this.img_4)
        this.ImgList.push(this.img_5)

        this.countImgList.push(1)
        this.countImgList.push(1)
        this.countImgList.push(1)
        this.countImgList.push(1)
        this.countImgList.push(1)

        this.rectCanSetList.push(this.rect_1)
        this.rectCanSetList.push(this.rect_2)

        super.onAdd()

    }

    public onDestroy(): void {

        this.balanceComponent1.onDestroy()
        delete this.balanceComponent1
        this.balanceComponent1 = null

        this.balanceComponent2.onDestroy()
        delete this.balanceComponent2
        this.balanceComponent2 = null

        super.onDestroy()
    }

    protected isCanSetToRect(indexForImgList:number, indexRect:number, obj:eui.Image, isNewItem:boolean):boolean{
        return this.isCanSetToRectForRectMax(indexRect, obj, 3)
    }
    
    private initSelf(){

        this.balanceComponent1 = new BalanceComponent()
        this.balanceComponent1.initData()
        // 左侧
        this.balanceComponent1.imgListLeft.push(this.img_tp1_3)
        this.balanceComponent1.imgListLeft.push(this.img_tp1_5)
        // 右侧
        this.balanceComponent1.imgListRight.push(this.img_tp1_4)
        this.balanceComponent1.imgListRight.push(this.rect_1)
        // 旋转天平
        this.balanceComponent1.imgListBalanceLine.push(this.img_tp1_2)
        // 左侧当前重量
        this.balanceComponent1.numWeightLeftInit = 3
        this.balanceComponent1.rotMax = 12
        this.balanceComponent1.numWeightRotMax = 1
        this.balanceComponent1.pointCenter = new egret.Point(this.img_tp1_2.x, this.img_tp1_2.y)
        // 设置动画
        let self = this
        this.balanceComponent1.setRightItemObjList = function(time:number = null, xTemp:number = null, yTemp:number = null){
            self.setRightItemObjList1(time, xTemp, yTemp)
        }
        this.balanceComponent1.onInit()
        


        this.balanceComponent2 = new BalanceComponent()
        this.balanceComponent2.initData()
        // 左侧
        this.balanceComponent2.imgListLeft.push(this.img_tp2_3)
        this.balanceComponent2.imgListLeft.push(this.img_tp2_5)
        this.balanceComponent2.imgListLeft.push(this.img_tp2_6)
        this.balanceComponent2.imgListLeft.push(this.img_tp2_7)
        this.balanceComponent2.imgListLeft.push(this.img_tp2_8)
        this.balanceComponent2.imgListLeft.push(this.img_tp2_9)
        // 右侧
        this.balanceComponent2.imgListRight.push(this.img_tp2_4)
        this.balanceComponent2.imgListRight.push(this.rect_2)
        // 旋转天平
        this.balanceComponent2.imgListBalanceLine.push(this.img_tp2_2)
        // 左侧当前重量
        this.balanceComponent2.numWeightLeftInit = 15
        this.balanceComponent2.rotMax = 12
        this.balanceComponent2.numWeightRotMax = 10
        this.balanceComponent2.pointCenter = new egret.Point(this.img_tp2_2.x, this.img_tp2_2.y)
        // 设置动画
        this.balanceComponent2.setRightItemObjList = function(time:number = null, xTemp:number = null, yTemp:number = null){
            self.setRightItemObjList2(time, xTemp, yTemp)
        }

        this.balanceComponent2.onInit()

    }
    private setPosFunc(list:Array<{obj, index}>, xTemp:number, yTemp:number){
        if(list){
            for(let i in list){
                let tempIndex = parseInt(i)
                let data = list[tempIndex]
                egret.Tween.removeTweens(data.obj)
                data.obj.scaleX = 0.6
                data.obj.scaleY = 0.6
                if(tempIndex == 0){
                    data.obj.x = xTemp 
                    data.obj.y = yTemp - 80
                } else if(tempIndex == 1){
                    data.obj.x = xTemp + 60
                    data.obj.y = yTemp - 80
                } else if(tempIndex == 2){
                    data.obj.x = xTemp - 60
                    data.obj.y = yTemp - 80
                } 
            }
        }
    }
    // 执行右边天平上的砝码上的移动动画
    private startTweenToPosFunc(list:Array<{obj, index}>, xTemp:number, yTemp:number, time:number){
        if(list){
            for(let i in list){
                let tempIndex = parseInt(i)
                let data = list[tempIndex]
                egret.Tween.removeTweens(data.obj)
                if(tempIndex == 0){
                    let posX = xTemp 
                    let posY = yTemp - 80
                    egret.Tween.get(data.obj).to({x : posX, y : posY}, time);
                } else if(tempIndex == 1){
                    let posX = xTemp + 60
                    let posY = yTemp - 80
                    egret.Tween.get(data.obj).to({x : posX, y : posY}, time);
                } else if(tempIndex == 2){
                    let posX = xTemp - 60
                    let posY = yTemp - 80
                    egret.Tween.get(data.obj).to({x : posX, y : posY}, time);
                } 
            }
        }
    }
    private setRightItemObjList1(time:number = null, xTemp:number = null, yTemp:number = null){
        if(time != null && xTemp != null && yTemp != null){
            this.setPosFunc(this.targetDataMap[0], this.img_tp1_4.x, this.img_tp1_4.y)
            this.startTweenToPosFunc(this.targetDataMap[0], xTemp, yTemp, time)
        } else {
            this.setPosFunc(this.targetDataMap[0], this.img_tp1_4.x, this.img_tp1_4.y)
        }
    }
    private setRightItemObjList2(time:number = null, xTemp:number = null, yTemp:number = null){
        if(time != null && xTemp != null && yTemp != null){
            this.setPosFunc(this.targetDataMap[1], this.img_tp2_4.x, this.img_tp2_4.y)
            this.startTweenToPosFunc(this.targetDataMap[1], xTemp, yTemp, time)
        } else {
            this.setPosFunc(this.targetDataMap[1], this.img_tp2_4.x, this.img_tp2_4.y)
        }
    }
    

    protected refreshForListTouchEnd(){

        super.refreshForListTouchEnd()
        
        let functionNum = function(list:Array<{obj, index}>):number{
            let num = 0
            if(list){
                for(let data of list){
                    // 遍历每张图片的索引加上对应的重量
                    if(data.index == 0){
                        num += 3
                    } else if(data.index == 1){
                        num += 6
                    } else if(data.index == 2){
                        num += 8
                    } else if(data.index == 3){
                        num += 10
                    } else if(data.index == 4){
                        num += 12
                    }
                }
            }
            return num
        }
        let numRight1 = functionNum(this.targetDataMap[0])
        this.balanceComponent1.startRotTween(0, numRight1)

        let numRight2 = functionNum(this.targetDataMap[1])
        this.balanceComponent2.startRotTween(0, numRight2)
    }

}
