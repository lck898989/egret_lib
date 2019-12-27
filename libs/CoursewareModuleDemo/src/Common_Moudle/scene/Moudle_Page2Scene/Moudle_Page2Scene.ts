// from 刘斌毅
// need: this.ImgList 
//       页面需要包含名称为 btnNext 的图片
// desc: 点击按钮 下一页 this.ImgList 根据索引 按顺序显示
//       如需要 个性显示 请重写 refreshStateView 方法
class Moudle_Page2Scene extends OnlyClickForBtnScene{

    static key:string = "Moudle_Page2Scene";

    private img_1:eui.Image;

    public constructor() {
        super();
        this.skinName = "Moudle_Page2Scene_Skin";
    }

    /** 每次进入 */
    public onAdd(): void {
        this.ImgList.push(this.img_1)
        super.onAdd()
    }

}
