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
    this.__controllerPath = "newsList";
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
    $.__views.midContainer = Ti.UI.createScrollView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "midContainer",
        backgroundColor: "white"
    });
    $.__views.midContainer && $.addTopLevelView($.__views.midContainer);
    $.__views.feedListView = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        bottom: 25,
        id: "feedListView"
    });
    $.__views.midContainer.add($.__views.feedListView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    require("animation");
    require("platformSupport");
    var init = function() {
        if (null != args) {
            var length = args.length;
            $.feedListView.removeAllChildren();
            for (var i = 0; length > i; i++) {
                oneFeed = Alloy.createController("newsRow", args[i]).getView();
                $.feedListView.add(oneFeed);
            }
        }
    };
    init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;