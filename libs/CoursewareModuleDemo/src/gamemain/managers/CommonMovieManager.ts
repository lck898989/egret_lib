/*
  * 等待界面
  */

class  CommonMovieManager {

    public static getInstance(): CommonMovieManager {
        if (!CommonMovieManager.instance) {
            CommonMovieManager.instance = new CommonMovieManager();
        }
        return CommonMovieManager.instance;
    }

    private static instance: CommonMovieManager;


    constructor() {
        lcp.LListener.getInstance().addEventListener("show_commonmovie", this.showCommonMovie, this);
    }
    
    public showCommonMovie(e): void {
        if(e && e.param) {
            GM.dlg.popDlg(CommonMovieDlg, "", null, e.param);
        }
    }
}
