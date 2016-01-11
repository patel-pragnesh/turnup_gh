function registerForPush() {
    Ti.Network.registerForPushNotifications({
        success: deviceTokenSuccess,
        error: deviceTokenError,
        callback: receivePush
    });
    Ti.App.iOS.removeEventListener("usernotificationsettings", registerForPush);
}

function receivePush(e) {
    Ti.API.warn("push message received: " + JSON.stringify(e));
    PushWoosh.sendPushStat(e.data.p);
    var pushwoohURL = e["data"]["l"];
    var a = Ti.UI.createAlertDialog({
        title: "New Message",
        message: e.data.alert,
        buttonNames: [ "Open", "Close" ]
    });
    a.addEventListener("click", function(e) {
        0 == e.index && Titanium.Platform.openURL(pushwoohURL);
    });
}

function deviceTokenSuccess(e) {
    deviceToken = e.deviceToken;
    Ti.API.info("successfully registered for apple device token with " + e.deviceToken);
    PushWoosh.register(deviceToken, function(data) {
        Ti.API.debug("PushWoosh register success: " + JSON.stringify(data));
        PushWoosh.setTags({
            alias: "device1"
        }, function(data) {
            Ti.API.debug("PushWoosh sendTags success: " + JSON.stringify(data));
        }, function(e) {
            Ti.API.warn("Couldn't setTags with PushWoosh: " + JSON.stringify(e));
        });
    }, function(e) {
        Ti.API.warn("Couldn't register with PushWoosh: " + JSON.stringify(e));
    });
}

function deviceTokenError(e) {
    Ti.API.warn("push notifications disabled: " + JSON.stringify(e));
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.users = Alloy.createCollection("users");

Alloy.Globals.data = null;

var PushWoosh = require("pushwoosh/pushwoosh");

PushWoosh.appCode = "22690-D231E";

PushWoosh.sendAppOpen();

var deviceToken = null;

Ti.Network.registerForPushNotifications({
    types: [ Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_ALERT, Ti.Network.NOTIFICATION_TYPE_SOUND ],
    success: deviceTokenSuccess,
    error: deviceTokenError,
    callback: receivePush
});

Ti.API.info("registering with PushWoosh");

PushWoosh.startLocationTracking("PWTrackAccurateLocationChanges");

Alloy.createController("index");