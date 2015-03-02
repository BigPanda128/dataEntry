//Ryan Postma
//CMP237
//3/1/2015

load("tanks.js");

var tanks = JSON.parse(TANKS_FILE);

var highest = 0;
var alpha = [];
for (i = 0; i < tanks.length; ++i){
	if (tanks[i].damage > highest) {
		highest = tanks[i].damage;
	}
}
print("high value: " + highest);



/*
function reduce(array, biggest, start) {
	  var current = start;
	    for (var i = 0; i < array.length; ++i){
		    //print("biggest" + biggest(current, array[i]));
		        current = biggest(current, array[i]);
	    }
	    print("current has this: " + current);
	    
	      return current;
	    
}

print(JSON.stringify(reduce(tanks, function (a, tank) {
	var constant = 0;
	if (tank.damage > a) {
		print("testing this tank for damage: " + tank.damage);
		a = tank.damage;
		print( "here is a " + a);
		return a;
	}
}, 0)));*/
