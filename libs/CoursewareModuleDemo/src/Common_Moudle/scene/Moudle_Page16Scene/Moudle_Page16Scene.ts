/**
 * 
 */
class Moudle_Page16Scene extends ClockTouchScene {
    static key: string = "Moudle_Page16Scene";

    private hourImg: eui.Image;
    private secImg: eui.Image;

    public constructor() {
        super();
        this.skinName = "Moudle_Page16Scene_Skin";
    }

    public onAdd() : void {
        this.hourImg.rotation = 0;
        this.secImg.rotation = 0;
        this.clockImgArr.push(this.hourImg);
        this.clockImgArr.push(this.secImg);

        super.onAdd();
    }
}