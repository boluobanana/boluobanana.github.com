function list () {
	return Array.prototype.slice.call(arguments);
}

var list1 = [1,2,3];
list1.slice();
console.log(list1);
console.log(Array.prototype.slice);