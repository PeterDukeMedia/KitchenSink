var win = Titanium.UI.currentWindow;

var ind=Titanium.UI.createProgressBar({
	width:200,
	height:50,
	min:0,
	max:1,
	value:0,
	style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
	top:10,
	message:'Uploading Image',
	font:{fontSize:12, fontWeight:'bold'},
	color:'#888'
});

win.add(ind);
ind.show();

Titanium.Media.openPhotoGallery({

	success:function(event)
	{
		var image = event.media;
	
		var xhr = Titanium.Network.createHTTPClient();

		xhr.onerror = function(e)
		{
			Ti.API.info('IN ERROR ' + e.error);
		};
		xhr.onload = function()
		{
			Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState);
		};
		xhr.onsendstream = function(e)
		{
			ind.value = e.progress ;
			Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress);
		}
		// open the client
		xhr.open('POST','https://twitpic.com/api/uploadAndPost');

		// send the data
		xhr.send({media:image,username:'fgsandford1000',password:'sanford1000',message:'check me out'});
		
	},
	cancel:function()
	{

	},
	error:function(error)
	{
	},
	allowImageEditing:true,
});
