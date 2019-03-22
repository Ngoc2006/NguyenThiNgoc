var n;
do{
	n = prompt("Nhập n:");
	n = parseInt(n);
}
while (isNaN(n) || n <= 0);
	var tong = 0;
	for (var i = 0; i <= n; i++) {
		tong = tong + i;
	}

alert('Có tổng là: '+ tong);


