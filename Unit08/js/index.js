// cach3 function test(){
// 	alert('Hello world');
// }

// alert('Hello world');
// var val;
// val = confirm("How are u");
// if (val == true){
// 	alert("true");
// }
// else{
// 	alert("False");
// }


// 

// Giải ptr bậc 1
// var a = prompt("Nhập a: ");
// var b = prompt("Nhập b: ");

// a = parseFloat(a);
// if (isNaN(a)){ //is not a number
// 	a = prompt("Nhập a: ");
// }
// b = parseFloat(b);
// if (isNaN(b)){
// 	b = prompt("Nhập b: ");
// }

//do_while
// var a;
// var b;

// do {
// 	a = prompt("Nhập a: ");
// 	a = parseFloat(a);
// }
//  while (isNaN(a));

//  do {
// 	b = prompt("Nhập b: ");
// 	b = parseFloat(b);
// }
//  while (isNaN(b));

// if (a==0 && b==0){
// 	alert("Phương trình vô số nghiệm");
// }
// else if (a==0 && b!=0){
// 	alert("Phương trình vô nghiệm");
// }
// else alert("Phương trình có nghiệm:"+(-b/a));



// Chuyển kiểu ... sang gtri số
// parseInt("3") => 3
// parseFloat("3.1") => 3.1



//Hàm FOR
// var n;
// do{
// 	n = prompt("Nhập n:");
// 	n = parseInt(n);
// }
// while (isNaN(n) || n <= 0);
// 	var tong = 0;
// 	for (var i = 0; i < n; i++) {
// 		tong = tong + (i+1)/(i+2);
// 	}

// alert(tong);


//Mảng
// var mang = [];
// mang.push(3);
// mang.push(4);


// console.log(mang);


// mang = new Array(10);
// mang[0],...,mang[9];


function enterNumberic(thongBao){
	var m;
	do{
		m = prompt("Nhập "+thongBao+":");
		m = parseInt(m);
	}
	while (isNaN(m) || m <= 0);
	return m;
}
n = enterNumberic("m");
var mang = new Array(n);
for (var i = 0; i < n; i++) {
	// do{
	// 	mang[i] = prompt("Nhập phàn tử thứ:"+(i+1));
	// 	mang[i] = parseInt(mang[i]);
	// }
	// while (isNaN(mang[i]) || mang[i] <= 0);
	mang[i] = enterNumberic("Phần tử thứ "+(i+1));
}
var tong = 0;
for (var i = 0; i < n; i++) {
	tong = tong + mang[i];
}
alert(tong);