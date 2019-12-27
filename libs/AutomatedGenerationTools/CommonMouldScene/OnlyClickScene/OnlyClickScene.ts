class OnlyClickScene extends UIObject{
    // protected scene_Ani:egret.tween.TweenGroup;
    // protected scene_Ani_next:egret.tween.TweenGroup;

    protected ImgList:Array<eui.Image>;

    protected CurState:number = 0;

    public constructor()
    {
        super();

        this.ImgList = [];
    }

    /** 每次进入 */
    public onAdd():void
    {
        // this.scene_Ani.play(0);

        this.CurState = 0;

        this.refreshStateView();

        this.initAddEvent();
    }

    protected initAddEvent():void
    { 
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
    }

    protected touchTapEvent(event:egret.TouchEvent):void{
        
        if(this.CurState < this.ImgList.length){
            this.CurState ++
        }

        this.refreshStateView()

        CommunicationManager.getInstance().makePostMessage("onFileMessage", "next", 1);
    }

    /** 这里进行移出场景的处理 **/
    public onDestroy():void
    {
        // this.scene_Ani_next.play(0);
        delete this.ImgList;
        this.ImgList = [];
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapEvent, this);
    }

    protected refreshStateView(){

        for(let i in this.ImgList){
            let index = parseInt(i);
            let obj = this.ImgList[index];
            if(obj){
                if(this.CurState <= index){
                    obj.visible = false;
                } else {
                    obj.visible = true;
                }
            }
        }
    }

    public execMessage(data:any):void
    { 
        if (data["next"]){
            this.revNextLayerHandle();
        }
    }
    protected revNextLayerHandle():void{
        this.CurState++
        this.refreshStateView()
    }
}