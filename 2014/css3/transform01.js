function route () {
	var valueX = document.getElementById('tX').value;
	var valueY = document.getElementById('tY').value;
	var valueZ = document.getElementById('tZ').value;

	document.getElementById('block').style.webkitTransform = "rotateX("+valueX+"deg) rotateY("+valueY+"deg) rotateZ("+valueZ+"deg)";
	document.getElementById('block').style.transform = "rotateX("+valueX+"deg) rotateY("+valueY+"deg) rotateZ("+valueZ+"deg)";
	document.getElementById('block1').style.transform = "rotateX("+valueX+"deg) rotateY("+valueY+"deg) rotateZ("+valueZ+"deg)";
}