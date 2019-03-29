var images= document.getElementsByClassName("images");
var listcircle=document.getElementsByClassName("circle");
function init(){
	var pre= document.getElementById("prev");
	var next= document.getElementById("next");
	var numberSlide=0;
	tao();
	setInterval(function(){
		numberSlide++;
		SlideShow();
	}, 10000)
	pre.addEventListener("click",function(){
		numberSlide--;
		SlideShow();
	});
	next.addEventListener("click",function(){
		numberSlide++;
		SlideShow();
	});
	function SlideShow(){
		if(numberSlide<1){
			numberSlide=images.length;
		}
		if(numberSlide>images.length){
			numberSlide=1;
		}
		var active=document.getElementsByClassName("active")[0];
		active.className= active.className.replace("active"," ");
		images[numberSlide-1].className=images[numberSlide-1].className+(" active");
		var activecircle=document.getElementsByClassName("activecircle")[0];
		activecircle.className= activecircle.className.replace("activecircle"," ");
		listcircle[numberSlide-1].className=listcircle[numberSlide-1].className+(" activecircle");
	}
	function tao(){
		var divcircle=document.createElement("div");
		divcircle.className=divcircle.className+" divcircle";
		var slide=document.getElementById("slide");
		for (var i = 0; i < images.length; i++) {
			var div =document.createElement("div");
			div.className+=" circle";
			div.setAttribute("onclick", "test("+i+")");
			if (i==0) {
				div.className=div.className+" activecircle";
			}
			divcircle.appendChild(div);
		}
		slide.appendChild(divcircle);
	}
	function tudong(){
		numberSlide++;
		SlideShow();
	}
}
function test(n){
	var active=document.getElementsByClassName("active")[0];
	active.className= active.className.replace("active"," ");
	var activecircle=document.getElementsByClassName("activecircle")[0];
	activecircle.className= activecircle.className.replace("activecircle"," ");
	images[n].className=images[n].className+(" active");
	listcircle[n].className=listcircle[n].className+(" activecircle");
}