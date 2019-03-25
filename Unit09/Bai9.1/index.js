var button = document.getElementsByTagName("button");
var content = document.getElementsByClassName("quynhxaugai");

for (var i = 0; i < content.length; i++) {
	button[i].addEventListener("click",function(){
		for (var j = 0; j < content.length; j++) {
			console.log(j);
			content[j].style.display = "none";
		}
		this.nextElementSibling.style.display = "block";
		
	});
}

