do{
	var n = prompt ('Nhập chiều cao n: ');
	n = parseInt(n);

}
while (isNaN(n) || n <= 0);
alert(n);
for (var i = 0; i < n; i++) {
	for (var k = 0; k <= n; k++) {
		document.write('*');
	}
	document.write('<br>');
}






// // tam giác ngược

