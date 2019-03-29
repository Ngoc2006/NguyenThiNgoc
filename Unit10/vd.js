// JavaScript Document
	function validateForm() {
	//Họ phải được điền
	var ho = document.forms[“myForm”][“ho”].value;
	if (ho == “”) {
	alert(“Họ không được để trống”);
	return false;
}
//Tên phải được điền
var ten = document.forms[“myForm”][“ten”].value;
if (ten == “”) {
alert(“Tên không được để trống”);
return false;
}
//Email phải được điền chính xác
var email=document.forms[“myForm”][“email”].value;
var aCong=email.indexOf(“@”);
var dauCham = email.lastIndexOf(“.”);
if (email == “”) {
alert(“Email không được để trống”);
return false;
}
else if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {
alert(“Email bạn điền không chính xác”);
return false;
}
//Nhập số điện thoại
var dienThoai = document.forms[“myForm”][“dienThoai”].value;
var kiemTraDT = isNaN(dienThoai);
if (dienThoai == “”) {
alert(“Điện thoại không được để trống”);
return false;
}
if (kiemTraDT == true) {
alert(“Điện thoại phải để ở định dạng số”);
return false;
}
//Nhập số lượng muốn mua
var soLuong = document.forms[“myForm”][“soLuong”].value;
var kiemTraSL = isNaN(soLuong);
if ((soLuong == “”) || (soLuong <= 0)) {
alert(“Số lượng không được để trống và phải lớn hơn 0”);
return false;
}
if (soLuong > 100) {
alert(“Số lượng mua không được lớn hơn 100”);
return false;
}
if (kiemTraSL == true) {
alert(“Số lượng mua phải để ở định dạng số”);
return false;
}
//Chọn ngày nhận hàng
var nm = document.forms[“myForm”][“ngaymua”].value;
if (nm == “”) {
alert(“Ngày không được để trống”);
return false;
}
//Chọn kiểu thanh toán
var ck = document.getElementById(“ck”);
var tt = document.getElementById(“tt”);
if ((ck.checked == false) && (tt.checked == false)) {
alert(“Bạn phải chọn một kiểu thanh toán”);
return false;
}
}