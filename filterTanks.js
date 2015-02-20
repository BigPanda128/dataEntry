//Ryan Posmta
//CMP237
//2/20/2015
//filter for tanks


load('tanks.js');

var tanks = JSON.parse(TANKS_FILE);

function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i])) {
			passed.push(array[i]);
		}
	}
	return passed;
}

print(JSON.stringify(filter(tanks, function(tank) {
	return tank.speed > 70;
})));

