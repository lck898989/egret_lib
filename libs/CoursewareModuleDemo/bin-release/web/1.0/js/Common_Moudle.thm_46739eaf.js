
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
                generateEUI.skins = {};generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page10Scene/Moudle_Page10Scene_Skin.exml'] = window.Moudle_Page10Scene_Skin = (function (_super) {
	__extends(Moudle_Page10Scene_Skin, _super);
	function Moudle_Page10Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","rect_1","img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8","img_9","img_10","img_11","img_Door1","img_Door2","btnReset","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page10Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.rect_1_i(),this.img_1_i(),this.img_2_i(),this.img_3_i(),this.img_4_i(),this.img_5_i(),this.img_6_i(),this.img_7_i(),this.img_8_i(),this.img_9_i(),this.img_10_i(),this.img_11_i(),this.img_Door1_i(),this.img_Door2_i(),this.btnReset_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg10_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rect_1_i = function () {
		var t = new eui.Rect();
		this.rect_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 371.52;
		t.strokeAlpha = 0;
		t.width = 1449.58;
		t.x = 3.59;
		t.y = 917.4;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.source = "Moudle_big_page_scene10_json.4_1";
		t.x = 466.58;
		t.y = 156.78;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.source = "Moudle_big_page_scene10_json.4_2";
		t.x = 582.08;
		t.y = 225.7;
		return t;
	};
	_proto.img_3_i = function () {
		var t = new eui.Image();
		this.img_3 = t;
		t.source = "Moudle_big_page_scene10_json.4_3";
		t.x = 840.27;
		t.y = 259.03;
		return t;
	};
	_proto.img_4_i = function () {
		var t = new eui.Image();
		this.img_4 = t;
		t.source = "Moudle_big_page_scene10_json.4_4";
		t.x = 932.76;
		t.y = 256;
		return t;
	};
	_proto.img_5_i = function () {
		var t = new eui.Image();
		this.img_5 = t;
		t.source = "Moudle_big_page_scene10_json.4_5";
		t.x = 668.53;
		t.y = 246.91;
		return t;
	};
	_proto.img_6_i = function () {
		var t = new eui.Image();
		this.img_6 = t;
		t.source = "Moudle_big_page_scene10_json.4_6";
		t.x = 755.72;
		t.y = 256;
		return t;
	};
	_proto.img_7_i = function () {
		var t = new eui.Image();
		this.img_7 = t;
		t.anchorOffsetX = -3.03;
		t.anchorOffsetY = -12.12;
		t.source = "Moudle_big_page_scene10_json.4_7";
		t.x = 1011.55;
		t.y = 240.84;
		return t;
	};
	_proto.img_8_i = function () {
		var t = new eui.Image();
		this.img_8 = t;
		t.source = "Moudle_big_page_scene10_json.4_8";
		t.x = 436.28;
		t.y = 463.16;
		return t;
	};
	_proto.img_9_i = function () {
		var t = new eui.Image();
		this.img_9 = t;
		t.source = "Moudle_big_page_scene10_json.4_9";
		t.x = 585.67;
		t.y = 460.13;
		return t;
	};
	_proto.img_10_i = function () {
		var t = new eui.Image();
		this.img_10 = t;
		t.source = "Moudle_big_page_scene10_json.4_10";
		t.x = 761.48;
		t.y = 454.25;
		return t;
	};
	_proto.img_11_i = function () {
		var t = new eui.Image();
		this.img_11 = t;
		t.source = "Moudle_big_page_scene10_json.4_11";
		t.x = 971.57;
		t.y = 448.18;
		return t;
	};
	_proto.img_Door1_i = function () {
		var t = new eui.Image();
		this.img_Door1 = t;
		t.source = "Moudle_big_page_scene10_json.4_12";
		t.x = 402.82;
		t.y = 96.18;
		return t;
	};
	_proto.img_Door2_i = function () {
		var t = new eui.Image();
		this.img_Door2 = t;
		t.source = "Moudle_big_page_scene10_json.4_14";
		t.x = 1189;
		t.y = -53.72;
		return t;
	};
	_proto.btnReset_i = function () {
		var t = new eui.Image();
		this.btnReset = t;
		t.source = "big_loading_json.update_png";
		t.x = 1498;
		t.y = 1270.64;
		return t;
	};
	return Moudle_Page10Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page11Scene/Moudle_Page11Scene_Skin.exml'] = window.Moudle_Page11Scene_Skin = (function (_super) {
	__extends(Moudle_Page11Scene_Skin, _super);
	function Moudle_Page11Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","rect_1","rect_2","rect_3","rect_4","img_1","img_2","img_3","img_4","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page11Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.rect_1_i(),this.rect_2_i(),this.rect_3_i(),this.rect_4_i(),this.img_1_i(),this.img_2_i(),this.img_3_i(),this.img_4_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg11_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rect_1_i = function () {
		var t = new eui.Rect();
		this.rect_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 362.42;
		t.strokeAlpha = 0;
		t.width = 359.39;
		t.x = 424.64;
		t.y = 173.4;
		return t;
	};
	_proto.rect_2_i = function () {
		var t = new eui.Rect();
		this.rect_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 350.3;
		t.strokeAlpha = 0;
		t.width = 320;
		t.x = 695.21;
		t.y = 489.14;
		return t;
	};
	_proto.rect_3_i = function () {
		var t = new eui.Rect();
		this.rect_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 350.3;
		t.strokeAlpha = 0;
		t.width = 262.42;
		t.x = 223.74;
		t.y = 804.31;
		return t;
	};
	_proto.rect_4_i = function () {
		var t = new eui.Rect();
		this.rect_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 353.33;
		t.strokeAlpha = 0;
		t.width = 262.43;
		t.x = 486.16;
		t.y = 801.28;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.source = "Moudle_big_page_scene11_json.9_1";
		t.x = 1075.86;
		t.y = 214.02;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.source = "Moudle_big_page_scene11_json.9_2";
		t.x = 1315.15;
		t.y = 210.99;
		return t;
	};
	_proto.img_3_i = function () {
		var t = new eui.Image();
		this.img_3 = t;
		t.source = "Moudle_big_page_scene11_json.9_3";
		t.x = 1087.98;
		t.y = 674;
		return t;
	};
	_proto.img_4_i = function () {
		var t = new eui.Image();
		this.img_4 = t;
		t.source = "Moudle_big_page_scene11_json.9_4";
		t.x = 1321.21;
		t.y = 674;
		return t;
	};
	return Moudle_Page11Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page12Scene/Moudle_Page12Scene_Skin.exml'] = window.Moudle_Page12Scene_Skin = (function (_super) {
	__extends(Moudle_Page12Scene_Skin, _super);
	function Moudle_Page12Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img_title","img_left_bg","img_right_bg","img_left_1","img_right_1","img_target_1","img_target_2","img_target_3","btnMerge","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page12Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img_title_i(),this.img_left_bg_i(),this.img_right_bg_i(),this.img_left_1_i(),this.img_right_1_i(),this.img_target_1_i(),this.img_target_2_i(),this.img_target_3_i(),this.btnMerge_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg12_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_title_i = function () {
		var t = new eui.Image();
		this.img_title = t;
		t.source = "Moudle_big_page_scene12_json.page_obj_9_1";
		t.x = 578.6;
		t.y = 188;
		return t;
	};
	_proto.img_left_bg_i = function () {
		var t = new eui.Image();
		this.img_left_bg = t;
		t.source = "Moudle_big_page_scene12_json.page_obj_9_5";
		t.x = 72;
		t.y = 316;
		return t;
	};
	_proto.img_right_bg_i = function () {
		var t = new eui.Image();
		this.img_right_bg = t;
		t.source = "Moudle_big_page_scene12_json.page_obj_9_6";
		t.x = 814;
		t.y = 316;
		return t;
	};
	_proto.img_left_1_i = function () {
		var t = new eui.Image();
		this.img_left_1 = t;
		t.source = "Moudle_big_page_scene12_json.page_obj_9_7";
		t.x = 314;
		t.y = 508;
		return t;
	};
	_proto.img_right_1_i = function () {
		var t = new eui.Image();
		this.img_right_1 = t;
		t.source = "Moudle_big_page_scene12_json.page_obj_9_8";
		t.x = 1041;
		t.y = 496;
		return t;
	};
	_proto.img_target_1_i = function () {
		var t = new eui.Image();
		this.img_target_1 = t;
		t.source = "Moudle_big_page_scene12_json.page_obj_9_4";
		t.x = 719;
		t.y = 506;
		return t;
	};
	_proto.img_target_2_i = function () {
		var t = new eui.Image();
		this.img_target_2 = t;
		t.source = "Moudle_big_page_scene12_json.page_obj_9_2";
		t.x = 404;
		t.y = 453.5;
		return t;
	};
	_proto.img_target_3_i = function () {
		var t = new eui.Image();
		this.img_target_3 = t;
		t.source = "Moudle_big_page_scene12_json.page_obj_9_3";
		t.x = 1050;
		t.y = 453.5;
		return t;
	};
	_proto.btnMerge_i = function () {
		var t = new eui.Image();
		this.btnMerge = t;
		t.source = "big_loading_json.clickbtn_png";
		t.x = 1310;
		t.y = 1154;
		return t;
	};
	return Moudle_Page12Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page13Scene/Moudle_Page13Scene_Skin.exml'] = window.Moudle_Page13Scene_Skin = (function (_super) {
	__extends(Moudle_Page13Scene_Skin, _super);
	function Moudle_Page13Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page13Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img10_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg13_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.source = "Moudle_scene13_json.no_png";
		t.x = 1190.79;
		t.y = 309.91;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.source = "Moudle_scene13_json.yes_png";
		t.x = 1337;
		t.y = 310;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.source = "Moudle_scene13_json.no_png";
		t.x = 1190.79;
		t.y = 490;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.source = "Moudle_scene13_json.yes_png";
		t.x = 1337;
		t.y = 490;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.source = "Moudle_scene13_json.no_png";
		t.x = 1190.79;
		t.y = 670;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.source = "Moudle_scene13_json.yes_png";
		t.x = 1337;
		t.y = 672;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.source = "Moudle_scene13_json.no_png";
		t.x = 1192.79;
		t.y = 840;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.source = "Moudle_scene13_json.yes_png";
		t.x = 1339;
		t.y = 842;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.source = "Moudle_scene13_json.no_png";
		t.x = 1190.79;
		t.y = 996;
		return t;
	};
	_proto.img10_i = function () {
		var t = new eui.Image();
		this.img10 = t;
		t.source = "Moudle_scene13_json.yes_png";
		t.x = 1339;
		t.y = 996;
		return t;
	};
	return Moudle_Page13Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page14Scene/Moudle_Page14Scene_Skin.exml'] = window.Moudle_Page14Scene_Skin = (function (_super) {
	__extends(Moudle_Page14Scene_Skin, _super);
	function Moudle_Page14Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","rect_1","rect_2","img_tp1_1","img_tp1_2","img_tp1_3","img_tp1_4","img_tp1_5","img_tp2_1","img_tp2_2","img_tp2_3","img_tp2_4","img_tp2_6","img_tp2_7","img_tp2_8","img_tp2_9","img_tp2_5","img_1","img_2","img_3","img_4","img_5","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page14Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.rect_1_i(),this.rect_2_i(),this.img_tp1_1_i(),this.img_tp1_2_i(),this.img_tp1_3_i(),this.img_tp1_4_i(),this.img_tp1_5_i(),this.img_tp2_1_i(),this.img_tp2_2_i(),this.img_tp2_3_i(),this.img_tp2_4_i(),this.img_tp2_6_i(),this.img_tp2_7_i(),this.img_tp2_8_i(),this.img_tp2_9_i(),this.img_tp2_5_i(),this.img_1_i(),this.img_2_i(),this.img_3_i(),this.img_4_i(),this.img_5_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg14_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rect_1_i = function () {
		var t = new eui.Rect();
		this.rect_1 = t;
		t.anchorOffsetX = 128.24;
		t.anchorOffsetY = 141.42;
		t.fillAlpha = 0;
		t.height = 138.18;
		t.strokeAlpha = 0;
		t.width = 253.33;
		t.x = 843.09;
		t.y = 681.27;
		return t;
	};
	_proto.rect_2_i = function () {
		var t = new eui.Rect();
		this.rect_2 = t;
		t.anchorOffsetX = 128.24;
		t.anchorOffsetY = 141.42;
		t.fillAlpha = 0;
		t.height = 138.18;
		t.strokeAlpha = 0;
		t.width = 253.33;
		t.x = 843.09;
		t.y = 1062.6;
		return t;
	};
	_proto.img_tp1_1_i = function () {
		var t = new eui.Image();
		this.img_tp1_1 = t;
		t.source = "Moudle_big_page_scene14_json.10_02";
		t.x = 502.5;
		t.y = 688.99;
		return t;
	};
	_proto.img_tp1_2_i = function () {
		var t = new eui.Image();
		this.img_tp1_2 = t;
		t.anchorOffsetX = 277;
		t.anchorOffsetY = 39.46;
		t.height = 52.92;
		t.rotation = -12;
		t.source = "Moudle_big_page_scene14_json.10_03";
		t.width = 554;
		t.x = 587;
		t.y = 757.53;
		return t;
	};
	_proto.img_tp1_3_i = function () {
		var t = new eui.Image();
		this.img_tp1_3 = t;
		t.anchorOffsetX = 124;
		t.anchorOffsetY = 87;
		t.source = "Moudle_big_page_scene14_json.10_04";
		t.x = 344;
		t.y = 811.53;
		return t;
	};
	_proto.img_tp1_4_i = function () {
		var t = new eui.Image();
		this.img_tp1_4 = t;
		t.anchorOffsetX = 118;
		t.anchorOffsetY = 80;
		t.source = "Moudle_big_page_scene14_json.10_04";
		t.x = 832.75;
		t.y = 702.34;
		return t;
	};
	_proto.img_tp1_5_i = function () {
		var t = new eui.Image();
		this.img_tp1_5 = t;
		t.anchorOffsetX = 47.5;
		t.anchorOffsetY = 145;
		t.source = "Moudle_big_page_scene14_json.10_01";
		t.x = 338;
		t.y = 813.53;
		return t;
	};
	_proto.img_tp2_1_i = function () {
		var t = new eui.Image();
		this.img_tp2_1 = t;
		t.source = "Moudle_big_page_scene14_json.10_02";
		t.x = 502.5;
		t.y = 1058.54;
		return t;
	};
	_proto.img_tp2_2_i = function () {
		var t = new eui.Image();
		this.img_tp2_2 = t;
		t.anchorOffsetX = 277;
		t.anchorOffsetY = 39.46;
		t.height = 52.92;
		t.rotation = -12;
		t.source = "Moudle_big_page_scene14_json.10_03";
		t.width = 554;
		t.x = 587;
		t.y = 1127.08;
		return t;
	};
	_proto.img_tp2_3_i = function () {
		var t = new eui.Image();
		this.img_tp2_3 = t;
		t.anchorOffsetX = 124;
		t.anchorOffsetY = 87;
		t.source = "Moudle_big_page_scene14_json.10_04";
		t.x = 344;
		t.y = 1181.08;
		return t;
	};
	_proto.img_tp2_4_i = function () {
		var t = new eui.Image();
		this.img_tp2_4 = t;
		t.anchorOffsetX = 118;
		t.anchorOffsetY = 80;
		t.source = "Moudle_big_page_scene14_json.10_04";
		t.x = 832.75;
		t.y = 1071.89;
		return t;
	};
	_proto.img_tp2_6_i = function () {
		var t = new eui.Image();
		this.img_tp2_6 = t;
		t.anchorOffsetX = 86.89;
		t.anchorOffsetY = 232.88;
		t.source = "Moudle_big_page_scene14_json.10_01";
		t.x = 340.98;
		t.y = 1188.18;
		return t;
	};
	_proto.img_tp2_7_i = function () {
		var t = new eui.Image();
		this.img_tp2_7 = t;
		t.anchorOffsetX = -4.02;
		t.anchorOffsetY = 223.79;
		t.source = "Moudle_big_page_scene14_json.10_01";
		t.x = 336.95;
		t.y = 1185.59;
		return t;
	};
	_proto.img_tp2_8_i = function () {
		var t = new eui.Image();
		this.img_tp2_8 = t;
		t.anchorOffsetX = 120.23;
		t.anchorOffsetY = 145;
		t.source = "Moudle_big_page_scene14_json.10_01";
		t.x = 334.17;
		t.y = 1178.86;
		return t;
	};
	_proto.img_tp2_9_i = function () {
		var t = new eui.Image();
		this.img_tp2_9 = t;
		t.anchorOffsetX = -31.29;
		t.anchorOffsetY = 138.94;
		t.source = "Moudle_big_page_scene14_json.10_01";
		t.x = 337.71;
		t.y = 1181.89;
		return t;
	};
	_proto.img_tp2_5_i = function () {
		var t = new eui.Image();
		this.img_tp2_5 = t;
		t.anchorOffsetX = 47.5;
		t.anchorOffsetY = 145;
		t.source = "Moudle_big_page_scene14_json.10_01";
		t.x = 338;
		t.y = 1183.08;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 88;
		t.source = "Moudle_big_page_scene14_json.10_10";
		t.x = 1299.52;
		t.y = 430.46;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 87.5;
		t.source = "Moudle_big_page_scene14_json.10_09";
		t.x = 1299.52;
		t.y = 610.71;
		return t;
	};
	_proto.img_3_i = function () {
		var t = new eui.Image();
		this.img_3 = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 88;
		t.source = "Moudle_big_page_scene14_json.10_08";
		t.x = 1299.52;
		t.y = 791.63;
		return t;
	};
	_proto.img_4_i = function () {
		var t = new eui.Image();
		this.img_4 = t;
		t.anchorOffsetX = 53.5;
		t.anchorOffsetY = 87.5;
		t.source = "Moudle_big_page_scene14_json.10_07";
		t.x = 1294.52;
		t.y = 971.04;
		return t;
	};
	_proto.img_5_i = function () {
		var t = new eui.Image();
		this.img_5 = t;
		t.anchorOffsetX = 53;
		t.anchorOffsetY = 87.5;
		t.source = "Moudle_big_page_scene14_json.10_06";
		t.x = 1295.52;
		t.y = 1150.79;
		return t;
	};
	return Moudle_Page14Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page15Scene/Moudle_Page15Scene_Skin.exml'] = window.Moudle_Page15Scene_Skin = (function (_super) {
	__extends(Moudle_Page15Scene_Skin, _super);
	function Moudle_Page15Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","rect_left","rect_right","img_left1","img_left2","img_left3","img_right1","img_right2","img_right3","btnReset","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page15Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.rect_left_i(),this.rect_right_i(),this.img_left1_i(),this.img_left2_i(),this.img_left3_i(),this.img_right1_i(),this.img_right2_i(),this.img_right3_i(),this.btnReset_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg15_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rect_left_i = function () {
		var t = new eui.Rect();
		this.rect_left = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 416.97;
		t.strokeAlpha = 0;
		t.width = 810.91;
		t.x = 0;
		t.y = 927.27;
		return t;
	};
	_proto.rect_right_i = function () {
		var t = new eui.Rect();
		this.rect_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 920;
		t.strokeAlpha = 0;
		t.width = 750.3;
		t.x = 810.91;
		t.y = 3.03;
		return t;
	};
	_proto.img_left1_i = function () {
		var t = new eui.Image();
		this.img_left1 = t;
		t.anchorOffsetX = 143;
		t.anchorOffsetY = 116;
		t.source = "Moudle_big_page_scene15_json.page_obj_12_4";
		t.x = 220;
		t.y = 281;
		return t;
	};
	_proto.img_left2_i = function () {
		var t = new eui.Image();
		this.img_left2 = t;
		t.anchorOffsetX = 108.5;
		t.anchorOffsetY = 116;
		t.source = "Moudle_big_page_scene15_json.page_obj_12_5";
		t.x = 253.33;
		t.y = 531;
		return t;
	};
	_proto.img_left3_i = function () {
		var t = new eui.Image();
		this.img_left3 = t;
		t.anchorOffsetX = 108.5;
		t.anchorOffsetY = 116.5;
		t.source = "Moudle_big_page_scene15_json.page_obj_12_6";
		t.x = 253.33;
		t.y = 781.41;
		return t;
	};
	_proto.img_right1_i = function () {
		var t = new eui.Image();
		this.img_right1 = t;
		t.anchorOffsetX = 134;
		t.anchorOffsetY = 64;
		t.source = "Moudle_big_page_scene15_json.page_obj_12_1";
		t.x = 1010.24;
		t.y = 1038.42;
		return t;
	};
	_proto.img_right2_i = function () {
		var t = new eui.Image();
		this.img_right2 = t;
		t.anchorOffsetX = 125.5;
		t.anchorOffsetY = 62;
		t.source = "Moudle_big_page_scene15_json.page_obj_12_2";
		t.x = 1320.06;
		t.y = 1038.42;
		return t;
	};
	_proto.img_right3_i = function () {
		var t = new eui.Image();
		this.img_right3 = t;
		t.anchorOffsetX = 147.5;
		t.anchorOffsetY = 70.5;
		t.source = "Moudle_big_page_scene15_json.page_obj_12_3";
		t.x = 1147.27;
		t.y = 1192.5;
		return t;
	};
	_proto.btnReset_i = function () {
		var t = new eui.Image();
		this.btnReset = t;
		t.source = "big_loading_json.update_png";
		t.x = 1501.21;
		t.y = 1284.24;
		return t;
	};
	return Moudle_Page15Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page16Scene/Moudle_Page16Scene_Skin.exml'] = window.Moudle_Page16Scene_Skin = (function (_super) {
	__extends(Moudle_Page16Scene_Skin, _super);
	function Moudle_Page16Scene_Skin() {
		_super.call(this);
		this.skinParts = ["hourImg","secImg","group"];
		
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page16Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this._Image1_i(),this.hourImg_i(),this.secImg_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Moudle_page_scene_bg16_jpg";
		return t;
	};
	_proto.hourImg_i = function () {
		var t = new eui.Image();
		this.hourImg = t;
		t.anchorOffsetX = 28;
		t.rotation = 0;
		t.scaleY = -1;
		t.source = "hour_png";
		t.x = 825.24;
		t.y = 526.47;
		return t;
	};
	_proto.secImg_i = function () {
		var t = new eui.Image();
		this.secImg = t;
		t.anchorOffsetX = 27.5;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleY = -1;
		t.source = "sec_png";
		t.x = 825.74;
		t.y = 525.44;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 27.5;
		t.anchorOffsetY = 27.5;
		t.source = "center_png";
		t.touchEnabled = false;
		t.x = 825.74;
		t.y = 525.93;
		return t;
	};
	return Moudle_Page16Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page1Scene/Moudle_Page1Scene_Skin.exml'] = window.Moudle_Page1Scene_Skin = (function (_super) {
	__extends(Moudle_Page1Scene_Skin, _super);
	function Moudle_Page1Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img_1","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page1Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img_1_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.source = "Moudle_big_page_scene2_json.14_1";
		t.x = 530.66;
		t.y = 240.5;
		return t;
	};
	return Moudle_Page1Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page2Scene/Moudle_Page2Scene_Skin.exml'] = window.Moudle_Page2Scene_Skin = (function (_super) {
	__extends(Moudle_Page2Scene_Skin, _super);
	function Moudle_Page2Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img_1","btnNext","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page2Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img_1_i(),this.btnNext_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg2_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.name = "img_1";
		t.source = "Moudle_big_page_scene2_json.14_1";
		t.x = 526.79;
		t.y = 240.5;
		return t;
	};
	_proto.btnNext_i = function () {
		var t = new eui.Image();
		this.btnNext = t;
		t.source = "big_loading_json.clickbtn_png";
		t.x = 1471;
		t.y = 1257;
		return t;
	};
	return Moudle_Page2Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page3Scene/Moudle_Page3Scene_Skin.exml'] = window.Moudle_Page3Scene_Skin = (function (_super) {
	__extends(Moudle_Page3Scene_Skin, _super);
	function Moudle_Page3Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img_1","img_2","img_3","rect_1","rect_2","rect_3","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page3Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img_1_i(),this.img_2_i(),this.img_3_i(),this.rect_1_i(),this.rect_2_i(),this.rect_3_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg3_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.source = "Moudle_big_page_scene3_json.page_obj_15_2";
		t.x = 194.03;
		t.y = 200;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.source = "Moudle_big_page_scene3_json.page_obj_15_1";
		t.x = 921.06;
		t.y = 222.97;
		return t;
	};
	_proto.img_3_i = function () {
		var t = new eui.Image();
		this.img_3 = t;
		t.source = "Moudle_big_page_scene3_json.page_obj_15_2";
		t.x = 176.07;
		t.y = 659.76;
		return t;
	};
	_proto.rect_1_i = function () {
		var t = new eui.Rect();
		this.rect_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 393.76;
		t.strokeAlpha = 0;
		t.width = 662.3;
		t.x = 194.03;
		t.y = 201;
		return t;
	};
	_proto.rect_2_i = function () {
		var t = new eui.Rect();
		this.rect_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 553.76;
		t.strokeAlpha = 0;
		t.width = 518.3;
		t.x = 921.06;
		t.y = 222.97;
		return t;
	};
	_proto.rect_3_i = function () {
		var t = new eui.Rect();
		this.rect_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 345.76;
		t.strokeAlpha = 0;
		t.width = 694.3;
		t.x = 162.42;
		t.y = 674;
		return t;
	};
	return Moudle_Page3Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page4Scene/Moudle_Page4Scene_Skin.exml'] = window.Moudle_Page4Scene_Skin = (function (_super) {
	__extends(Moudle_Page4Scene_Skin, _super);
	function Moudle_Page4Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8","img_9","btnReset","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page4Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img_1_i(),this.img_2_i(),this.img_3_i(),this.img_4_i(),this.img_5_i(),this.img_6_i(),this.img_7_i(),this.img_8_i(),this.img_9_i(),this.btnReset_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg4_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.source = "Moudle_big_page_scene4_json.11_1";
		t.x = 439.97;
		t.y = 179;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.source = "Moudle_big_page_scene4_json.11_2";
		t.x = 711.5;
		t.y = 179;
		return t;
	};
	_proto.img_3_i = function () {
		var t = new eui.Image();
		this.img_3 = t;
		t.source = "Moudle_big_page_scene4_json.11_3";
		t.x = 984.03;
		t.y = 179;
		return t;
	};
	_proto.img_4_i = function () {
		var t = new eui.Image();
		this.img_4 = t;
		t.source = "Moudle_big_page_scene4_json.11_6";
		t.x = 439.97;
		t.y = 458.85;
		return t;
	};
	_proto.img_5_i = function () {
		var t = new eui.Image();
		this.img_5 = t;
		t.source = "Moudle_big_page_scene4_json.11_5";
		t.x = 711.5;
		t.y = 458.85;
		return t;
	};
	_proto.img_6_i = function () {
		var t = new eui.Image();
		this.img_6 = t;
		t.source = "Moudle_big_page_scene4_json.11_7";
		t.x = 984.03;
		t.y = 458.85;
		return t;
	};
	_proto.img_7_i = function () {
		var t = new eui.Image();
		this.img_7 = t;
		t.source = "Moudle_big_page_scene4_json.11_7";
		t.x = 439.97;
		t.y = 750.88;
		return t;
	};
	_proto.img_8_i = function () {
		var t = new eui.Image();
		this.img_8 = t;
		t.source = "Moudle_big_page_scene4_json.11_8";
		t.x = 711.5;
		t.y = 750.88;
		return t;
	};
	_proto.img_9_i = function () {
		var t = new eui.Image();
		this.img_9 = t;
		t.source = "Moudle_big_page_scene4_json.11_4";
		t.x = 984.03;
		t.y = 750.88;
		return t;
	};
	_proto.btnReset_i = function () {
		var t = new eui.Image();
		this.btnReset = t;
		t.source = "big_loading_json.update_png";
		t.x = 1498;
		t.y = 1270.64;
		return t;
	};
	return Moudle_Page4Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page5Scene/Moudle_Page5Scene_Skin.exml'] = window.Moudle_Page5Scene_Skin = (function (_super) {
	__extends(Moudle_Page5Scene_Skin, _super);
	function Moudle_Page5Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","sImg2","sImg1","backImg","c1","c2","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page5Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.sImg2_i(),this.sImg1_i(),this.backImg_i(),this.c1_i(),this.c2_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg5_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.sImg2_i = function () {
		var t = new eui.Image();
		this.sImg2 = t;
		t.source = "Moudle_scene5_json.5_1_png";
		t.touchEnabled = false;
		t.x = 826.45;
		t.y = 701.27;
		return t;
	};
	_proto.sImg1_i = function () {
		var t = new eui.Image();
		this.sImg1 = t;
		t.source = "Moudle_scene5_json.5_2_png";
		t.touchEnabled = false;
		t.x = 84.78;
		t.y = 707.33;
		return t;
	};
	_proto.backImg_i = function () {
		var t = new eui.Image();
		this.backImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "update_png";
		t.x = 1486;
		t.y = 1273;
		return t;
	};
	_proto.c1_i = function () {
		var t = new eui.Rect();
		this.c1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 547.28;
		t.width = 674.55;
		t.x = 64;
		t.y = 112.27;
		return t;
	};
	_proto.c2_i = function () {
		var t = new eui.Rect();
		this.c2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 547.28;
		t.width = 674.55;
		t.x = 802.21;
		t.y = 112.27;
		return t;
	};
	return Moudle_Page5Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page6Scene/Moudle_Page6Scene_Skin.exml'] = window.Moudle_Page6Scene_Skin = (function (_super) {
	__extends(Moudle_Page6Scene_Skin, _super);
	function Moudle_Page6Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","rectCancle","img_1","img_2","img_3","btnReset","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page6Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.rectCancle_i(),this.img_1_i(),this.img_2_i(),this.img_3_i(),this.btnReset_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg6_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rectCancle_i = function () {
		var t = new eui.Rect();
		this.rectCancle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 447.27;
		t.strokeAlpha = 0;
		t.width = 1556.36;
		t.x = 1.3;
		t.y = 900.73;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.anchorOffsetX = 37.5;
		t.anchorOffsetY = 152.5;
		t.rotation = 90;
		t.source = "Moudle_big_page_scene6_json.page_obj_2_1";
		t.x = 337.44;
		t.y = 1072;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.anchorOffsetX = 37.5;
		t.anchorOffsetY = 152.5;
		t.rotation = 30;
		t.source = "Moudle_big_page_scene6_json.page_obj_2_1";
		t.x = 803.85;
		t.y = 1072;
		return t;
	};
	_proto.img_3_i = function () {
		var t = new eui.Image();
		this.img_3 = t;
		t.anchorOffsetX = 37.5;
		t.anchorOffsetY = 152.5;
		t.rotation = 150;
		t.source = "Moudle_big_page_scene6_json.page_obj_2_1";
		t.x = 1227.14;
		t.y = 1072;
		return t;
	};
	_proto.btnReset_i = function () {
		var t = new eui.Image();
		this.btnReset = t;
		t.source = "big_loading_json.update_png";
		t.x = 1426.88;
		t.y = 1155.82;
		return t;
	};
	return Moudle_Page6Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page7Scene/Moudle_Page7Scene_Skin.exml'] = window.Moudle_Page7Scene_Skin = (function (_super) {
	__extends(Moudle_Page7Scene_Skin, _super);
	function Moudle_Page7Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img_choose","rectCancle","rect_1","rect_2","rect_3","img_1","img_2","img_3","btnReset","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page7Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img_choose_i(),this.rectCancle_i(),this.rect_1_i(),this.rect_2_i(),this.rect_3_i(),this.img_1_i(),this.img_2_i(),this.img_3_i(),this.btnReset_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg7_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_choose_i = function () {
		var t = new eui.Image();
		this.img_choose = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 62;
		t.source = "Moudle_big_page_scene7_json.page_obj_3_4";
		t.x = 261;
		t.y = 911;
		return t;
	};
	_proto.rectCancle_i = function () {
		var t = new eui.Rect();
		this.rectCancle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 171.52;
		t.strokeAlpha = 0;
		t.width = 559.39;
		t.x = 997.06;
		t.y = 1170.09;
		return t;
	};
	_proto.rect_1_i = function () {
		var t = new eui.Rect();
		this.rect_1 = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 62;
		t.fillAlpha = 0;
		t.height = 124;
		t.strokeAlpha = 0;
		t.width = 292;
		t.x = 261;
		t.y = 612;
		return t;
	};
	_proto.rect_2_i = function () {
		var t = new eui.Rect();
		this.rect_2 = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 62;
		t.fillAlpha = 0;
		t.height = 124;
		t.strokeAlpha = 0;
		t.width = 292;
		t.x = 261;
		t.y = 766;
		return t;
	};
	_proto.rect_3_i = function () {
		var t = new eui.Rect();
		this.rect_3 = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 62;
		t.fillAlpha = 0;
		t.height = 124;
		t.strokeAlpha = 0;
		t.width = 292;
		t.x = 261;
		t.y = 911;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.anchorOffsetX = 27.5;
		t.anchorOffsetY = 27;
		t.source = "Moudle_big_page_scene7_json.page_obj_3_1";
		t.x = 1381.79;
		t.y = 1181.09;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.anchorOffsetX = 31.5;
		t.anchorOffsetY = 27.5;
		t.source = "Moudle_big_page_scene7_json.page_obj_3_3";
		t.x = 1254.55;
		t.y = 1181.09;
		return t;
	};
	_proto.img_3_i = function () {
		var t = new eui.Image();
		this.img_3 = t;
		t.anchorOffsetX = 61.5;
		t.anchorOffsetY = 8;
		t.source = "Moudle_big_page_scene7_json.page_obj_3_2";
		t.x = 1066.6;
		t.y = 1181.09;
		return t;
	};
	_proto.btnReset_i = function () {
		var t = new eui.Image();
		this.btnReset = t;
		t.source = "big_loading_json.update_png";
		t.x = 85;
		t.y = 1225.85;
		return t;
	};
	return Moudle_Page7Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page8Scene/Moudle_Page8Scene_Skin.exml'] = window.Moudle_Page8Scene_Skin = (function (_super) {
	__extends(Moudle_Page8Scene_Skin, _super);
	function Moudle_Page8Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","rect_1","img_1","img_2","img_3","lable_1_1","lable_1_2","lable_1_3","lable_2_1","lable_2_2","lable_2_3","lable_3_1","lable_3_2","lable_3_3","lable_4_1","lable_4_2","lable_4_3","lable_5_1","lable_5_2","lable_5_3","lable_6_1","lable_6_2","lable_6_3","lable_t7_1","lable_t7_2","lable_t7_3","lable_t7_4","lable_t7_5","lable_t7_6","btnNext","btnReset","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page8Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this._Image1_i(),this.rect_1_i(),this.img_1_i(),this.img_2_i(),this.img_3_i(),this.lable_1_1_i(),this.lable_1_2_i(),this.lable_1_3_i(),this.lable_2_1_i(),this.lable_2_2_i(),this.lable_2_3_i(),this.lable_3_1_i(),this.lable_3_2_i(),this.lable_3_3_i(),this.lable_4_1_i(),this.lable_4_2_i(),this.lable_4_3_i(),this.lable_5_1_i(),this.lable_5_2_i(),this.lable_5_3_i(),this.lable_6_1_i(),this.lable_6_2_i(),this.lable_6_3_i(),this.lable_t7_1_i(),this.lable_t7_2_i(),this.lable_t7_3_i(),this.lable_t7_4_i(),this.lable_t7_5_i(),this.lable_t7_6_i(),this.btnNext_i(),this.btnReset_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg8_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Moudle_big_page_scene8_json.8_1";
		t.x = 27.5;
		t.y = 163.15;
		return t;
	};
	_proto.rect_1_i = function () {
		var t = new eui.Rect();
		this.rect_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 883.64;
		t.strokeAlpha = 0;
		t.width = 1532.12;
		t.x = 20.73;
		t.y = 154.91;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.anchorOffsetX = 209;
		t.anchorOffsetY = 94;
		t.source = "Moudle_big_page_scene8_json.8_2";
		t.x = 326.7;
		t.y = 1193;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.anchorOffsetX = 199;
		t.anchorOffsetY = 95;
		t.source = "Moudle_big_page_scene8_json.8_3";
		t.x = 795.36;
		t.y = 1193;
		return t;
	};
	_proto.img_3_i = function () {
		var t = new eui.Image();
		this.img_3 = t;
		t.anchorOffsetX = 189;
		t.anchorOffsetY = 93;
		t.source = "Moudle_big_page_scene8_json.8_4";
		t.x = 1243.08;
		t.y = 1193;
		return t;
	};
	_proto.lable_1_1_i = function () {
		var t = new eui.Label();
		this.lable_1_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 314.67;
		t.y = 323;
		return t;
	};
	_proto.lable_1_2_i = function () {
		var t = new eui.Label();
		this.lable_1_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 539.32;
		t.y = 323;
		return t;
	};
	_proto.lable_1_3_i = function () {
		var t = new eui.Label();
		this.lable_1_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 764.06;
		t.y = 323;
		return t;
	};
	_proto.lable_2_1_i = function () {
		var t = new eui.Label();
		this.lable_2_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 318.61;
		t.y = 445.12;
		return t;
	};
	_proto.lable_2_2_i = function () {
		var t = new eui.Label();
		this.lable_2_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 543.26;
		t.y = 445.12;
		return t;
	};
	_proto.lable_2_3_i = function () {
		var t = new eui.Label();
		this.lable_2_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 768;
		t.y = 445.12;
		return t;
	};
	_proto.lable_3_1_i = function () {
		var t = new eui.Label();
		this.lable_3_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 318.61;
		t.y = 572.39;
		return t;
	};
	_proto.lable_3_2_i = function () {
		var t = new eui.Label();
		this.lable_3_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 543.26;
		t.y = 572.39;
		return t;
	};
	_proto.lable_3_3_i = function () {
		var t = new eui.Label();
		this.lable_3_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 768;
		t.y = 572.39;
		return t;
	};
	_proto.lable_4_1_i = function () {
		var t = new eui.Label();
		this.lable_4_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 318.61;
		t.y = 696.64;
		return t;
	};
	_proto.lable_4_2_i = function () {
		var t = new eui.Label();
		this.lable_4_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 543.26;
		t.y = 696.64;
		return t;
	};
	_proto.lable_4_3_i = function () {
		var t = new eui.Label();
		this.lable_4_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 768;
		t.y = 696.64;
		return t;
	};
	_proto.lable_5_1_i = function () {
		var t = new eui.Label();
		this.lable_5_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 318.61;
		t.y = 814.82;
		return t;
	};
	_proto.lable_5_2_i = function () {
		var t = new eui.Label();
		this.lable_5_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 543.26;
		t.y = 814.82;
		return t;
	};
	_proto.lable_5_3_i = function () {
		var t = new eui.Label();
		this.lable_5_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 768;
		t.y = 814.82;
		return t;
	};
	_proto.lable_6_1_i = function () {
		var t = new eui.Label();
		this.lable_6_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 318.61;
		t.y = 942.09;
		return t;
	};
	_proto.lable_6_2_i = function () {
		var t = new eui.Label();
		this.lable_6_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 543.26;
		t.y = 942.09;
		return t;
	};
	_proto.lable_6_3_i = function () {
		var t = new eui.Label();
		this.lable_6_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.27;
		t.size = 50;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 98.24;
		t.x = 768;
		t.y = 942.09;
		return t;
	};
	_proto.lable_t7_1_i = function () {
		var t = new eui.Label();
		this.lable_t7_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 69.39;
		t.size = 50;
		t.text = "50+20+20+10=100";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 555.82;
		t.x = 954.22;
		t.y = 313.91;
		return t;
	};
	_proto.lable_t7_2_i = function () {
		var t = new eui.Label();
		this.lable_t7_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 69.39;
		t.size = 40;
		t.text = "20+20+10+10+10=100";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 555.82;
		t.x = 954.22;
		t.y = 435.5;
		return t;
	};
	_proto.lable_t7_3_i = function () {
		var t = new eui.Label();
		this.lable_t7_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 69.39;
		t.size = 40;
		t.text = "50+10+10+10+10+10=100";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 555.82;
		t.x = 951.18;
		t.y = 563.3;
		return t;
	};
	_proto.lable_t7_4_i = function () {
		var t = new eui.Label();
		this.lable_t7_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 69.39;
		t.size = 40;
		t.text = "20+20+20+20+10+10=100";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 555.82;
		t.x = 954.22;
		t.y = 689.15;
		return t;
	};
	_proto.lable_t7_5_i = function () {
		var t = new eui.Label();
		this.lable_t7_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 69.39;
		t.size = 35;
		t.text = "20+20+20+10+10+10+10=100";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 555.82;
		t.x = 954.22;
		t.y = 810.7;
		return t;
	};
	_proto.lable_t7_6_i = function () {
		var t = new eui.Label();
		this.lable_t7_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 69.39;
		t.size = 32;
		t.text = "20+20+10+10+10+10+10+10=100";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 555.82;
		t.x = 954.22;
		t.y = 936.03;
		return t;
	};
	_proto.btnNext_i = function () {
		var t = new eui.Image();
		this.btnNext = t;
		t.source = "big_loading_json.clickbtn_png";
		t.x = 1474.5;
		t.y = 1288;
		return t;
	};
	_proto.btnReset_i = function () {
		var t = new eui.Image();
		this.btnReset = t;
		t.source = "big_loading_json.update_png";
		t.x = 1378.97;
		t.y = 1285;
		return t;
	};
	return Moudle_Page8Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/Common_Moudle/game_skins/Moudle_Page9Scene/Moudle_Page9Scene_Skin.exml'] = window.Moudle_Page9Scene_Skin = (function (_super) {
	__extends(Moudle_Page9Scene_Skin, _super);
	function Moudle_Page9Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img_choose","rectCancle","rect_1","rect_2","rect_3","img_1","img_2","img_3","btnReset","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Moudle_Page9Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img_choose_i(),this.rectCancle_i(),this.rect_1_i(),this.rect_2_i(),this.rect_3_i(),this.img_1_i(),this.img_2_i(),this.img_3_i(),this.btnReset_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Moudle_page_scene_bg9_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_choose_i = function () {
		var t = new eui.Image();
		this.img_choose = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 62;
		t.source = "Moudle_big_page_scene7_json.page_obj_3_4";
		t.x = 261;
		t.y = 911;
		return t;
	};
	_proto.rectCancle_i = function () {
		var t = new eui.Rect();
		this.rectCancle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 171.52;
		t.strokeAlpha = 0;
		t.width = 559.39;
		t.x = 997.06;
		t.y = 1170.09;
		return t;
	};
	_proto.rect_1_i = function () {
		var t = new eui.Rect();
		this.rect_1 = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 62;
		t.fillAlpha = 0;
		t.height = 124;
		t.strokeAlpha = 0;
		t.width = 292;
		t.x = 261;
		t.y = 612;
		return t;
	};
	_proto.rect_2_i = function () {
		var t = new eui.Rect();
		this.rect_2 = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 62;
		t.fillAlpha = 0;
		t.height = 124;
		t.strokeAlpha = 0;
		t.width = 292;
		t.x = 261;
		t.y = 766;
		return t;
	};
	_proto.rect_3_i = function () {
		var t = new eui.Rect();
		this.rect_3 = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 62;
		t.fillAlpha = 0;
		t.height = 124;
		t.strokeAlpha = 0;
		t.width = 292;
		t.x = 261;
		t.y = 911;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.anchorOffsetX = 27.5;
		t.anchorOffsetY = 27;
		t.source = "Moudle_big_page_scene7_json.page_obj_3_1";
		t.x = 1381.79;
		t.y = 1181.09;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.anchorOffsetX = 31.5;
		t.anchorOffsetY = 27.5;
		t.source = "Moudle_big_page_scene7_json.page_obj_3_3";
		t.x = 1254.55;
		t.y = 1181.09;
		return t;
	};
	_proto.img_3_i = function () {
		var t = new eui.Image();
		this.img_3 = t;
		t.anchorOffsetX = 61.5;
		t.anchorOffsetY = 8;
		t.source = "Moudle_big_page_scene7_json.page_obj_3_2";
		t.x = 1066.6;
		t.y = 1181.09;
		return t;
	};
	_proto.btnReset_i = function () {
		var t = new eui.Image();
		this.btnReset = t;
		t.source = "big_loading_json.update_png";
		t.x = 85;
		t.y = 1225.85;
		return t;
	};
	return Moudle_Page9Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/ClassOverScene/ClassOverScene_Skin.exml'] = window.ClassOverScene_Skin = (function (_super) {
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