function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeLayoutLeft";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homeLayoutLeft = Ti.UI.createView({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        navBarHidden: true,
        id: "homeLayoutLeft"
    });
    $.__views.homeLayoutLeft && $.addTopLevelView($.__views.homeLayoutLeft);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        borderWidth: "1",
        borderColor: "#FFF",
        id: "__alloyId0"
    });
    $.__views.homeLayoutLeft.add($.__views.__alloyId0);
    $.__views.bigImgView = Ti.UI.createView({
        borderColor: "#FFF",
        borderWidth: "1",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "bigImgView"
    });
    $.__views.__alloyId0.add($.__views.bigImgView);
    openGrid ? $.__views.bigImgView.addEventListener("click", openGrid) : __defers["$.__views.bigImgView!click!openGrid"] = true;
    $.__views.imgLeftImg = Ti.UI.createImageView({
        borderWidth: 1,
        borderColor: "#FFF",
        width: 213,
        height: 150,
        id: "imgLeftImg"
    });
    $.__views.bigImgView.add($.__views.imgLeftImg);
    $.__views.shadow = Ti.UI.createImageView({
        backgroundImage: "/images/shadow.png",
        width: 320,
        height: 56,
        opacity: .8,
        bottom: 0,
        id: "shadow"
    });
    $.__views.bigImgView.add($.__views.shadow);
    $.__views.catName = Ti.UI.createLabel({
        font: {
            fontSize: 24.5,
            fontFamily: "BodoniFLF"
        },
        height: Ti.UI.SIZE,
        left: 10,
        bottom: 10,
        color: "#FFF",
        id: "catName"
    });
    $.__views.bigImgView.add($.__views.catName);
    $.__views.__alloyId1 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.smallImgView1 = Ti.UI.createView({
        borderColor: "#FFF",
        borderWidth: "1",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "smallImgView1"
    });
    $.__views.__alloyId1.add($.__views.smallImgView1);
    openGrid ? $.__views.smallImgView1.addEventListener("click", openGrid) : __defers["$.__views.smallImgView1!click!openGrid"] = true;
    $.__views.imgLeftImg2 = Ti.UI.createImageView({
        width: 107,
        height: 75,
        borderWidth: "1",
        borderColor: "#FFF",
        id: "imgLeftImg2"
    });
    $.__views.smallImgView1.add($.__views.imgLeftImg2);
    $.__views.smallImgView2 = Ti.UI.createView({
        borderColor: "#FFF",
        borderWidth: "1",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "smallImgView2"
    });
    $.__views.__alloyId1.add($.__views.smallImgView2);
    openGrid ? $.__views.smallImgView2.addEventListener("click", openGrid) : __defers["$.__views.smallImgView2!click!openGrid"] = true;
    $.__views.imgLeftImg3 = Ti.UI.createImageView({
        width: 107,
        height: 75,
        borderWidth: "1",
        borderColor: "#FFF",
        id: "imgLeftImg3"
    });
    $.__views.smallImgView2.add($.__views.imgLeftImg3);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "55",
        id: "__alloyId2"
    });
    $.__views.homeLayoutLeft.add($.__views.__alloyId2);
    $.__views.ad = Ti.UI.createLabel({
        font: {
            fontSize: "36dp",
            fontFamily: "Claudette aime le Chocolat"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "ad"
    });
    $.__views.__alloyId2.add($.__views.ad);
    $.__views.gotoView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 5,
        id: "gotoView"
    });
    $.__views.__alloyId2.add($.__views.gotoView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var __ = require("platformSupport");
    require("loadingWindow");
    require("strings");
    var fontIconLoader = require("icomoonlib");
    require("animation");
    var args = arguments[0] || {};
    var openGrid = function() {
        args.openItemGrid(args.itemsData);
    };
    var init = function() {
        if (null != args && null != args.itemsData.items && args.itemsData.items.length > 0) {
            var scale = {
                width: args.itemsData.items[0].images[0].width,
                height: args.itemsData.items[0].images[0].height
            };
            var viewScale = {
                width: args.ITEM_BIG_WIDTH,
                height: args.ITEM_BIG_HEIGHT
            };
            scale = __.getGridPhotoSize(scale, viewScale);
            $.imgLeftImg.width = scale.width;
            $.imgLeftImg.height = scale.height;
            $.shadow.width = scale.width;
            $.catName.text = args.itemsData.name;
            $.catName.width = scale.width;
            $.imgLeftImg.image = Alloy.CFG.Urls.imagePathURL + args.itemsData.items[0].images[0].path;
            if (args.itemsData.items.length > 1) {
                scale = {
                    width: args.itemsData.items[1].images[0].width,
                    height: args.itemsData.items[1].images[0].height
                };
                viewScale = {
                    width: args.ITEM_SMALL_WIDTH,
                    height: args.ITEM_SMALL_HEIGHT
                };
                scale = __.getGridPhotoSize(scale, viewScale);
                $.imgLeftImg2.width = scale.width;
                $.imgLeftImg2.height = scale.height;
                $.imgLeftImg2.image = Alloy.CFG.Urls.imagePathURL + args.itemsData.items[1].images[0].path;
            }
            if (args.itemsData.items.length > 2) {
                scale = {
                    width: args.itemsData.items[2].images[0].width,
                    height: args.itemsData.items[2].images[0].height
                };
                viewScale = {
                    width: args.ITEM_SMALL_WIDTH,
                    height: args.ITEM_SMALL_HEIGHT
                };
                scale = __.getGridPhotoSize(scale, viewScale);
                $.imgLeftImg3.width = scale.width;
                $.imgLeftImg3.height = scale.height;
                $.imgLeftImg3.image = Alloy.CFG.Urls.imagePathURL + args.itemsData.items[2].images[0].path;
            }
            $.bigImgView.width = args.ITEM_BIG_WIDTH;
            $.bigImgView.height = args.ITEM_BIG_HEIGHT;
            $.smallImgView1.width = args.ITEM_SMALL_WIDTH;
            $.smallImgView1.height = args.ITEM_SMALL_HEIGHT;
            $.smallImgView2.width = args.ITEM_SMALL_WIDTH;
            $.smallImgView2.height = args.ITEM_SMALL_HEIGHT;
            loadIcon();
            loadLanguage();
            Alloy.isTablet && __.setNormalFontForTablet($.catName, 25);
        }
    };
    var loadIcon = function() {
        fontIconLoader.getIcon("panacea", "map-marker", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        fontIconLoader.getIcon("panacea", "grid", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
    };
    var loadLanguage = function() {};
    init();
    __defers["$.__views.bigImgView!click!openGrid"] && $.__views.bigImgView.addEventListener("click", openGrid);
    __defers["$.__views.smallImgView1!click!openGrid"] && $.__views.smallImgView1.addEventListener("click", openGrid);
    __defers["$.__views.smallImgView2!click!openGrid"] && $.__views.smallImgView2.addEventListener("click", openGrid);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;