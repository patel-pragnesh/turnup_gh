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
    this.__controllerPath = "itemMap";
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
    $.__views.mapWindow = Ti.UI.createWindow({
        backgroundColor: "#FFF",
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "mapWindow"
    });
    $.__views.mapWindow && $.addTopLevelView($.__views.mapWindow);
    $.__views.__alloyId19 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId19"
    });
    $.__views.mapWindow.add($.__views.__alloyId19);
    $.__views.AppWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "AppWrapper"
    });
    $.__views.__alloyId19.add($.__views.AppWrapper);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "Jengle Jungallery"
        },
        height: 44.4,
        color: "#FFF",
        left: "30",
        id: "mainTitle",
        text: "Explore On Map"
    });
    $.__views.AppWrapper.add($.__views.mainTitle);
    closeWindow ? $.__views.mainTitle.addEventListener("click", closeWindow) : __defers["$.__views.mainTitle!click!closeWindow"] = true;
    $.__views.imgBack = Ti.UI.createImageView({
        width: 25,
        height: 25,
        left: 5,
        right: 5,
        id: "imgBack"
    });
    $.__views.AppWrapper.add($.__views.imgBack);
    closeWindow ? $.__views.imgBack.addEventListener("click", closeWindow) : __defers["$.__views.imgBack!click!closeWindow"] = true;
    $.__views.mapView = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "mapView"
    });
    $.__views.mapWindow.add($.__views.mapView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var myAnimation = require("animation");
    var __ = require("platformSupport");
    var args = arguments[0] || {};
    var MapModule = require("ti.map");
    require("loader");
    var icomoonlib = require("icomoonlib");
    var loadingWindow = require("loadingWindow");
    var itemMapView = MapModule.createView({
        mapType: MapModule.NORMAL_TYPE,
        region: {
            latitude: 5.566987,
            longitude: -.183549,
            latitudeDelta: .1,
            longitudeDelta: .1
        }
    });
    var init = function() {
        var pinIcon = icomoonlib.getIcon("panacea", "annotation", 20, {
            color: Alloy.CFG.Colors.MainColor_Dark
        });
        if (null != args.items) for (var i = 0; i < args.items.length; i++) {
            var eachItem = MapModule.createAnnotation({
                latitude: getCoordinate(args.items[i].coordinate, "lat"),
                longitude: getCoordinate(args.items[i].coordinate, "long"),
                pincolor: MapModule.ANNOTATION_AZURE,
                title: args.items[i].name,
                subtitle: args.items[i].description,
                itemId: args.items[i].id,
                image: pinIcon,
                itemArgs: args.items[i]
            });
            "android" != Ti.Platform.osname && (eachItem.rightButton = Ti.UI.iPhone.SystemButton.INFO_DARK);
            itemMapView.addAnnotation(eachItem);
        }
        loadIcon();
        loadingWindow.endLoading();
    };
    itemMapView.addEventListener("click", function(evt) {
        evt.source;
        var clicksource = evt.clicksource;
        if ("android" != Ti.Platform.osname) {
            if ("rightButton" == clicksource) {
                Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.itemArgs);
                var params = {
                    item: evt.annotation.itemArgs
                };
                console.log(JSON.stringify(params));
                gotoItemDetails(params);
            }
        } else if ("pin" != clicksource & null != clicksource) {
            Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.itemId);
            var params = {
                item: evt.annotation.itemArgs
            };
            console.log(JSON.stringify(params));
            gotoItemDetails(params);
        }
    });
    var gotoItemDetails = function(args) {
        var contentView = Alloy.createController("itemDetail", args).getView();
        myAnimation.in(contentView);
    };
    var getCoordinate = function(point, type) {
        var splitsPoint = point.split(",");
        return "lat" == type ? splitsPoint[0] : splitsPoint[1];
    };
    var closeWindow = function() {
        myAnimation.out($.mapWindow);
    };
    __.isiOS7Plus() && ($.AppWrapper.top = 20);
    var loadIcon = function() {
        var backIcon = icomoonlib.getIcon("panacea", "back", 35, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgBack.image = backIcon;
    };
    $.mapWindow.addEventListener("open", function() {
        init();
        $.mapView.add(itemMapView);
    });
    __defers["$.__views.mainTitle!click!closeWindow"] && $.__views.mainTitle.addEventListener("click", closeWindow);
    __defers["$.__views.imgBack!click!closeWindow"] && $.__views.imgBack.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;