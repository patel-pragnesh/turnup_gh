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
    this.__controllerPath = "itemDetail";
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
    $.__views.itemDetail = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "itemDetail"
    });
    $.__views.itemDetail && $.addTopLevelView($.__views.itemDetail);
    $.__views.__alloyId13 = Ti.UI.createView({
        backgroundColor: Alloy.CFG.Colors.BackgroundColor,
        opacity: 1,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        navBarHidden: true,
        id: "__alloyId13"
    });
    $.__views.itemDetail.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: Alloy.CFG.Colors.MainColor,
        top: 0,
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.AppWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "AppWrapper"
    });
    $.__views.__alloyId14.add($.__views.AppWrapper);
    $.__views.mainTitle = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: ""
        },
        height: 44.4,
        color: "#FFF",
        left: "30",
        id: "mainTitle",
        text: ""
    });
    $.__views.AppWrapper.add($.__views.mainTitle);
    closeWindow ? $.__views.mainTitle.addEventListener("click", closeWindow) : __defers["$.__views.mainTitle!click!closeWindow"] = true;
    $.__views.imgBack = Ti.UI.createImageView({
        width: 30,
        height: 30,
        left: 0,
        right: 6,
        id: "imgBack"
    });
    $.__views.AppWrapper.add($.__views.imgBack);
    closeWindow ? $.__views.imgBack.addEventListener("click", closeWindow) : __defers["$.__views.imgBack!click!closeWindow"] = true;
    $.__views.FavouriteView = Ti.UI.createView({
        width: 40,
        height: 40,
        right: 3,
        id: "FavouriteView",
        visible: "true"
    });
    $.__views.AppWrapper.add($.__views.FavouriteView);
    doFavourite ? $.__views.FavouriteView.addEventListener("click", doFavourite) : __defers["$.__views.FavouriteView!click!doFavourite"] = true;
    $.__views.imgFavourite = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 6,
        right: 6,
        id: "imgFavourite"
    });
    $.__views.FavouriteView.add($.__views.imgFavourite);
    $.__views.midContainer = Ti.UI.createScrollView({
        layout: "vertical",
        height: Ti.UI.FILL,
        width: Ti.UI.SIZE,
        id: "midContainer"
    });
    $.__views.__alloyId13.add($.__views.midContainer);
    $.__views.productImgView = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: "300",
        borderWidth: "0",
        id: "productImgView"
    });
    $.__views.midContainer.add($.__views.productImgView);
    $.__views.imProductImage = Ti.UI.createImageView({
        id: "imProductImage"
    });
    $.__views.productImgView.add($.__views.imProductImage);
    openSlider ? $.__views.imProductImage.addEventListener("click", openSlider) : __defers["$.__views.imProductImage!click!openSlider"] = true;
    $.__views.__alloyId15 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId15"
    });
    $.__views.midContainer.add($.__views.__alloyId15);
    $.__views.thumbContainerView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        top: 10,
        id: "thumbContainerView",
        borderWidth: "0",
        height: "55"
    });
    $.__views.__alloyId15.add($.__views.thumbContainerView);
    $.__views.imgLeft = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 6,
        right: 6,
        id: "imgLeft",
        image: "/images/backward.png"
    });
    $.__views.thumbContainerView.add($.__views.imgLeft);
    gotoLeftMost ? $.__views.imgLeft.addEventListener("click", gotoLeftMost) : __defers["$.__views.imgLeft!click!gotoLeftMost"] = true;
    $.__views.thumbImagesScrollView = Ti.UI.createScrollView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        showHorizontalScrollIndicator: true,
        showVerticalScrollIndicator: false,
        scrollType: "horizontal",
        contentWidth: 1250,
        id: "thumbImagesScrollView",
        borderWidth: "0"
    });
    $.__views.thumbContainerView.add($.__views.thumbImagesScrollView);
    $.__views.imgRight = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 6,
        right: 6,
        id: "imgRight",
        image: "/images/forward.png"
    });
    $.__views.thumbContainerView.add($.__views.imgRight);
    gotoRightMost ? $.__views.imgRight.addEventListener("click", gotoRightMost) : __defers["$.__views.imgRight!click!gotoRightMost"] = true;
    $.__views.infoContainer = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "infoContainer"
    });
    $.__views.__alloyId15.add($.__views.infoContainer);
    $.__views.lblTitle = Ti.UI.createLabel({
        font: {
            fontSize: 19,
            fontFamily: "BodoniFLF",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        width: Ti.UI.FILL,
        top: 10,
        text: "",
        id: "lblTitle",
        color: "#464646"
    });
    $.__views.infoContainer.add($.__views.lblTitle);
    $.__views.socialView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: 0,
        bottom: "-3",
        id: "socialView"
    });
    $.__views.infoContainer.add($.__views.socialView);
    $.__views.iconBackground = Ti.UI.createView({
        height: 30,
        width: Ti.UI.FILL,
        id: "iconBackground",
        layout: "horizontal"
    });
    $.__views.socialView.add($.__views.iconBackground);
    $.__views.imgLike = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 6,
        right: 6,
        id: "imgLike"
    });
    $.__views.iconBackground.add($.__views.imgLike);
    doLike ? $.__views.imgLike.addEventListener("click", doLike) : __defers["$.__views.imgLike!click!doLike"] = true;
    $.__views.likeCount = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontFamily: "BodoniFLF"
        },
        height: Ti.UI.SIZE,
        left: 0,
        text: "0",
        id: "likeCount",
        color: "#464646"
    });
    $.__views.iconBackground.add($.__views.likeCount);
    doLike ? $.__views.likeCount.addEventListener("click", doLike) : __defers["$.__views.likeCount!click!doLike"] = true;
    $.__views.FavouriteView1 = Ti.UI.createView({
        width: 40,
        height: 40,
        right: 8,
        id: "FavouriteView1",
        visible: "true"
    });
    $.__views.socialView.add($.__views.FavouriteView1);
    $.__views.imgCapture = Ti.UI.createImageView({
        width: 30,
        height: 30,
        left: 6,
        right: 6,
        id: "imgCapture"
    });
    $.__views.FavouriteView1.add($.__views.imgCapture);
    $.__views.__alloyId16 = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        height: .7,
        image: "/images/strikeDDD.png",
        top: 5,
        bottom: 10,
        id: "__alloyId16"
    });
    $.__views.infoContainer.add($.__views.__alloyId16);
    $.__views.lblDescription = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontFamily: "BodoniFLF"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        width: Ti.UI.FILL,
        text: "",
        id: "lblDescription",
        color: "#464646"
    });
    $.__views.infoContainer.add($.__views.lblDescription);
    $.__views.phoneView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 10,
        left: "0",
        id: "phoneView"
    });
    $.__views.infoContainer.add($.__views.phoneView);
    $.__views.imgPhone = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 0,
        right: 6,
        id: "imgPhone"
    });
    $.__views.phoneView.add($.__views.imgPhone);
    $.__views.lblPhoneNo = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontFamily: "BodoniFLF"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        width: Ti.UI.FILL,
        text: "Phone No",
        color: "#464646",
        id: "lblPhoneNo"
    });
    $.__views.phoneView.add($.__views.lblPhoneNo);
    $.__views.locationView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 10,
        left: "0",
        id: "locationView"
    });
    $.__views.infoContainer.add($.__views.locationView);
    $.__views.imgLocation = Ti.UI.createImageView({
        width: 20,
        height: 20,
        left: 0,
        right: 6,
        id: "imgLocation"
    });
    $.__views.locationView.add($.__views.imgLocation);
    $.__views.lblLocation = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontFamily: "BodoniFLF"
        },
        height: Ti.UI.SIZE,
        textAlign: "left",
        width: Ti.UI.FILL,
        text: "Location",
        color: "#464646",
        id: "lblLocation"
    });
    $.__views.locationView.add($.__views.lblLocation);
    $.__views.strike2 = Ti.UI.createImageView({
        width: Ti.UI.FILL,
        height: .7,
        image: "/images/strikeDDD.png",
        top: 10,
        bottom: 10,
        id: "strike2"
    });
    $.__views.infoContainer.add($.__views.strike2);
    $.__views.__alloyId17 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId17"
    });
    $.__views.infoContainer.add($.__views.__alloyId17);
    $.__views.writeItemReview = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 0,
        id: "writeItemReview"
    });
    $.__views.__alloyId17.add($.__views.writeItemReview);
    openReview ? $.__views.writeItemReview.addEventListener("click", openReview) : __defers["$.__views.writeItemReview!click!openReview"] = true;
    $.__views.lblWriteReview = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "BodoniFLF"
        },
        height: Ti.UI.SIZE,
        textAlign: "right",
        width: Ti.UI.SIZE,
        text: "Write Review",
        id: "lblWriteReview",
        color: "#454545"
    });
    $.__views.writeItemReview.add($.__views.lblWriteReview);
    $.__views.imgWriteReviewIcon = Ti.UI.createImageView({
        width: 25,
        height: 25,
        left: 6,
        right: 6,
        id: "imgWriteReviewIcon"
    });
    $.__views.writeItemReview.add($.__views.imgWriteReviewIcon);
    $.__views.reviewView = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: 25,
        id: "reviewView"
    });
    $.__views.infoContainer.add($.__views.reviewView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var __ = require("platformSupport");
    var psAnimation = require("animation");
    var fontIconLoader = require("icomoonlib");
    var loader = require("loader");
    var dialogBox = require("psdialog");
    var loadingWindow = require("loadingWindow");
    __.isiOS7Plus() && ($.AppWrapper.top = 20);
    var loadReview = function(itemId) {
        var loaderArgs = {
            callbackFunction: initReivew,
            url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getItemDetailById + itemId
        };
        loader.get(loaderArgs);
    };
    var openSlider = function() {
        var contentView = Alloy.createController("slider", args).getView();
        psAnimation.in(contentView);
    };
    var closeWindow = function() {
        psAnimation.out($.itemDetail);
    };
    var openReview = function() {
        loadingWindow.startLoading();
        var userId = Ti.App.Properties.getString("userId");
        var params = {
            item_id: args.item.id,
            loadReview: loadReview
        };
        if (userId) {
            var contentView = Alloy.createController("review", params).getView();
            psAnimation.in(contentView);
        } else {
            var contentView = Alloy.createController("userLogin", params).getView();
            psAnimation.in(contentView);
        }
    };
    var init = function() {
        var padding = "";
        var screenWidth = __.getScreenWidth();
        var screenHeight = __.getScreenHeight();
        var size = [];
        size.width = args.item.images[0].width;
        size.height = args.item.images[0].height;
        var tmp = __.getGridPhotoSizeCalWidth(size, screenWidth);
        loadingWindow.endLoading();
        $.imProductImage.image = Alloy.CFG.Urls.imagePathURL + args.item.images[0].path;
        $.imProductImage.width = tmp.width;
        $.imProductImage.height = tmp.height;
        $.productImgView.height = screenHeight / 2.2;
        $.lblTitle.text = args.item.name;
        $.lblDescription.text = args.item.description;
        $.likeCount.text = args.item.like_count;
        if ("" == args.item.phone) {
            $.phoneView.opacity = 0;
            $.phoneView.height = 0;
        } else {
            $.phoneView.opacity = 1;
            $.phoneView.height = Ti.UI.SIZE;
            $.lblPhoneNo.text = args.item.phone;
        }
        if ("" == args.item.address) {
            $.locationView.opacity = 0;
            $.locationView.height = 0;
        } else {
            $.locationView.opacity = 1;
            $.locationView.height = Ti.UI.SIZE;
            $.lblLocation.text = args.item.address;
        }
        for (var i = 0; i < args.item.images.length; i++) {
            if (0 == i) var params = {
                imagePath: Alloy.CFG.Urls.imagePathURL + args.item.images[i].path,
                thumbId: i,
                width: args.item.images[i].width,
                height: args.item.images[i].height,
                selected: true,
                loadSelctedItemImageFunction: "loadSlectedItemImage"
            }; else var params = {
                imagePath: Alloy.CFG.Urls.imagePathURL + args.item.images[i].path,
                thumbId: i,
                width: args.item.images[i].width,
                height: args.item.images[i].height,
                selected: false,
                loadSelctedItemImageFunction: "loadSlectedItemImage"
            };
            contentView = Alloy.createController("thumbImages", params).getView();
            $.thumbImagesScrollView.add(contentView);
        }
        $.thumbImagesScrollView.contentWidth = parseInt(args.item.images.length * __.convertDptoPx(55)) + __.convertDptoPx(30);
        $.thumbImagesScrollView.width = __.getScreenWidth() - 70;
        if (Alloy.isTablet) {
            $.thumbImagesScrollView.width = 400;
            $.thumbContainerView.left = parseInt(parseInt(__.getScreenWidth()) - $.thumbContainerView.width) / 2;
            padding = 50;
            $.lblTitle.top = 10;
            __.setNormalFontForTablet($.lblDescription, 16);
        } else padding = 20;
        $.midContainer.applyProperties({
            width: screenWidth,
            contentWidth: screenWidth
        });
        $.infoContainer.applyProperties({
            left: padding,
            right: padding
        });
        loadIcon();
        loadLanguage();
        loadReview(args.item.id);
        isLikedChecking();
        isUnLikedChecking();
        isFavouritedChecking();
        increaseTouchCount();
    };
    Ti.App.addEventListener("loadSlectedItemImage", function() {
        var index = Ti.App.Properties.getString("selectedThumbImageIndex");
        var screenWidth = __.getScreenWidth();
        var screenHeight = __.getScreenHeight();
        var size = [];
        try {
            size.width = args.item.images[index].width;
            size.height = args.item.images[index].height;
        } catch (E) {}
        var tmp = __.getGridPhotoSizeCalWidth(size, screenWidth);
        try {
            $.imProductImage.image = Alloy.CFG.Urls.imagePathURL + args.item.images[index].path;
            size.width = args.item.images[index].width;
            size.height = args.item.images[index].height;
        } catch (E) {}
        $.imProductImage.width = tmp.width;
        $.imProductImage.height = tmp.height;
        $.productImgView.height = screenHeight / 2.2;
        $.thumbImagesScrollView.removeAllChildren();
        for (var i = 0; i < args.item.images.length; i++) {
            if (i == index) var params = {
                imagePath: Alloy.CFG.Urls.imagePathURL + args.item.images[i].path,
                thumbId: i,
                width: args.item.images[i].width,
                height: args.item.images[i].height,
                selected: true,
                loadSelctedItemImageFunction: "loadSlectedItemImage"
            }; else var params = {
                imagePath: Alloy.CFG.Urls.imagePathURL + args.item.images[i].path,
                thumbId: i,
                width: args.item.images[i].width,
                height: args.item.images[i].height,
                selected: false,
                loadSelctedItemImageFunction: "loadSlectedItemImage"
            };
            contentView = Alloy.createController("thumbImages", params).getView();
            $.thumbImagesScrollView.add(contentView);
        }
    });
    var gotoRightMost = function() {
        $.thumbImagesScrollView.scrollToBottom();
    };
    var gotoLeftMost = function() {
        $.thumbImagesScrollView.scrollTo(0, 0);
    };
    var initReivew = function(data) {
        if (data.reviews) {
            var reviews = data.reviews;
            var length = reviews.length;
            var review = null;
            $.reviewView.removeAllChildren();
            for (var i = 0; length > i; i++) {
                review = Alloy.createController("reviewRow", reviews[i]).getView();
                $.reviewView.add(review);
            }
        }
    };
    var doLike = function() {
        if (true == Titanium.Network.online) {
            {
                Ti.App.Properties.getString("userId");
            }
            if (Ti.App.Properties.getString("userId")) {
                var payloadJSON = {
                    appuser_id: Ti.App.Properties.getString("userId")
                };
                var apiArgs = {
                    callbackFunction: callBackDoLike,
                    payload: payloadJSON,
                    url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postLikeData + args.item.id
                };
                loader.post(apiArgs);
            } else {
                var params = {
                    item_id: 0
                };
                {
                    Alloy.createController("userLogin", params).getView();
                }
                dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.needForLoginMesssage);
            }
        } else dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.offlineMessage);
    };
    var callBackDoLike = function(data) {
        $.imgLike.animate({
            width: 45,
            height: 45,
            duration: 100
        }, function() {
            $.imgLike.animate({
                width: 25,
                height: 25,
                duration: 100
            }, function() {
                $.imgLike.width = 20;
                $.imgLike.height = 20;
                myicon = fontIconLoader.getIcon("panacea", "thumbs-up", 35, {
                    color: Alloy.CFG.Colors.ItemIconColor_Dark
                });
                $.imgLike.image = myicon;
                if (data.success) {
                    $.likeCount.text = data.total;
                    Ti.App.fireEvent("refreshGrid");
                } else dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.alreadyLikeMessage);
            });
        });
        Ti.API.info(JSON.stringify(data));
    };
    var doFavourite = function() {
        if (true == Titanium.Network.online) {
            {
                Ti.App.Properties.getString("userId");
            }
            if (Ti.App.Properties.getString("userId")) {
                var payloadJSON = {
                    appuser_id: Ti.App.Properties.getString("userId")
                };
                var apiArgs = {
                    callbackFunction: callBackDoFavourite,
                    payload: payloadJSON,
                    url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postFavouriteData + args.item.id
                };
                loader.post(apiArgs);
            } else {
                var params = {
                    item_id: 0
                };
                {
                    Alloy.createController("userLogin", params).getView();
                }
                dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.needForFavouriteMesssage);
            }
        } else dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.offlineMessage);
    };
    var callBackDoFavourite = function(data) {
        $.imgFavourite.animate({
            width: 40,
            height: 40,
            duration: 100
        }, function() {
            $.imgFavourite.animate({
                width: 25,
                height: 25,
                duration: 100
            }, function() {
                $.imgFavourite.width = 20;
                $.imgFavourite.height = 20;
                var favIcon = fontIconLoader.getIcon("panacea", "star", 35, {
                    color: Alloy.CFG.Colors.MainColor_Dark
                });
                $.imgFavourite.image = favIcon;
                data.success || dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.alreadyFavouriteMessage);
            });
        });
    };
    var loadIcon = function() {
        var likeIcon = fontIconLoader.getIcon("panacea", "thumbs-up", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        $.imgLike.image = likeIcon;
        fontIconLoader.getIcon("panacea", "thumbs-down", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        fontIconLoader.getIcon("panacea", "comment", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        var phoneIcon = fontIconLoader.getIcon("panacea", "phone-square-pin", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        $.imgPhone.image = phoneIcon;
        var locationIcon = fontIconLoader.getIcon("panacea", "address-square-pin", 35, {
            color: Alloy.CFG.Colors.ItemIconColor
        });
        $.imgLocation.image = locationIcon;
        var reviewIcon = fontIconLoader.getIcon("panacea", "pencil-square", 35, {
            color: Alloy.CFG.Colors.IconColor
        });
        $.imgWriteReviewIcon.image = reviewIcon;
        var backIcon = fontIconLoader.getIcon("panacea", "back", 35, {
            color: Alloy.CFG.Colors.IconWhite
        });
        $.imgBack.image = backIcon;
        var favIcon = fontIconLoader.getIcon("panacea", "star", 35, {
            color: Alloy.CFG.Colors.CatIconColor
        });
        $.imgFavourite.image = favIcon;
        var capIcon = fontIconLoader.getIcon("panacea", "camera", 35, {
            color: Alloy.CFG.Colors.CatIconColor
        });
        $.imgCapture.image = capIcon;
    };
    var loadLanguage = function() {
        $.lblWriteReview.text = Alloy.CFG.Languages.lblWriteReview;
    };
    var isLikedChecking = function() {
        if (true == Titanium.Network.online) {
            var payloadJSON = {
                appuser_id: Ti.App.Properties.getString("userId")
            };
            var apiArgs = {
                callbackFunction: callBackIsLikedChecking,
                payload: payloadJSON,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postIsLiked + args.item.id
            };
            loader.post(apiArgs);
        }
    };
    var callBackIsLikedChecking = function(feeds) {
        if ("yes" == feeds.status) {
            myicon = fontIconLoader.getIcon("panacea", "thumbs-up", 35, {
                color: Alloy.CFG.Colors.ItemIconColor_Dark
            });
            $.imgLike.image = myicon;
            $.likeCount.text = feeds.total;
        }
    };
    var isUnLikedChecking = function() {
        if (true == Titanium.Network.online) {
            var payloadJSON = {
                appuser_id: Ti.App.Properties.getString("userId")
            };
            var apiArgs = {
                callbackFunction: callBackIsUnLikedChecking,
                payload: payloadJSON,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postIsUnLiked + args.item.id
            };
            loader.post(apiArgs);
        }
    };
    var callBackIsUnLikedChecking = function(feeds) {
        "yes" == feeds.status && (myicon = fontIconLoader.getIcon("panacea", "thumbs-down", 35, {
            color: Alloy.CFG.Colors.ItemIconColor_Dark
        }));
    };
    var isFavouritedChecking = function() {
        if (true == Titanium.Network.online) {
            var payloadJSON = {
                appuser_id: Ti.App.Properties.getString("userId")
            };
            var apiArgs = {
                callbackFunction: callBackIsFavouritedChecking,
                payload: payloadJSON,
                url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postIsFavourited + args.item.id
            };
            loader.post(apiArgs);
        }
    };
    var callBackIsFavouritedChecking = function(feeds) {
        if ("yes" == feeds.status) {
            myicon = fontIconLoader.getIcon("panacea", "star", 35, {
                color: Alloy.CFG.Colors.MainColor_Dark
            });
            $.imgFavourite.image = myicon;
        }
    };
    var increaseTouchCount = function() {
        if (null != Ti.App.Properties.getString("userId")) var payloadJSON = {
            appuser_id: Ti.App.Properties.getString("userId")
        }; else var payloadJSON = {
            appuser_id: 0
        };
        var loaderArgs = {
            callbackFunction: callBackIncreaseTouchCount,
            url: Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postTouchData + args.item.id,
            payload: payloadJSON
        };
        loader.post(loaderArgs);
    };
    var callBackIncreaseTouchCount = function(feeds) {
        console.log(feeds.success ? "Touch Count Successfully Increased." : "Gor Error when insert touch count.");
    };
    $.itemDetail.addEventListener("open", function() {
        loadingWindow.endLoading();
        init();
    });
    $.imgCapture.addEventListener("click", function() {
        Ti.Media.showCamera({
            showControls: true,
            mediaTypes: Ti.Media.MEDIA_TYPE_PHOTO,
            autohide: true,
            allowEditing: true,
            success: function(event) {
                Ti.API.info("success! event: " + JSON.stringify(event));
                var image = event.media;
                var xhr = Titanium.Network.createHTTPClient();
                xhr.onerror = function(e) {
                    Ti.API.info("IN ERROR " + e.error);
                };
                xhr.onload = function() {
                    Ti.API.info("IN ONLOAD " + this.status + " readyState " + this.readyState);
                    setTimeout(function() {
                        init();
                    }, 1e4);
                };
                xhr.onsendstream = function(e) {
                    Ti.API.info("ONSENDSTREAM - PROGRESS: " + e.progress + " " + this.status + " " + this.readyState);
                };
                xhr.open("POST", "http://nkdproductions.com/turnup/app/cameraupload.php");
                xhr.setRequestHeader("Connection", "close");
                var payload = {
                    item_id: args.item.id,
                    type: "item",
                    width: "475",
                    height: "316",
                    media: image
                };
                xhr.send(payload);
            },
            cancel: function() {},
            error: function() {}
        });
    });
    __defers["$.__views.mainTitle!click!closeWindow"] && $.__views.mainTitle.addEventListener("click", closeWindow);
    __defers["$.__views.imgBack!click!closeWindow"] && $.__views.imgBack.addEventListener("click", closeWindow);
    __defers["$.__views.FavouriteView!click!doFavourite"] && $.__views.FavouriteView.addEventListener("click", doFavourite);
    __defers["$.__views.imProductImage!click!openSlider"] && $.__views.imProductImage.addEventListener("click", openSlider);
    __defers["$.__views.imgLeft!click!gotoLeftMost"] && $.__views.imgLeft.addEventListener("click", gotoLeftMost);
    __defers["$.__views.imgRight!click!gotoRightMost"] && $.__views.imgRight.addEventListener("click", gotoRightMost);
    __defers["$.__views.imgLike!click!doLike"] && $.__views.imgLike.addEventListener("click", doLike);
    __defers["$.__views.likeCount!click!doLike"] && $.__views.likeCount.addEventListener("click", doLike);
    __defers["$.__views.writeItemReview!click!openReview"] && $.__views.writeItemReview.addEventListener("click", openReview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;