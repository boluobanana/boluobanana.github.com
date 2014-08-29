var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;

window.onload = function () {
	var canvas = document.getElementById('canvas');

	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;

	var context = canvas.getContext('2d');
	render(context);
}

function render (cxt) {
	var hours = 12;
	var minutes = 34;
	var seconds = 56;

	

	renderDigit(0,0,parseInt(hours/10), cxt);
	renderDigit(0,0,parseInt(minutes/10), cxt);
	renderDigit(0,0,parseInt(seconds/10), cxt);
}

function renderDigit (x,y,num,cxt) {

	cxt.fillStyle = 'rgb(0,102,153)';

	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if (digit[num][i][j] == 1) {
				cxt.beginPath();
				cxt.arc(x+j*2*RADIUS+RADIUS,y+i*2*RADIUS+RADIUS,RADIUS,0,2*Math.PI );
				cxt.closePath();
				cxt.fill();
			};
		};
	};
}