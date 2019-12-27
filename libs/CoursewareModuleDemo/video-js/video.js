require(['zepto','video'], function (zepto,video) {
    var editback = {
        param:{
            video:''
        },
        init: function () {
            this.video()
        },
        video:function () {
            //console.log(video);
            this.param.video = video('my-player',{
                controls : true,
                poster:imgUrl+'/img/news.png'
            })
        }
    };
    $ (function () {
        editback.init();
    })
});