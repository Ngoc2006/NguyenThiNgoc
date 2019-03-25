var input = document.getElementsByTagName("input");

document.getElementsByClassName("check")[0].addEventListener("click", function(){
	for (var i = 0; i < input.length; i++) {
		input[i].checked=true;
	}
})

document.getElementsByClassName("uncheck")[0].addEventListener("click", function(){
	for (var i = 0; i < input.length; i++) {
		input[i].checked=false;
	}
})