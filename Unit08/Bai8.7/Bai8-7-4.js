do {
    var n = prompt('Nhập chiều cao n: ');
    n = parseInt(n);
} while (isNaN(n)|| n <= 0);
for (var i = n; i > 0; i--) {
	for (var k = i; k > 0 ; k--) {
		document.write('*');
	}
	document.write('<br>');
}
