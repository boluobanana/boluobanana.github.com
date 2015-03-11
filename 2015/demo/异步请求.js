var xhr = createXHR();
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4){
		if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
			alert(xhr.responseText);
		} else {
			alert('Resquest was unsuccessful: ' + xhr.status);
		}
	}
}
xhr.open("get", "example.txt", ture);
xhr.send(null);