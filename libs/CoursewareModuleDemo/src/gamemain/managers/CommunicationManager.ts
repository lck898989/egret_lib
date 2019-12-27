/**
 *
 */
class CommunicationManager {

    public static getInstance(): CommunicationManager {
        if (!CommunicationManager.instance) {
            CommunicationManager.instance = new CommunicationManager();
        }
        return CommunicationManager.instance;
    }

    private static instance: CommunicationManager;
    public log: any = "";

    constructor() {
        lcp.LListener.getInstance().addEventListener("tky_topage", this.goPage, this);
        lcp.LListener.getInstance().addEventListener("tky_makepost", this.tkyMakePostAction, this);
    }

    /** 添加侦听 */
    public addListener(listenerType: string): void {
        window.addEventListener(listenerType, GM.execMessage, false);
    }

    /** 前往指定页面 */
    public goTargetPageHandle(pageIndex: number): void {
        if (pageIndex <= 0) {
            Log.trace("com", "找不到指定页面");
            return;
        }

    switch (pageIndex) {
        case 2:
            GM.scene.runScene(Moudle_Page1Scene, "Moudle_page_scene1");
            this.loadNextPage("Moudle_page_scene2");
            break;
        case 3:
            GM.scene.runScene(Moudle_Page2Scene, "Moudle_page_scene2");
            this.loadNextPage("Moudle_page_scene3");
            break;
        case 4:
            GM.scene.runScene(Moudle_Page3Scene, "Moudle_page_scene3");
            this.loadNextPage("Moudle_page_scene4");
            break;
        case 5:
            GM.scene.runScene(Moudle_Page4Scene, "Moudle_page_scene4");
            this.loadNextPage("Moudle_page_scene5");
            break;
        case 6:
            GM.scene.runScene(Moudle_Page5Scene, "Moudle_page_scene5");
            this.loadNextPage("Moudle_page_scene6");
            break;
        case 7:
            GM.scene.runScene(Moudle_Page6Scene, "Moudle_page_scene6");
            this.loadNextPage("Moudle_page_scene7");
            break;
        case 8:
            GM.scene.runScene(Moudle_Page7Scene, "Moudle_page_scene7");
            this.loadNextPage("Moudle_page_scene8");
            break;
        case 9:
            GM.scene.runScene(Moudle_Page8Scene, "Moudle_page_scene8");
            this.loadNextPage("Moudle_page_scene9");
            break;
        case 10:
            GM.scene.runScene(Moudle_Page9Scene, "Moudle_page_scene9");
            this.loadNextPage("Moudle_page_scene10");
            break;
        case 11:
            GM.scene.runScene(Moudle_Page10Scene, "Moudle_page_scene10");
            this.loadNextPage("Moudle_page_scene11");
            break;
        case 12:
            GM.scene.runScene(Moudle_Page11Scene, "Moudle_page_scene11");
            this.loadNextPage("Moudle_page_scene12");
            break;
        case 13:
            GM.scene.runScene(Moudle_Page12Scene, "Moudle_page_scene12");
            this.loadNextPage("Moudle_page_scene13");
            break;
        case 14:
            GM.scene.runScene(Moudle_Page13Scene, "Moudle_page_scene13");
            this.loadNextPage("Moudle_page_scene14");
            break;
        case 15:
            GM.scene.runScene(Moudle_Page14Scene, "Moudle_page_scene14");
            this.loadNextPage("Moudle_page_scene15");
            break;
        case 16:
            GM.scene.runScene(Moudle_Page15Scene, "Moudle_page_scene15");
            this.loadNextPage("Moudle_page_scene16");
            break;
        case 17:
            GM.scene.runScene(Moudle_Page16Scene, "Moudle_page_scene16");
            break;

        case 1:
            GM.scene.runScene(DolphinIsland, "dolphinIsland");
            this.loadNextPage("Moudle_page_scene1");
            break;
        }
        Log.trace("com", "已经跳往指定页面,page=" + pageIndex);
    }

    /** 发送消息 */
    public makePostMessage(methodType: string, keyName: string, value: any): void {
        // 格式{"method":methodType, "keyName":value};
        // 调用例子 CommunicationManager.getInstance().makePostMessage("onPagenum", "totalPages", 17);
        const obj: Object = new Object();
        obj["method"] = methodType;
        obj[keyName] = value;
        Log.trace("com", "obj");
        window.parent.postMessage(JSON.stringify(obj), "*");
    }

    /** 接受通知 并 处理发送消息 */
    public tkyMakePostAction(e): void {
        Log.trace("msg", e.param);
        const _obj = e.param;
        this.makePostMessage(_obj.method, _obj.keyName, _obj.value);
    }    

    private goPage(e): void {
        Log.trace("msg", e.param);
        const page = parseInt(e.param);
        this.goTargetPageHandle(page);
    }

    /** 加载下一页 */
    private loadNextPage(nextGroup: string): void {
        ResLoad.getInstance().LoadRes(nextGroup);
    }
}
