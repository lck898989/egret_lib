class DragAnyOptionalChooseBtn extends UIObject{
    // protected scene_Ani:egret.tween.TweenGroup;
    // protected scene_Ani_next:egret.tween.TweenGroup;

    // 随意拖动的坐标
    protected ImgList:Array<eui.Image>;
    // 选择框 范围列表
    protected rectListSelect:Array<eui.Rect>;
    // 选中图片
    protected imgSelected:eui.Image;
    // 回答正确的index
    protected indexTrueAnswer:number;

    // 随意拖动的初始化坐标
    protected imgPosList:Array<egret.Point>;


    private group:eui.Group;
    private btnReset:eui.Group;
    private curMoveIndex:number;                // 当前拖动的图片索引


    public constructor()
    {
        super();

        this.ImgList = [];
        this.rectListSelect = [];
        this.imgPosList = [];
        this.imgSelected = null
        this.curMoveIndex = -1
    }

    /** 每次进入 */
    public onAdd():void
    {
        // this.scene_Ani.play(0);

        this.initData();

        this.initAddEvent();
    }

    protected initData(){
        this.curMoveIndex = -1
        this.imgPosList = []
        for(let index in this.ImgList){
            let obj = this.ImgList[parseInt(index)]
            if(obj){
                this.imgPosList[parseInt(index)] = new egret.Point(obj.x, obj.y);
            }
        }

        if(this.imgSelected){
            this.imgSelected.visible = false;
        }
    }
    protected initSelectData(rectListSelect:Array<eui.Rect>, imgSelected:eui.Image, indexTrueAnswer:number){
        if(rectListSelect && imgSelected && indexTrueAnswer != null){
            this.rectListSelect = rectListSelect;
            this.imgSelected = imgSelected;
            this.indexTrueAnswer = indexTrueAnswer;
        } else {
            Log.trace("DragAnyOptionalChooseBtn", "initSelectData error args is null")
        }
    }

    protected initAddEvent():void
    {   
        for(let obj of this.ImgList){
            obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginEvent, this);
        }
        if(this.rectListSelect){
            for(let obj of this.rectListSelect){
                obj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapChooseRectEvent, this);
            }
        }
        this.btnReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapResetEvent, this);

        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    }

    protected resetData(){
        for(let index in this.ImgList){
            let obj = this.ImgList[parseInt(index)]
            let pos = this.imgPosList[parseInt(index)]
            if(obj){
                obj.x = pos.x
                obj.y = pos.y
            }
        }
    }

    protected touchTapResetEvent(event:egret.TouchEvent):void{

        this.resetData()

        CommunicationManager.getInstance().makePostMessage("onFileMessage", "reset", "1");

    }
    protected touchTapChooseRectEvent(event:egret.TouchEvent):void{
        
        let index = this.rectListSelect.indexOf(event.currentTarget)

        if(index > -1){

            if(this.imgSelected){
                this.imgSelected.visible = true
                this.imgSelected.x = event.currentTarget.x
                this.imgSelected.y = event.currentTarget.y
            }

            if(index == this.indexTrueAnswer){
                GM.dlg.popDlg(CommonMovieDlg, "", null, {soundType : 1, movie : "success", movieCount : 2});
            } else {
                GM.dlg.popDlg(CommonMovieDlg, "", null, {soundType : 2, movie : "failed", movieCount : 2});
            }

            let obj:Object = new Object();
            obj["chooseIndex"] = index.toString();
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "choose", obj);

        } else {
            Log.trace("DragAnyOptionalChooseBtn", " touchTapChooseRectEvent error  index error ")
        }

    }

    protected touchBeginEvent(event:egret.TouchEvent):void
    {   

        let curIndex = this.ImgList.indexOf(event.currentTarget)
        if(curIndex >= 0){
            
            let childIndex = this.group.numChildren
            this.group.setChildIndex(event.target, childIndex - 1)

            this.curMoveIndex = curIndex

            let obj:Object = new Object();
            obj["clickIndex"] = curIndex.toString();
            obj["targetX"] = event.stageX.toString();
            obj["targetY"] = event.stageY.toString();
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchBegin", obj);
        }

    }

    protected touchMoveLayerEvent(event:egret.TouchEvent):void{   

        if(this.curMoveIndex >= 0){

            let target = this.ImgList[this.curMoveIndex]
            
            if(target){
                let stageX = event.stageX
                let stageY = event.stageY

                let posTarget = this.globalToLocal(stageX, stageY)
                target.x = posTarget.x 
                target.y = posTarget.y 

                // 给学生发送信令  移动中
                let obj:Object = new Object();
                obj["clickIndex"] = this.curMoveIndex.toString();
                obj["targetX"] = target.x.toString();
                obj["targetY"] = target.y.toString();
                CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchMoveLayer", obj);

            }
        }
    }
    protected touchEndLayerEvent(event:egret.TouchEvent):void{
        if(this.curMoveIndex >= 0){

            let target = this.ImgList[this.curMoveIndex]
            
            if(target){
                
                let target = this.ImgList[this.curMoveIndex]
            
                if(target){
                    let stageX = event.stageX
                    let stageY = event.stageY

                    let posTarget = this.globalToLocal(stageX, stageY)
                    target.x = posTarget.x 
                    target.y = posTarget.y 

                    // 给学生发送信令  移动中
                    let obj:Object = new Object();
                    obj["clickIndex"] = this.curMoveIndex.toString();
                    obj["targetX"] = target.x.toString();
                    obj["targetY"] = target.y.toString();
                    CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchEndLayer", obj);

                }

                this.curMoveIndex = -1;
            }

        }
    } 

    /** 这里进行移出场景的处理 **/
    public onDestroy():void
    {
        // this.scene_Ani_next.play(0);

        this.destroyEvent()
        this.destroyData()

    }
    protected destroyData(){

        this.resetData()

        delete this.ImgList;
        this.ImgList = []

        delete this.rectListSelect;
        this.rectListSelect = []

        delete this.imgSelected;
        this.imgSelected = null

        delete this.imgPosList;
        this.imgPosList = []

    }
    protected destroyEvent(){
        for(let obj of this.ImgList){
            obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginEvent, this);
        }
        if(this.rectListSelect){
            for(let obj of this.rectListSelect){
                obj.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapChooseRectEvent, this);
            }
        }
        this.btnReset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapResetEvent, this);

        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndLayerEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveLayerEvent, this);
    }

    

    public execMessage(data:any):void
    { 
        if (data["reset"]){
            this.resetData()
        } else if (data["choose"]){
            let chooseIndex:number = parseInt(data["choose"]["chooseIndex"]) 
            this.revChooseHandle(chooseIndex)
        } else if(data["touchBegin"]){
            let clickIndex:number = parseInt(data["touchBegin"]["clickIndex"]);
            let targetX:number = parseInt(data["touchBegin"]["targetX"]);
            let targetY:number = parseInt(data["touchBegin"]["targetY"]);
            this.revStartHandle(clickIndex, targetX, targetY);
        } else if(data["touchMoveLayer"]){
            let clickIndex:number = parseInt(data["touchMoveLayer"]["clickIndex"]);
            let targetX:number = parseInt(data["touchMoveLayer"]["targetX"]);
            let targetY:number = parseInt(data["touchMoveLayer"]["targetY"]);
            this.revMoveLayerHandle(clickIndex, targetX, targetY);
        } else if(data["touchEndLayer"]){
            let clickIndex:number = parseInt(data["touchEndLayer"]["clickIndex"]);
            let targetX:number = parseInt(data["touchEndLayer"]["targetX"]);
            let targetY:number = parseInt(data["touchEndLayer"]["targetY"]);
            this.revEndLayerHandle(clickIndex, targetX, targetY);
        }
    }

    protected revChooseHandle(chooseIndex:number):void{
        if(chooseIndex > -1){

            let target = this.rectListSelect[chooseIndex]

            if(this.imgSelected && target){
                this.imgSelected.visible = true
                this.imgSelected.x = target.x
                this.imgSelected.y = target.y
            }

            if(chooseIndex == this.indexTrueAnswer){
                GM.dlg.popDlg(CommonMovieDlg, "", null, {soundType : 1, movie : "success", movieCount : 2});
            } else {
                GM.dlg.popDlg(CommonMovieDlg, "", null, {soundType : 2, movie : "failed", movieCount : 2});
            }
        }
    }
    protected revStartHandle(clickIndex:number, targetX:number, targetY:number){

        let target = this.ImgList[clickIndex]
        if(target){
            let childIndex = this.group.numChildren
            this.group.setChildIndex(target, childIndex - 1)
        } else {
            Log.trace("DragAnyOptionalChooseBtn", "revStartHandle error target not find")
        }
        
    }
    protected revMoveLayerHandle(clickIndex:number, targetX:number, targetY:number){
        let target = this.ImgList[clickIndex]
        if(target){
            target.x = targetX
            target.y = targetY
        } else {
            Log.trace("DragAnyOptionalChooseBtn", "revMoveLayerHandle error target not find")
        }
    }
    protected revEndLayerHandle(clickIndex:number, targetX:number, targetY:number){
        let target = this.ImgList[clickIndex]
        if(target){
            target.x = targetX
            target.y = targetY
        } else {
            Log.trace("DragAnyOptionalChooseBtn", "revEndLayerHandle error target not find")
        }
    }

}