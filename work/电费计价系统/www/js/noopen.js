// function noopen(e){
// 	console.log(e);
// 	var my = e.parentElement.childNodes[0].text;
// 	var fu = e.firstElementChild.childNodes[0].data;
// 	var value = prompt(fu.trim());
// 	if (value) {
// 		e.childNodes[1].childNodes[1].innerText=value;
// 	};
	
// 	// e.childNodes[1].childNodes[1].className = "";
// }

function login(){
    var inputN = document.getElementsByTagName('input')[0].value;
    var inputP = document.getElementsByTagName('input')[1].value;
    if (!(inputN == 'admin' && inputP == 'admin') ){
    	var backtrop = document.getElementById('backtrop');
    	backtrop.style.visibility = "visible";
      	return false;
    };
  }
function hide(){
	var backtrop = document.getElementById('backtrop');
    	backtrop.style.visibility = "hidden";
}