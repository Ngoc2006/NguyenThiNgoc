var text=document.getElementById("Text");
var check=document.getElementsByClassName("Check");
var xoa=document.getElementsByClassName("Xoa");
function init(){
	var content=document.getElementById("content");
	var list_CV=document.getElementsByClassName("Cong_Viec");
	for (var i = 0; i < list_CV.length; i++) {
		list_CV[i].addEventListener("click", function(){
			if (this.className=="CV_change") {
				this.className=this.className.replace("CV_change", " ");
			}
			else {
				this.className=this.className+" CV_change";
			}
		});
		xoa[i].addEventListener("click", function(){
			content.removeChild(this.parentNode);
		});
		
	}
	document.getElementById("Add").addEventListener("click", function(){
		if(document.getElementById("Text").value.length==0){
			alert("Bạn chưa nhập nội dung công việc")
		}else {
			var Cong_Viec=document.createElement("div");
			var Xoa=document.createElement("div");
			var Noi_Dung=document.createElement("div");
			var Check=document.createElement("div");
			Cong_Viec.className=Cong_Viec.className+" Cong_Viec";
			Check.className= Check.className+" Check";
			Xoa.className=Xoa.className+" Xoa fa fa-times";
			Noi_Dung.className=Noi_Dung.className+" Noi_Dung";
			Noi_Dung.innerHTML=document.getElementById("Text").value;
			Cong_Viec.addEventListener("click", function(){
				if (this.className=="CV_change") {
					this.className=this.className.replace("CV_change", " ");
				}
				else {
					this.className=this.className+" CV_change";
				}
			});
			Xoa.addEventListener("click",function(){
				content.removeChild(this.parentNode);
			});
			Cong_Viec.appendChild(Check);
			Cong_Viec.appendChild(Noi_Dung);
			Cong_Viec.appendChild(Xoa);
			content.appendChild(Cong_Viec);
		}
	});
}


