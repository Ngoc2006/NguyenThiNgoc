do {
    var n = prompt('Nhập chiều dài a: ');
    n = parseInt(n);
    var m = prompt('Nhập chiều rộng b: ');
    m = parseInt(m);
} while ((isNaN(n)&&isNaN(m)) || (n <= 0 && m <= 0));
for (var i = 1; i <= n; i++) {
	for (var k = 1; k <= m ; k++) {
		document.write('*');
	}
	document.write('<br>');
}
