var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 */
var CommunicationManager = (function () {
    function CommunicationManager() {
        this.log = "";
        lcp.LListener.getInstance().addEventListener("tky_topage", this.goPage, this);
        lcp.LListener.getInstance().addEventListener("tky_makepost", this.tkyMakePostAction, this);
    }
    CommunicationManager.getInstance = function () {
        if (!CommunicationManager.instance) {
            CommunicationManager.instance = new CommunicationManager();
        }
        return CommunicationManager.instance;
    };
    /** 添加侦听 */
    CommunicationManager.prototype.addListener = function (listenerType) {
        window.addEventListener(listenerType, GM.execMessage, false);
    };
    /** 前往指定页面 */
    CommunicationManager.prototype.goTargetPageHandle = function (pageIndex) {
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
    };
    /** 发送消息 */
    CommunicationManager.prototype.makePostMessage = function (methodType, keyName, value) {
        // 格式{"method":methodType, "keyName":value};
        // 调用例子 CommunicationManager.getInstance().makePostMessage("onPagenum", "totalPages", 17);
        var obj = new Object();
        obj["method"] = methodType;
        obj[keyName] = value;
        Log.trace("com", "obj");
        window.parent.postMessage(JSON.stringify(obj), "*");
    };
    /** 接受通知 并 处理发送消息 */
    CommunicationManager.prototype.tkyMakePostAction = function (e) {
        Log.trace("msg", e.param);
        var _obj = e.param;
        this.makePostMessage(_obj.method, _obj.keyName, _obj.value);
    };
    CommunicationManager.prototype.goPage = function (e) {
        Log.trace("msg", e.param);
        var page = parseInt(e.param);
        this.goTargetPageHandle(page);
    };
    /** 加载下一页 */
    CommunicationManager.prototype.loadNextPage = function (nextGroup) {
        ResLoad.getInstance().LoadRes(nextGroup);
    };
    return CommunicationManager;
}());
__reflect(CommunicationManager.prototype, "CommunicationManager");
//# sourceMappingURL=CommunicationManager.js.map