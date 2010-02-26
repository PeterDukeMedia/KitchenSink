var win = Titanium.UI.currentWindow;

var _WhenStillImgs = [];
var _WhenMovingImgs = [];

_WhenStillImgs.push('../images/Kicking00.png');
_WhenStillImgs.push('../images/Kicking20.png');

_WhenMovingImgs.push('../images/Kicking00.png');
_WhenMovingImgs.push('../images/Kicking14.png');

var cartoonGuy =  Titanium.UI.createImageView({
	height:200,
	width:200,
	images:_WhenStillImgs,
	duration:100, // in milliseconds, the time before next frame is shown
	repeatCount:0,  // 0 means animation repeats indefinitely, use > 1 to control repeat count
	top:30
});

win.add(cartoonGuy);

cartoonGuy.start();

cartoonGuy.addEventListener('touchstart', function(e)
{
	cartoonGuy.stop();
	cartoonGuy.images=_WhenMovingImgs;	
	cartoonGuy.start();
});

cartoonGuy.addEventListener('touchmove', function(e)
{
	cartoonGuy.animate({center:{x:e.x,y:e.y}, duration:1});
});

cartoonGuy.addEventListener('touchend', function(e)
{
	Ti.API.info("touch stop called");
	cartoonGuy.stop();
	cartoonGuy.images=_WhenStillImgs;
	cartoonGuy.start();	
});