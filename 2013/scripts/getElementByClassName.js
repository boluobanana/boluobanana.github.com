function getElementByClassName (className) {
	var all = document.all?document.all:document.getElementsByTagName("*");
	var elements = new Array();
	for (var i = 0; i < all.length; i++) {
		if (all[i].className == className) {
			elements[elements.length]=all[i];
			break;
		};
	};
	return elements;
}