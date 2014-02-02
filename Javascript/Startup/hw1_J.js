#!/usr/bin/env node

//whether A is prime number
var WhetherAisprime = function(A) {
	var i = 2;
	for(i = 2; i < A; i++) {
	if(A%i == 0) {return 0;}
	}
	return A;
};

var Showprime = function(k) {
	var arr = [];
	var counter = 1;
	var num = 2;
		if (k == 0){return arr;}
		else if (k == 1){arr.push(2); return arr;}
		while(k >= 2 && counter <= k) {
			var n = WhetherAisprime(num);
			if(n != 0) {
			arr.push(n);
			//num++;
			counter++;
			}
			//else if(n == 0){
			num++;
			//}

		}
	return arr;
};

var fmt = function(arr){
    return arr.join(", ");
};
	
var k = 20;
console.log("primenumber(" + k + ")");
console.log(fmt(Showprime(k)));
