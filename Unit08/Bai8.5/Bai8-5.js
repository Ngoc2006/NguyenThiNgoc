do{
	var n = prompt('Nhập số nguyên dương n: ');
	n = parseInt(n);
}
while (isNaN(n) || n < 0) {
	var S = 0.0;
	for (var i = 1; i <= n; i++) {
		S = S + 1/(i);
	}
}
alert('S= '+S);