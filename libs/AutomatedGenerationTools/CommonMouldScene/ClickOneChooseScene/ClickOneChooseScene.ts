class ClickOneChooseScene extends UIObject{
    // protected scene_Ani:egret.tween.TweenGroup;
    // protected scene_Ani_next:egret.tween.TweenGroup;

    // 单选图片列表
    protected ImgSelectedList:Array<eui.Image>;
    // 选择框 范围列表
    protected rectListSelect:Array<eui.Rect>;


    private group:eui.Group;


    public constructor()
    {
        super();

        this.ImgSelectedList = [];
        this.rectListSelect = [];
    }

    /** 每次进入 */
    public onAdd():void
    {
        // this.scene_Ani.play(0);

        this.initData();

        this.initAddEvent();
    }

    protected initData(){

        for(let index in this.ImgSelectedList){
            let obj = this.ImgSelectedList[parseInt(index)]
            if(obj){
                obj.visible = false
            }
        }

    }

    protected initAddEvent():void
    {   
        if(this.rectListSelect){
            for(let obj of this.rectListSelect){
                obj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapChooseRectEvent, this);
            }
        }
    }

    protected resetData(){
        for(let index in this.ImgSelectedList){
            let obj = this.ImgSelectedList[parseInt(index)]
            if(obj){
                obj.visible = false
            }
        }
    }

    protected touchTapChooseRectEvent(event:egret.TouchEvent):void{
        
        let index = this.rectListSelect.indexOf(event.currentTarget)

        if(index > -1){

            for(let indexTemp in this.ImgSelectedList){
                let obj = this.ImgSelectedList[parseInt(indexTemp)]
                if(obj){
                    if(parseInt(indexTemp) == index){
                        obj.visible = true
                    } else {
                        obj.visible = false
                    }
                    
                }
            }

            let obj:Object = new Object();
            obj["chooseIndex"] = index.toString();
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "choose", obj);

        } else {
            Log.trace("DragAnyOptionalChooseBtn", " touchTapChooseRectEvent error  index error ")
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

        delete this.ImgSelectedList;
        this.ImgSelectedList = []

        delete this.rectListSelect;
        this.rectListSelect = []

    }
    protected destroyEvent(){

        if(this.rectListSelect){
            for(let obj of this.rectListSelect){
                obj.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapChooseRectEvent, this);
            }
        }

    }

    

    public execMessage(data:any):void
    { 
        if (data["choose"]){
            let chooseIndex:number = parseInt(data["choose"]["chooseIndex"]) 
            this.revChooseHandle(chooseIndex)
        }
    }

    protected revChooseHandle(chooseIndex:number):void{
        if(chooseIndex > -1){

            for(let indexTemp in this.ImgSelectedList){
                let obj = this.ImgSelectedList[parseInt(indexTemp)]
                if(obj){
                    if(parseInt(indexTemp) == chooseIndex){
                        obj.visible = true
                    } else {
                        obj.visible = false
                    }
                    
                }
            }
        }
    }
    
}