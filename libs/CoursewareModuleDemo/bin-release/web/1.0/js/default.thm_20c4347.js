
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/gamemain/game_skins/ClassOverScene/ClassOverScene_Skin.exml'] = window.ClassOverScene_Skin = (function (_super) {
	__extends(ClassOverScene_Skin, _super);
	function ClassOverScene_Skin() {
		_super.call(this);
		this.skinParts = ["img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ClassOverScene_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img10_i(),this.img11_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "completescene_bg_png";
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_pen_png";
		t.x = 0;
		t.y = 341.5;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text1_png";
		t.x = 434.5;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text2_png";
		t.x = 711.5;
		t.y = 0;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text3_png";
		t.x = 990.02;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text4_png";
		t.x = 58.99;
		t.y = 0;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text5_png";
		t.x = 250.99;
		t.y = 0;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text6_png";
		t.x = 470.99;
		t.y = 0;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text7_png";
		t.x = 681.5;
		t.y = 0;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text8_png";
		t.x = 882.5;
		t.y = 0;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text9_png";
		t.x = 1086.02;
		t.y = 0;
		return t;
	};
	_proto.img10_i = function () {
		var t = new eui.Image();
		this.img10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text10_png";
		t.x = 1266.02;
		t.y = 0;
		return t;
	};
	_proto.img11_i = function () {
		var t = new eui.Image();
		this.img11 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text11_png";
		t.x = 1466.99;
		t.y = 0;
		return t;
	};
	return ClassOverScene_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/ClassOverScene/ClassSumUpScene_Skin.exml'] = window.ClassSumUpScene_Skin = (function (_super) {
	__extends(ClassSumUpScene_Skin, _super);
	function ClassSumUpScene_Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ClassSumUpScene_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "classsum_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ClassSumUpScene_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/CommonDlg/Dlg_CommonMovie_Skin.exml'] = window.Dlg_CommonMovie_Skin = (function (_super) {
	__extends(Dlg_CommonMovie_Skin, _super);
	function Dlg_CommonMovie_Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Dlg_CommonMovie_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 1348;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1562;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Dlg_CommonMovie_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/DolphinIsland/DolphinIsland_Skin.exml'] = window.DolphinIsland_Skin = (function (_super) {
	__extends(DolphinIsland_Skin, _super);
	function DolphinIsland_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","dragonGroup","pageImg1","pageImg3","pageImg2","pageImg4","pageImg5","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = DolphinIsland_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.dragonGroup_i(),this.pageImg1_i(),this.pageImg3_i(),this.pageImg2_i(),this.pageImg4_i(),this.pageImg5_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.source = "dolphinIsland_1_07_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dragonGroup_i = function () {
		var t = new eui.Group();
		this.dragonGroup = t;
		t.x = 1082;
		t.y = 778;
		return t;
	};
	_proto.pageImg1_i = function () {
		var t = new eui.Image();
		this.pageImg1 = t;
		t.anchorOffsetX = 555.5;
		t.anchorOffsetY = 223;
		t.source = "dolphinIsland_1_02_png";
		t.x = 495;
		t.y = 230;
		return t;
	};
	_proto.pageImg3_i = function () {
		var t = new eui.Image();
		this.pageImg3 = t;
		t.anchorOffsetX = 656;
		t.anchorOffsetY = 310;
		t.source = "dolphinIsland_1_03_png";
		t.x = 475;
		t.y = 650;
		return t;
	};
	_proto.pageImg2_i = function () {
		var t = new eui.Image();
		this.pageImg2 = t;
		t.anchorOffsetX = 555.5;
		t.anchorOffsetY = 223;
		t.source = "dolphinIsland_1_04_png";
		t.x = 1210;
		t.y = 370;
		return t;
	};
	_proto.pageImg4_i = function () {
		var t = new eui.Image();
		this.pageImg4 = t;
		t.anchorOffsetX = 656;
		t.anchorOffsetY = 310;
		t.source = "dolphinIsland_1_05_png";
		t.x = 1395;
		t.y = 760;
		return t;
	};
	_proto.pageImg5_i = function () {
		var t = new eui.Image();
		this.pageImg5 = t;
		t.anchorOffsetX = 555.5;
		t.anchorOffsetY = 223;
		t.source = "dolphinIsland_1_06_png";
		t.x = 739;
		t.y = 1070;
		return t;
	};
	return DolphinIsland_Skin;
})(eui.Skin);