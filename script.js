var integer = prompt("Please enter a whole number.");

function fizzBuzzRedux(integer) {

	function check(n) {
		var msg = '';
		if (n % 3 == 0) {msg += "Fizz"};
		if (n % 5 == 0) {msg += "Buzz"};
		return msg || n;
	}

	for (var = i; i <= integer; i++) {
		console.log(check(i));
	}
};