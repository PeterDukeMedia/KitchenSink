var win = Titanium.UI.currentWindow;
win.backgroundImage = '../images/chip.jpg';

var section1Template = {
	backgroundColor:'#670000',
	selectedBackgroundColor:'#670000',
	selectionStyle:'none',
	color:'#fff',
	layout:[
	{type:'text', name:'item', color:'white', fontSize:20, fontFamily:'Marker Felt',fontWeight:'bold', left:10, top:3, height:30, width:150},
	{type:'text', name:'cost', color:'white', fontSize:14, left:10, top:26, height:25, width:150},
	{type:'image', name:'addImage', height:27, width:27, top:10, right:10}
	]		
}	
var section1Data = [
	{item:'Burger', cost:'$1.99',addImage:'../images/addDefault.png'},
	{item:'Cheese Burger', cost:'$2.99', addImage:'../images/addDefault.png'},
	{item:'Double Cheese', cost:'$3.99', addImage:'../images/addDefault.png'},
	{item:'Salad', cost:'$0.99', addImage:'../images/addDefault.png'}
	
	
]
var section1 = Titanium.UI.iPhone.createGroupedSection({
	template:section1Template,
	type:'input',
	data:section1Data,
	color:'white',
	footer:'Footer',
	header:'Header',
	rowHeight:50
});
var selectedData = {};

//
// handle click events and toggle layout based on click
//
section1.addEventListener('click', function(e)
{
	var row = e.row;
	Titanium.API.info('layout ' + e.layoutName)
	if (e.layoutName == 'addImage')
	{
		selectedData[e.rowData.item] = e.rowData;
		var data = {
			backgroundColor:'#440000',
			selectedBackgroundColor:'#440000',
			item:e.rowData.item,
			cost:e.rowData.cost,
			minusImage:'../images/minusDefault.png',
			layout:[
	{type:'text', name:'item', color:'white', fontSize:20, fontWeight:'bold', left:50, top:3, height:30, width:150},
	{type:'text', name:'cost', color:'white', fontSize:14, left:50, top:23, height:25, width:150},
	{type:'image', name:'minusImage', height:27, width:27, top:10, left:10}
			]		
		};

		section1.updateRow(row,data,{
			animationStyle:Titanium.UI.iPhone.RowAnimationStyle.LEFT
		});
		
	}
	else if (e.layoutName == 'minusImage')
	{
		var data = {
			backgroundColor:'#670000',
			selectedBackgroundColor:'#670000',				
			item:selectedData[e.rowData.item].item,
			cost:selectedData[e.rowData.item].cost,
			addImage:'../images/addDefault.png',
			layout:[
	{type:'text', name:'item', color:'white', fontSize:20, fontWeight:'bold', left:10, top:3, height:30, width:150},
	{type:'text', name:'cost', color:'white', fontSize:14, left:10, top:23, height:25, width:150},
	{type:'image', name:'addImage', height:27, width:27, top:10, right:10}
			]		
		};

		section1.updateRow(row,data,{
			animationStyle:Titanium.UI.iPhone.RowAnimationStyle.LEFT
		});
		
		selectedData[e.rowData.item] = {};
	}
});

// create a template for our buttons
var section2Template = {
	backgroundColor:'#670000',
	selectedBackgroundColor:'#440000',
	color:'#fff',
	rowHeight:45,
	layout:[
	{type:'text', name:'button', color:'white', fontSize:20, fontWeight:'bold', left:9, top:10, height:30, width:100},
	]		
};	

// button data
var section2Data = [
	{button:'Button 1'},
	{button:'Row-level Layout Override', addImage:'images/addDefault.png',layout:[{
		type:'text', 
		name:'button', 
		color:'white', 
		fontSize:14, 
		fontWeight:'normal', 
		left:35, 
		top:11, 
		height:23, 
		width:200
	}, {type:'image', name:'addImage', height:27, width:27, top:8, left:5}]},
	{button:'Button 3'}		
];

// button section
var section2 = Titanium.UI.iPhone.createGroupedSection({
	template:section2Template,
	type:'input',
	data:section2Data
});

var groupedView = Titanium.UI.iPhone.createGroupedView({
	backgroundColor:'transparent', 
	borderColor:'#390A0E'
});
groupedView.addSection(section1);
groupedView.addSection(section2);

win.add(groupedView);
