class Moudle_Page13Scene extends OnlySelectedScene {

    static key:string = "Moudle_Page13Scene";

    private img1: eui.Image;
    private img2: eui.Image;
    private img3: eui.Image;
    private img4: eui.Image;
    private img5: eui.Image;
    private img6: eui.Image;
    private img7: eui.Image;
    private img8: eui.Image;
    private img9: eui.Image;
    private img10: eui.Image;

    private _arr1: Array<eui.Image>;
    private _arr2: Array<eui.Image>;
    private _arrList: Array<Array<eui.Image>>;

    public constructor() {
        super();
        this.skinName = "Moudle_Page13Scene_Skin";

        this._arr1 = new Array<eui.Image>();
        this._arr2 = new Array<eui.Image>();
        this._arrList = new Array<Array<eui.Image>>();
    }

    /** 每次进入 */
    public onAdd(): void {
        this._arr1.push(this.img1);
        this._arr1.push(this.img3);
        this._arr1.push(this.img5);
        this._arr1.push(this.img7);
        this._arr1.push(this.img9);
        this._arr2.push(this.img2);
        this._arr2.push(this.img4);
        this._arr2.push(this.img6);
        this._arr2.push(this.img8);
        this._arr2.push(this.img10);
        this._arrList.push(this._arr1);
        this._arrList.push(this._arr2);

        super.initScene(this._arrList);
    }
}
