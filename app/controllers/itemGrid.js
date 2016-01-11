var __ = require('platformSupport');
var myAnimation = require('animation');
var loadingWindow = require("loadingWindow");
var args = arguments[0] || {};
var ITEM_WIDTH = 160;
var NUM_OF_COL = 0;
var SCREEN_WIDTH = 0;
var SCREEN_HEIGHT = 0;
var EXTRA_PADDING = 0;
var ITEMS_HEIGHT = [];
var ACTUAL_TOTAL_WIDTH = 0;
var loader = require("loader");
var fontIconLoader = require("icomoonlib");
var top = 30;

var calculateCol = function()
{
	NUM_OF_COL = parseInt(SCREEN_WIDTH / ITEM_WIDTH);	
	EXTRA_PADDING = SCREEN_WIDTH - (NUM_OF_COL * ITEM_WIDTH);
	
	ITEM_WIDTH += (EXTRA_PADDING / NUM_OF_COL);
	EXTRA_PADDING %= NUM_OF_COL;
		
	if(NUM_OF_COL != null) {
		for(var i=0; i<NUM_OF_COL; i++)
		{
			ITEMS_HEIGHT.push(0);
		}
	}
	ACTUAL_TOTAL_WIDTH = SCREEN_WIDTH - EXTRA_PADDING;	
};

var closeWindow = function()
{
	Ti.App.Properties.setString('isWinOpen', 'no');
	myAnimation.out($.itemGrid);
};

var getColNum = function()
{
	var col = 0;
	for(var i=1; i<NUM_OF_COL; i++)
	{
		if(ITEMS_HEIGHT[col] > ITEMS_HEIGHT[i]) {
			col = i;
		}
	}
	
	return col;
}; 


var itemGridLayout = function(params) 
{
	var layout = Alloy.createController('itemGridLayout', params).getView();
	return layout;
};

var addView = function(view){
	
	var col = getColNum();
	var leftPadding = (col) * ITEM_WIDTH;
	
	view.left = leftPadding;
	view.top = ITEMS_HEIGHT[col];
	ITEMS_HEIGHT[col] += view.iHeight;
	
	$.itemGridView.add(view);
};

var init = function(){
	
	if (__.isiOS7Plus()) {
		$.AppWrapper.top = 20;
	}
	
	if(Alloy.isTablet){
		ITEM_WIDTH = 200;
	}
	
	SCREEN_WIDTH = __.getScreenWidth();
	SCREEN_HEIGHT = __.getScreenHeight();
	
	calculateCol();
	
	$.itemGridView.contentWidth = ACTUAL_TOTAL_WIDTH;
	$.itemGridView.width = ACTUAL_TOTAL_WIDTH;
	$.itemGridView.left = EXTRA_PADDING/2;
	
	$.mainTitle.text = args.name;
	// get items from server
	for(var i=0; i<args.items.length; i++){
		var scale = {
				width : args.items[i].images[0].width,
				height :  args.items[i].images[0].height
		};
		Ti.API.info(Alloy.CFG.Urls.imagePathURL + args.items[i].images[0].path);
		var params = {
			image : Alloy.CFG.Urls.imagePathURL + args.items[i].images[0].path,
			title : args.items[i].name,
			like : i * 21,
			msg : i * 13,
			scale : scale,
			viewWidth : ITEM_WIDTH,
			item : args.items[i]
		};
		
		addView(itemGridLayout(params));
		
	}
	loadIcon();
};


Ti.App.addEventListener('refreshGrid',function(e)
{
	console.log(">>>>> Refresh Item Grid <<<<<<");
	var loaderArgs = {
		callbackFunction : refreshItemGrid,
		url :  Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getItemsByCategoryId + args.id + "/item/all"
	};
	console.log( Alloy.CFG.Urls.baseURL + Alloy.CFG.Urls.getItemsByCategoryId + args.id + "/item/all");
	loader.get(loaderArgs);
});

var refreshItemGrid = function(feeds)
{
	args = "";
	args = feeds;
	$.itemGridView.removeAllChildren();
	
	NUM_OF_COL = 0;
	SCREEN_WIDTH = 0;
	SCREEN_HEIGHT = 0;
	EXTRA_PADDING = 0;
	ITEMS_HEIGHT = [];
	ACTUAL_TOTAL_WIDTH = 0;
	
	if(Alloy.isTablet){
		ITEM_WIDTH = 200;
	}else{
		ITEM_WIDTH = 160;
	}
	
	init();
};

var loadIcon = function()
{
	var backIcon = fontIconLoader.getIcon("panacea","back",35,{color:Alloy.CFG.Colors.IconWhite});
	$.imgBack.image = backIcon;
};

$.itemGrid.addEventListener('open', function()
{
	init();
	loadingWindow.endLoading();
});
