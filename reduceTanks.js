//Ryan Postma
//CMP237
//3/1/2015

load("tanks.js");

var tanks = JSON.parse(TANKS_FILE);

function reduce(array, biggest, start) {
	  var current = start;
	    for (var i = 0; i < array.length; i++)
		        current = biggest(current, array[i]);
	      return current;
}

print(JSON.stringify(reduce(tanks, function (tank) {
	var constant = 0;
	if (tank.damage > constant) {
		constant = tank.damage;
		return constant;
	}
}, 0)));
