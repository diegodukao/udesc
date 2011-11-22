var win2 = Ti.UI.currentWindow;

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text: win2.labelText,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);
