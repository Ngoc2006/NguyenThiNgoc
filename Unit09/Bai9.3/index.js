var change = document.getElementsByTagName("p")[0];
document.getElementsByClassName("default")[0].addEventListener("click", function(){
	var fontsize = change.style.fontSize;
	change.style.fontSize = "20px";
	change.style.color = "black";
});
document.getElementsByClassName("big")[0].addEventListener("click",function(){
	var fontsize = change.style.fontSize;
	fontsize = parseFloat(fontsize);
	fontsize = fontsize*1.4;
	change.style.fontSize = fontsize + "px";
	change.style.color = "blue";
});
document.getElementsByClassName("small")[0].addEventListener("click",function(){
	var fontsize = change.style.fontSize;
	fontsize = parseFloat(fontsize);
	fontsize = fontsize/1.4;
	change.style.fontSize = fontsize + "px";
	change.style.color = "green";
});
