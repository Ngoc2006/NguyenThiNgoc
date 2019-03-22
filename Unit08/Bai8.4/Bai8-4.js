

do{
	var N = prompt(' Nhập số N: ');
	N = parseInt(N);
	var M = prompt(' Nhập số M: ');
	M = parseInt(M);
	var K = prompt(' Nhập số K: ');
	K = parseInt(K);
}
while ((isNaN(N) && isNaN(M) && isNaN(K)) || (N <= 0 && M <=0 && K <= 0)){
	var Tong = 0.0;
	for (var i = N; i <= M; i++) {
		if(i % K == 0){
			Tong = Tong + i;
		}
	}
}
alert('Tổng các số chia hết cho K trong khoảng từ N đến M là: '+Tong);