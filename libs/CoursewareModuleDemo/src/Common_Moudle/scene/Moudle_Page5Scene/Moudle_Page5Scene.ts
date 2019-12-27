// from 郑岩
class Moudle_Page5Scene extends ClickItemForShowPhaseScene{

    static key:string = "Moudle_Page5Scene";

    private c1: eui.Rect;
    private c2: eui.Rect;
    private sImg1: eui.Image;
    private arr1: Array<eui.Image>;
    private sImg2: eui.Image;
    private arr2: Array<eui.Image>;

    public constructor() {
        super();
        this.skinName = "Moudle_Page5Scene_Skin";
        this.arr1 = new Array<eui.Image>();
        this.arr2 = new Array<eui.Image>();
    }

    /** 每次进入 */
    public onAdd(): void {
        this.clickItemArr.push(this.c1);
        this.clickItemArr.push(this.c2);
        
        this.arr1.push(this.sImg1);
        this.arr2.push(this.sImg2);
        this.showPhaseArr.push(this.arr1);
        this.showPhaseArr.push(this.arr2);
        super.initScene();
    }
}
