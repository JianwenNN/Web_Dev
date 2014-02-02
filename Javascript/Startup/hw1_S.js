//#!/usr/bin/env node

var whetherAisprime = function(A){
  var i = 2;
  for(i=2;i<A;i++){
    if(A%i == 0 ){return 0;}
  }
  return A;
  
};


var primeArray = function(n){
  var arr = [];
  if(n==0){return arr;}
  else if(n==1){arr.push(2);}
  else if(n>=2){
    arr.push(2);
    var num = 3;
    var counter = 1;
    while(counter<n){
      //do sth on num
      //if num is prime:
      // (1) push to arr;
      // (2) counter ++;
      var result = whetherAisprime(num);
      if(result!=0){
        arr.push(num);
        counter++;
      }
      num++;
    }
  }
  return arr;
};

var fmt = function(arr){
  return arr.join(", ");
};

var k = 20;
console.log(fmt(primeArray(k)));