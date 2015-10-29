var maxOrMin = function(num1, num2, max) {
	if (num1 === num2) {
		return "Equal";
	}
	if (max) {
		if (num1 > num2) {
			return num1;
		} else {
			return num2;
		}	
	} else { 
		if (num1 > num2) {
			return num2;
		} else {
			return num1;
		}
	}
};


function sillySum(arr) {
    var multArr = [];
	for(var i = 0; i < arr.length; i++) {
		multArr.push(i * arr[i]);
	}
    var sum = 0;
	for(var y = 0; y < multArr.length; y++) {
        sum +=  multArr[y]; 
	}
    return sum;
}



function numSquare(max) {
	var arr = [];
	for(var i = 0; i <= max; i++) {
		if (Math.pow(i,2) <= max) {
			arr.push(Math.pow(i,2));
		} else {
			break;
		}
	}
	return arr;
}



function isPrime(num) {
	if(num < 2) {
		return false;
	}
	for(var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	} 
	return true;
}

function primes(max) {
	var array = [];
	for(var i = 2; i <= max; i++) {
		if(isPrime(i)) {
			array.push(i);
		}
	}
	return array;

}