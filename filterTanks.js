//Ryan Posmta
//CMP237
//2/20/2015
//filter for tanks

//call on the main tank class
load('tanks.js');

//divide the data into a single variable
var tanks = JSON.parse(TANKS_FILE);

//filter funtion that brings back data from the list that the user is looking for
function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i])) {
			passed.push(array[i]);
		}
	}
	return passed;
}

//where i determine what i actually an filtering for. in ths case its tanks with a top speed over 70 km/h
print(JSON.stringify(filter(tanks, function(tank) {
	return tank.speed > 70;
})));

