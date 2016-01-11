var args = arguments[0] || {};
var __ = require('platformSupport');
var psAnimation = require('animation');
var fontIconLoader = require("icomoonlib");
var loader = require("loader");
var dialogBox = require("psdialog");
var loadingWindow = require('loadingWindow');

if (__.isiOS7Plus()) {
	$.AppWrapper.top = 20;
}

var loadReview = function(itemId)
{
	var loaderArgs = {
		callbackFunction : initReivew,
		url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getItemDetailById + itemId
	};
	loader.get(loaderArgs);
};

var openSlider = function()
{
	var contentView = Alloy.createController("slider", args).getView();
	psAnimation.in(contentView);
};

var closeWindow = function()
{
	psAnimation.out($.itemDetail);
};


var openInquiry = function()
{
	
	loadingWindow.startLoading();
	
	var params = {
		item_id : args.item.id
	};
	var contentView = Alloy.createController("inquiry",params).getView();
	psAnimation.in(contentView);
};

var openReview = function()
{
	loadingWindow.startLoading();
	var userId = Ti.App.Properties.getString("userId");
	var params = {
		item_id : args.item.id,
		loadReview : loadReview
	};
	if(userId){	
		var contentView = Alloy.createController("review",params).getView();
		psAnimation.in(contentView);
	}else{
		var contentView = Alloy.createController("userLogin",params).getView();
		psAnimation.in(contentView);	
	}
};

var init = function() 
{
	var padding = "";
	var screenWidth = __.getScreenWidth();
	var screenHeight = __.getScreenHeight();
	var size = []; 
	size.width = args.item.images[0].width;
	size.height = args.item.images[0].height;
	
	var tmp = __.getGridPhotoSizeCalWidth(size,screenWidth);
	
	loadingWindow.endLoading();
	
	

	
	$.imProductImage.image = Alloy.CFG.Urls.imagePathURL + args.item.images[0].path;
	//alert(tmp.width + tmp.height);                        
	$.imProductImage.width = tmp.width;
	$.imProductImage.height = tmp.height;
	$.productImgView.height = screenHeight / 2.2;
	
	$.lblTitle.text = args.item.name;
	$.lblDescription.text = args.item.description;
	$.likeCount.text = args.item.like_count;
	//$.unLikeCount.text = args.item.unlike_count;
	//$.reviewCount.text = args.item.review_count;
	
	if(args.item.phone == "") {
		$.phoneView.opacity = 0;
		$.phoneView.height = 0;
	} else {
		$.phoneView.opacity = 1;
		$.phoneView.height = Ti.UI.SIZE;
		$.lblPhoneNo.text = args.item.phone;
	}
	
	if(args.item.address == "") {
		$.locationView.opacity=0;
		$.locationView.height=0;
	} else {
		$.locationView.opacity=1;
		$.locationView.height=Ti.UI.SIZE;
		$.lblLocation.text = args.item.address;
	}

	for(var i=0; i< args.item.images.length; i++)
	{
		
		if(i==0) {
			var params = {
				imagePath : Alloy.CFG.Urls.imagePathURL +  args.item.images[i].path,
				thumbId : i,
				width : args.item.images[i].width,
				height : args.item.images[i].height,
				selected : true,
				loadSelctedItemImageFunction : 'loadSlectedItemImage'
			};
		} else {
			var params = {
				imagePath : Alloy.CFG.Urls.imagePathURL +  args.item.images[i].path,
				thumbId : i,
				width : args.item.images[i].width,
				height : args.item.images[i].height,
				selected : false,
				loadSelctedItemImageFunction : 'loadSlectedItemImage'
			};
		}
		
		contentView = Alloy.createController("thumbImages", params).getView();
		$.thumbImagesScrollView.add(contentView);	
		
	}
	
	if(!OS_IOS) {
		$.thumbImagesScrollView.contentWidth = parseInt(args.item.images.length * __.convertDptoPx(55)) + __.convertDptoPx(30);
		//$.socialView.width = $.imProductImage.width;
	} else {
		$.thumbImagesScrollView.contentWidth = parseInt(args.item.images.length * 55) + 30;
	}
	
	$.thumbImagesScrollView.width = __.getScreenWidth() - 70;
	
	if(Alloy.isTablet) {
		$.thumbImagesScrollView.width = 400;
		$.thumbContainerView.left = parseInt((parseInt(__.getScreenWidth()) - $.thumbContainerView.width))/2;

		padding = 50;
		$.lblTitle.top=10;
		__.setNormalFontForTablet($.lblDescription,16);
	} else {
		padding = 20;
	}
		
	$.midContainer.applyProperties({
		width : screenWidth,
		contentWidth : screenWidth
	});
	
	$.infoContainer.applyProperties({
		left : padding,
		right : padding
	});
	
	
	loadIcon();
	loadLanguage();
	loadReview(args.item.id);
	isLikedChecking();
	isUnLikedChecking();
	isFavouritedChecking();
	increaseTouchCount();
	
	//psAnimation.slowlyAppear($.imProductImage);
	//psAnimation.slowlyAppear($.socialView);
	//psAnimation.slowlyAppear($.lblTitle);
	//psAnimation.slowlyAppear($.lblDescription);
	//psAnimation.slowlyAppear($.phoneView);
	//psAnimation.slowlyAppear($.locationView);
	//psAnimation.slowlyAppear($.btnSendInquiry);
	//psAnimation.slowlyAppear($.writeItemReview);
	//psAnimation.slowlyAppear($.reviewView);
	
};

Ti.App.addEventListener('loadSlectedItemImage',function()
{
	var index = Ti.App.Properties.getString("selectedThumbImageIndex");
	var screenWidth = __.getScreenWidth();
	var screenHeight = __.getScreenHeight();
	var size = []; 
	
	try{
		size.width = args.item.images[index].width;
		size.height = args.item.images[index].height;
	}catch(E){}
	
	var tmp = __.getGridPhotoSizeCalWidth(size,screenWidth);
	
	try{
		$.imProductImage.image = Alloy.CFG.Urls.imagePathURL + args.item.images[index].path;
		size.width = args.item.images[index].width;
		size.height = args.item.images[index].height;
	}catch(E){}
	
	$.imProductImage.width = tmp.width;
	$.imProductImage.height = tmp.height;

	
	$.productImgView.height = screenHeight / 2.2;
	
	//psAnimation.slowlyAppear($.imProductImage);
	
	$.thumbImagesScrollView.removeAllChildren();
	for(var i=0; i< args.item.images.length; i++) 
	{
		
		if(i == index){
			var params = {
				imagePath : Alloy.CFG.Urls.imagePathURL +  args.item.images[i].path,
				thumbId : i,
				width : args.item.images[i].width,
				height : args.item.images[i].height,
				selected : true,
				loadSelctedItemImageFunction : 'loadSlectedItemImage'
			};
		} else {
			var params = {
				imagePath : Alloy.CFG.Urls.imagePathURL +  args.item.images[i].path,
				thumbId : i,
				width : args.item.images[i].width,
				height : args.item.images[i].height,
				selected : false,
				loadSelctedItemImageFunction : 'loadSlectedItemImage'
			};
		}
		
		contentView = Alloy.createController("thumbImages", params).getView();
		$.thumbImagesScrollView.add(contentView);	
	}

});

var gotoRightMost = function()
{
	$.thumbImagesScrollView.scrollToBottom();
};

var gotoLeftMost = function()
{
	$.thumbImagesScrollView.scrollTo(0,0);
};

var initReivew = function(data)
{
	
	if(data.reviews){
		var reviews = data.reviews;
		
		var length = reviews.length;
		
		var review = null;
		
		$.reviewView.removeAllChildren();
		
		//$.reviewCount.text = length;
		
		for(var i=0; i<length; i++){
			
			review = Alloy.createController('reviewRow', reviews[i]).getView();
			
			$.reviewView.add(review);		
		}
	}
	
};

var doLike = function()
{
	if(Titanium.Network.online == true) {
		var uid = Ti.App.Properties.getString("userId");
		if(!Ti.App.Properties.getString("userId")){
		 	
		 	var params = {
				item_id : 0,
			};
		 	var contentView = Alloy.createController("userLogin",params).getView();
			//psAnimation.in(contentView);
			
		 	dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.needForLoginMesssage);
		} else {
			var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
			
			var apiArgs = {
				callbackFunction : callBackDoLike,
				payload : payloadJSON,
				url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postLikeData + args.item.id
			};
			loader.post(apiArgs);
		}	
				
	}else{
		dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.offlineMessage);
	}
};

var callBackDoLike = function(data)
{
	$.imgLike.animate({
		width : 45,
		height : 45,
		duration : 100
	}, function(){
		$.imgLike.animate({
			width : 25,
			height : 25,
			duration : 100
		}, function(){
			
			$.imgLike.width = 20;
			$.imgLike.height = 20;
			
			myicon = fontIconLoader.getIcon("panacea","thumbs-up",35,{color:Alloy.CFG.Colors.ItemIconColor_Dark});
			$.imgLike.image = myicon;
			
			if(data.success){
				$.likeCount.text = data.total;
				Ti.App.fireEvent('refreshGrid');
			}else{
				dialogBox.loadCustomDialog("Like", Alloy.CFG.Languages.alreadyLikeMessage);
			}
		});
	});
	Ti.API.info(JSON.stringify(data));
};

var doUnLike = function()
{
	if(Titanium.Network.online == true) {
		var uid = Ti.App.Properties.getString("userId");
		if(!Ti.App.Properties.getString("userId")){
			
			var params = {
				item_id : 0,
			};
		 	var contentView = Alloy.createController("userLogin",params).getView();
			//psAnimation.in(contentView);
		 	dialogBox.loadCustomDialog("UnLike", Alloy.CFG.Languages.needForLoginUnLikeMesssage);
		 	
		} else {
			var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
			var apiArgs = {
				callbackFunction : "",//callBackDoUnLike,
				payload : payloadJSON,
				url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postUnLikeData + args.item.id
			};
			loader.post(apiArgs);
		}	
				
	}else{
		dialogBox.loadCustomDialog("UnLike", Alloy.CFG.Languages.offlineMessage);
	}
};

var callBackDoUnLike = function(data)
{
	$.imgUnLike.animate({
		width : 45,
		height : 45,
		duration : 100
	}, function(){
		$.imgUnLike.animate({
			width : 25,
			height : 25,
			duration : 100
		}, function(){
			
			$.imgUnLike.width = 20;
			$.imgUnLike.height = 20;
			
			myicon = fontIconLoader.getIcon("panacea","thumbs-down",35,{color:Alloy.CFG.Colors.ItemIconColor_Dark});
			$.imgUnLike.image = myicon;
			
			if(data.success){
				//$.unLikeCount.text = data.total;
				Ti.App.fireEvent('refreshGrid');
			}else{
				dialogBox.loadCustomDialog("UnLike", Alloy.CFG.Languages.alreadyLikeMessage);
			}
		});
	});
	Ti.API.info(JSON.stringify(data));
};

var doFavourite = function()
{
	if(Titanium.Network.online == true) {
		var uid = Ti.App.Properties.getString("userId");
		if(!Ti.App.Properties.getString("userId")) {
		 	
		 	var params = {
				item_id : 0,
			};
		 	
		 	var contentView = Alloy.createController("userLogin",params).getView();
			//psAnimation.in(contentView);	
			dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.needForFavouriteMesssage);
		} else {
			var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
			var apiArgs = {
				callbackFunction : callBackDoFavourite,
				payload : payloadJSON,
				url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postFavouriteData + args.item.id
			};
			loader.post(apiArgs);
		}	
	} else {
		dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.offlineMessage);
	}
};

var callBackDoFavourite = function(data)
{
	$.imgFavourite.animate({
		width : 40,
		height : 40,
		duration : 100
	}, function(){
		$.imgFavourite.animate({
			width : 25,
			height : 25,
			duration : 100
		}, function(){
			
			$.imgFavourite.width = 20;
			$.imgFavourite.height = 20;
			
			var favIcon = fontIconLoader.getIcon("panacea","star",35,{color:Alloy.CFG.Colors.MainColor_Dark});
			$.imgFavourite.image = favIcon;
			
			if(!data.success) {
				dialogBox.loadCustomDialog("Favourite", Alloy.CFG.Languages.alreadyFavouriteMessage);
			}
		});
	});
};

var loadIcon = function()
{
	var likeIcon = fontIconLoader.getIcon("panacea","thumbs-up",35,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgLike.image = likeIcon;
	
	var unLikeIcon = fontIconLoader.getIcon("panacea","thumbs-down",35,{color:Alloy.CFG.Colors.ItemIconColor});
	//$.imgUnLike.image = unLikeIcon;
	
	var commentIcon = fontIconLoader.getIcon("panacea","comment",35,{color:Alloy.CFG.Colors.ItemIconColor});
	//$.imgReview.image = commentIcon;
	
	var phoneIcon = fontIconLoader.getIcon("panacea","phone-square-pin",35,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgPhone.image = phoneIcon;
	
	var locationIcon = fontIconLoader.getIcon("panacea","address-square-pin",35,{color:Alloy.CFG.Colors.ItemIconColor});
	$.imgLocation.image = locationIcon;
	
	var reviewIcon = fontIconLoader.getIcon("panacea","pencil-square",35,{color:Alloy.CFG.Colors.IconColor});
	$.imgWriteReviewIcon.image = reviewIcon;
	
	var backIcon = fontIconLoader.getIcon("panacea","back",35,{color:Alloy.CFG.Colors.IconWhite});
	$.imgBack.image = backIcon;
	
	var favIcon = fontIconLoader.getIcon("panacea","star",35,{color:Alloy.CFG.Colors.CatIconColor});
	$.imgFavourite.image = favIcon;
	
	var capIcon = fontIconLoader.getIcon("panacea","camera",35,{color:Alloy.CFG.Colors.CatIconColor});
	$.imgCapture.image = capIcon;
};

var loadLanguage = function()
{
	//$.btnSendInquiry.title = Alloy.CFG.Languages.btnSendInquiry;
	$.lblWriteReview.text = Alloy.CFG.Languages.lblWriteReview;
};

var isLikedChecking = function()
{
	if(Titanium.Network.online == true) {
	
		var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
		
		var apiArgs = {
			callbackFunction : callBackIsLikedChecking,
			payload : payloadJSON,
			url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postIsLiked + args.item.id
		};
		loader.post(apiArgs);
	}
};


var callBackIsLikedChecking = function(feeds)
{
	if(feeds.status == "yes") {
		myicon = fontIconLoader.getIcon("panacea","thumbs-up",35,{color:Alloy.CFG.Colors.ItemIconColor_Dark});
		$.imgLike.image = myicon;
		
		$.likeCount.text = feeds.total;
	}
};

var isUnLikedChecking = function()
{
	if(Titanium.Network.online == true) {
	
		var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
		
		var apiArgs = {
			callbackFunction : callBackIsUnLikedChecking,
			payload : payloadJSON,
			url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postIsUnLiked + args.item.id
		};
		loader.post(apiArgs);
	}
};

var callBackIsUnLikedChecking = function(feeds)
{
	if(feeds.status == "yes") {
		myicon = fontIconLoader.getIcon("panacea","thumbs-down",35,{color:Alloy.CFG.Colors.ItemIconColor_Dark});
		//$.imgUnLike.image = myicon;
	}
};

var isFavouritedChecking = function()
{
	if(Titanium.Network.online == true) {
	
		var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
		
		var apiArgs = {
			callbackFunction : callBackIsFavouritedChecking,
			payload : payloadJSON,
			url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postIsFavourited + args.item.id
		};
		loader.post(apiArgs);
	}
};

var callBackIsFavouritedChecking = function(feeds)
{
	if(feeds.status == "yes") {
		myicon = fontIconLoader.getIcon("panacea","star",35,{color:Alloy.CFG.Colors.MainColor_Dark});
		$.imgFavourite.image = myicon;
	}
};

var increaseTouchCount = function()
{
	if(Ti.App.Properties.getString("userId") != null ){
		var payloadJSON = {"appuser_id": Ti.App.Properties.getString("userId")};
	} else {
		var payloadJSON = {"appuser_id": 0};
	}
	
	var loaderArgs = {
		callbackFunction : callBackIncreaseTouchCount,
		url : Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.postTouchData + args.item.id,
		payload : payloadJSON
	};
	loader.post(loaderArgs);
};

var callBackIncreaseTouchCount = function(feeds)
{
	if(feeds.success) {
		console.log("Touch Count Successfully Increased.");
	} else {
		console.log("Gor Error when insert touch count.");
	}
};


$.itemDetail.addEventListener('open', function(){
	loadingWindow.endLoading();
	init();
});
var upload = Titanium.UI.createAlertDialog({title: 'Photo Upload',message: 'We are uploading your photo...Please wait.',buttonNames: ['Dismiss']});
$.imgCapture.addEventListener('click', function(e){
	Ti.Media.showCamera({
        showControls:true,  
        mediaTypes:Ti.Media.MEDIA_TYPE_PHOTO,
        autohide:true, 
        allowEditing:true,
        success:function(event) {
            Ti.API.info("success! event: " + JSON.stringify(event));
		    var image = event.media;
		    Ti.API.info(image.height +' x '+ image.width);
 			var imageView = Titanium.UI.createImageView({
	            image:image,
	            width:375,
	            height:500
	        });
 
	        image = imageView.toImage();
	        Ti.API.info(image.height + " x " + image.width);
	      	upload.show();
		    var xhr = Titanium.Network.createHTTPClient();
		    xhr.onerror = function(e)
		    {
		        Ti.API.info('IN ERROR ' + e.error);
		    };
		    xhr.onload = function()
		    {
		        Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState);
		        setTimeout(function (){
					init();
		         }, 10000);
		    };
		    xhr.onsendstream = function(e)
		    {
		        //ind.value = e.progress ;
		        Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress+' '+this.status+' '+this.readyState);
		        
		    };
		    // open the client
		    xhr.open('POST','http://nkdproductions.com/turnup/app/cameraupload.php');
		    xhr.setRequestHeader("Connection", "close");
		    // send the data
		    var payload={
				"item_id":args.item.id,
				"type":"item",
				"width": "475",
				"height":"316",
				"media":image
				};
		    xhr.send(payload);
		    
        },
        cancel:function() { },
        error:function(error) {}
    });
    upload.close();
});


// var jpgcompressor = require('com.sideshowcoder.jpgcompressor');
// Ti.API.info('module is => ' + jpgcompressor);
// 
// jpgcompressor.setCompressSize(102400);
// jpgcompressor.setWorstCompressQuality(0.65);
// 
// var iv = Ti.UI.createImageView({
  // top: 60,
  // left: 0
// });
// 
// 
// 
// $.imgCapture.addEventListener('click', function(e){
       // Ti.Media.showCamera({
        // showControls:true,  
        // mediaTypes:Ti.Media.MEDIA_TYPE_PHOTO,
        // autohide:true, 
        // allowEditing:true,
        // success:function(event) {
            // Ti.API.info("success! event: " + JSON.stringify(event));
		    // var image = event.media;
			// cImage = jpgcompressor.scale(image, 960, 960);
  			// iv.setImage(jpgcompressor.compress(cImage));
  			// image = jpgcompressor.compress(cImage);
		    // var xhr = Titanium.Network.createHTTPClient();
// 		
		    // xhr.onerror = function(e)
		    // {
		        // Ti.API.info('IN ERROR ' + e.error);
		    // };
		    // xhr.onload = function()
		    // {
		        // Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState);
		        // setTimeout(function (){
					// init();
		         // }, 10000);
		    // };
		    // xhr.onsendstream = function(e)
		    // {
		        // //ind.value = e.progress ;
		        // Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress+' '+this.status+' '+this.readyState);
		    // };
		    // // open the client
		    // xhr.open('POST','http://nkdproductions.com/turnup/app/cameraupload.php');
		    // xhr.setRequestHeader("Connection", "close");
		    // // send the data
		    // var payload={
				// "item_id":args.item.id,
				// "type":"item",
				// "width": "475",
				// "height":"316",
				// "media":image
				// };
		    // xhr.send(payload);
// 		    
        // },
        // cancel:function() { },
        // error:function(error) {}
    // });
   // });



