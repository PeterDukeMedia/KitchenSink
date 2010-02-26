var win = Titanium.UI.currentWindow;

var imageView = Titanium.UI.createImageView({
	height:200,
	width:200,
	top:20,
	left:10,
	backgroundColor:'#999'
});

win.add(imageView);

Titanium.Media.openPhotoGallery({

	success:function(event)
	{
		var cropRect = event.cropRect;
		var image = event.media;
		var thumbnail = event.thumbnail;
		
		// set image view
		imageView.image = image;
		
		Titanium.API.info('PHOTO GALLERY SUCCESS cropRect.x ' + cropRect.x + ' cropRect.y ' + cropRect.y  + ' cropRect.height ' + cropRect.height + ' cropRect.width ' + cropRect.width);
		
	},
	cancel:function()
	{

	},
	error:function(error)
	{
	},
	allowImageEditing:true,
});
