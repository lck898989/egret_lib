/**
 * by ֣��
 * ��Ҫ��ʾѡ��״̬�ĳ���
 * @param arr : Array<Array<eui.Image>> 
 * ������һ������ʱ��ֻ��ʾ���ѡ��״̬
 * ���������ʱ�������ͬ����״̬����ͬһ������ ����: A B  �ֱ������������
 */
class OnlySelectedSceneDemo extends OnlySelectedScene {

    static key:string = "Page1Scene";

    private img1: eui.Image;
    private img2: eui.Image;

    private _arr1: Array<eui.Image>;
    private _arr2: Array<eui.Image>;
    private _arrList: Array<Array<eui.Image>>;

    public constructor() {
        super();
        this.skinName = "Page11Scene_Skin";

        this._arr1 = new Array<eui.Image>();
        this._arr2 = new Array<eui.Image>();
        this._arrList = new Array<Array<eui.Image>>();
    }

    /** ÿ�ν��� */
    public onAdd(): void {
        this._arr1.push(this.img1);
        this._arr2.push(this.img2);
        this._arrList.push(this._arr1);
        this._arrList.push(this._arr2);

        super.initScene(this._arrList);
    }

    /** ��������Ƴ������Ĵ��� **/
    public onDestroy(): void {

    }
}
