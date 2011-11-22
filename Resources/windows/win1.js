var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Eu sou a janela 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

label1.addEventListener("click", function(){
	label1.color = "red";
	label1.text = "funciona! \\o/";
});

Ti.App.addEventListener("app:labelclicked", function(e){
	label1.text = e.newlabel;
});


win1.add(label1);