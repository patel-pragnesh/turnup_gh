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
    this.__controllerPath = "bg_location_service";
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    var mode = Ti.App.Properties.getString("bg-location-mode", "PWTrackingDisabled");
    var PushWoosh = require("pushwoosh/pushwoosh");
    if ("PWTrackingDisabled" === mode) Ti.App.currentService.stop(); else {
        if ("PWTrackAccurateLocationChanges" === mode) {
            Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
            Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
        } else {
            Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_THREE_KILOMETERS;
            Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_NETWORK;
        }
        Ti.Geolocation.removeEventListener("location", PushWoosh.handleLocation);
        Ti.Geolocation.addEventListener("location", PushWoosh.handleLocation);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;