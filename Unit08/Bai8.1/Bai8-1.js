
var Count=0;
for (var i = 0; i <= 100; i++) {
	if ( (i % 3 == 0) || (i % 7 ==0)) {
		Count = Count + 1;
	}
}
alert('Có '+Count+' số nguyên chia hết cho 3 hoặc 7 nằm trong đoạn từ 1 đến 100');

