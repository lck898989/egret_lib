// from 刘斌毅
// need:    this.ImgList        可以拖动的列表             锚点需要在中心
//          this.ruleRectList   可以放置的位置列表          锚点需要在中心 
// desc:    点击图片       拖动图片 
//          拖动        
//          拖动结束       可放置区域放置 随意放置
class Moudle_Page10Scene extends DropAnyToRuleRectScene{

    static key:string = "Moudle_Page10Scene";

    private img_1:eui.Image
    private img_2:eui.Image
    private img_3:eui.Image
    private img_4:eui.Image
    private img_5:eui.Image
    private img_6:eui.Image
    private img_7:eui.Image
    private img_8:eui.Image
    private img_9:eui.Image
    private img_10:eui.Image
    private img_11:eui.Image

    private rect_1:eui.Rect

    private img_Door1:eui.Image
    private img_Door2:eui.Image

    public constructor() {
        super();
        this.skinName = "Moudle_Page10Scene_Skin";
    }

    /** 每次进入 */
    public onAdd(): void {

        this.ImgList.push(this.img_1)
        this.ImgList.push(this.img_2)
        this.ImgList.push(this.img_3)
        this.ImgList.push(this.img_4)
        this.ImgList.push(this.img_5)
        this.ImgList.push(this.img_6)
        this.ImgList.push(this.img_7)
        this.ImgList.push(this.img_8)
        this.ImgList.push(this.img_9)
        this.ImgList.push(this.img_10)
        this.ImgList.push(this.img_11)
        
        for(let img of this.ImgList){
            img.pixelHitTest = true
        }

        this.ruleRectList.push(this.rect_1)

        super.onAdd()

        this.initSelfData()
    }
    private initSelfData(){
        this.img_Door1.visible = true
        this.group.setChildIndex(this.img_Door1, this.group.numChildren - 1)
        this.img_Door2.visible = false
        this.img_Door1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapClickEvent, this);
    }

    /** 这里进行移出场景的处理 **/
    public onDestroy():void
    {
        super.onDestroy()
        
        this.img_Door1.visible = true
        this.img_Door2.visible = false
        this.img_Door1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapClickEvent, this);
    }

    protected touchTapClickEvent(event:egret.TouchEvent):void
    {   
        this.img_Door1.visible = false
        this.img_Door2.visible = true
        
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "click", "1");
    }

    public execMessage(data:any):void
    {
        super.execMessage(data)

        if (data["click"]){
            this.img_Door1.visible = false
            this.img_Door2.visible = true
        }
    }

}
