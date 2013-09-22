function say () {
	var testdiv = document.getElementById("testdiv");
	alert(testdiv.innerHTML);
}
function replace () {
	var testdiv = document.getElementById("testdiv");
	testdiv.innerHTML = "<p>I inserted<em> this </em> content.</p>";
}
function verification () {
	var para = document.createElement("p");
	var info = "nodeName: ";
	info+=para.nodeName;
	info+= " nodeType: ";
	info+= para.nodeType;
	alert(info);
}
function cOne () {
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	var text = document.createTextNode("Hello world");
	para.appendChild(text);
}



function addLoadEvent (func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function() {
			oldonload();
			func();
		}
	}
} 

addLoadEvent(cOne)