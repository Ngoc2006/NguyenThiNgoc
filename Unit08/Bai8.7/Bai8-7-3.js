do {
    var n = prompt('Nhập vào chiều dài: ');
    n = parseInt(n);
    var m = prompt('Nhập vào chiều rộng: ');
    m = parseInt(m);
} while ((isNaN(n)&&isNaN(m)) || (n <= 0 && m <= 0));

for(var i = 1;i <= n;i++){
 	for(var k=1;k<= m;k++) {
     	if ((k == 1 || k == m )||( i == 1 || i == n)) {
     		document.write('&nbsp;&nbsp; * &nbsp;&nbsp;');
     	} else {
     		document.write('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
     	}
    }
     document.write('<br><br>');  
}
