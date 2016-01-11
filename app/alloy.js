// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Collections.users = Alloy.createCollection('users');

Alloy.Globals.data = null;

var PushWoosh = require('pushwoosh/pushwoosh');

PushWoosh.appCode = '22690-D231E';

PushWoosh.sendAppOpen();

var deviceToken = null;

	// Check if the device is running iOS 8 or later
	if (Ti.Platform.name == "iPhone OS" && parseInt(Ti.Platform.version.split(".")[0]) >= 8) {
		function registerForPush() {
			Ti.Network.registerForPushNotifications({
				success : deviceTokenSuccess,
				error : deviceTokenError,
				callback : receivePush
			});
			// Remove event listener once registered for push notifications
			Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush);
		};
	
		// Wait for user settings to be registered before registering for push notifications
		Ti.App.iOS.addEventListener('usernotificationsettings', registerForPush);
	
		// Register notification types to use
		Ti.App.iOS.registerUserNotificationSettings({
			types : [Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT, Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND, Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE]
		});
	
	} else {
		// For iOS 7 and earlier
		Ti.Network.registerForPushNotifications({
			// Specifies which notifications to receive
			types : [Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_ALERT, Ti.Network.NOTIFICATION_TYPE_SOUND],
			success : deviceTokenSuccess,
			error : deviceTokenError,
			callback : receivePush
		});
	}
	
	// Process incoming push notifications
	function receivePush(e) {
		//alert('Received push: ' + JSON.stringify(e));
		Ti.API.warn("push message received: " + JSON.stringify(e));
			
			//send stats to Pushwoosh about push opened
			PushWoosh.sendPushStat(e.data.p);
			var pushwoohURL = e['data']['l'];
			
			var a = Ti.UI.createAlertDialog({
				title : 'New Message',
				message : e.data.alert,
				buttonNames : ['Open', 'Close']
				//message : JSON.stringify(e.data)	//if you want to access additional custom data in the payload
			});
			//a.show();
			
			a.addEventListener('click', function(e) {
			   if (e.index == 0) {
				Titanium.Platform.openURL(pushwoohURL);
			   }
			});
	}
	
	// Save the device token for subsequent API calls
	function deviceTokenSuccess(e) {
		deviceToken = e.deviceToken;
		Ti.API.info('successfully registered for apple device token with ' + e.deviceToken);
			
			PushWoosh.register(deviceToken, function(data) {
				Ti.API.debug("PushWoosh register success: " + JSON.stringify(data));
				
				PushWoosh.setTags({alias:"device1"}, function(data) {
						Ti.API.debug("PushWoosh sendTags success: " + JSON.stringify(data));
					},function(e) {
						Ti.API.warn("Couldn't setTags with PushWoosh: " + JSON.stringify(e));
				});
 				
			}, function(e) {
				Ti.API.warn("Couldn't register with PushWoosh: " + JSON.stringify(e));
			});
	}
	
	function deviceTokenError(e) {
		//alert('Failed to register for push notifications! ' + e.error);
		Ti.API.warn("push notifications disabled: " + JSON.stringify(e));
	}

	
	Ti.API.info('registering with PushWoosh');
	
	PushWoosh.startLocationTracking('PWTrackAccurateLocationChanges');