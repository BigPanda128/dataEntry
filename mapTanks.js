//Ryan Postma
//CMP237
//map for dataset
//2/26/2015

//load main tank class
load('tanks.js');

//put the tank txt file into a variable
var tanks = JSON.parse(TANKS_FILE);

//map function that applies changes to all elements in array
function map(array, transform) {
	var mapped = [];
	for (var i = 0; i < array.length; i++) {
		mapped.push(transform(array[i]));
	}
	return mapped;
}

//where i decide what i am going to do to all the elements. in this case i am adding 5% to all top speeds
//to simulate removal of a govner.
print(JSON.stringify(map(tanks, function(tank) {
	        return Math.floor(tank.speed *= 1.05);
})));

