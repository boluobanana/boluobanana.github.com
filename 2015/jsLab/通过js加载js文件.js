function loadScript () {
	var urls = arguments;
	var fragment = document.createDocumentFragment();
	for(var i=0; i<urls.length; i++){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		fragment.appendChild(script);
	}
	document.body.appendChild(fragment);
}

function loadStype () {
	var head = document.getElementsByTagName('head')[0];
	var hrefs = arguments;
	var fragment = document.createDocumentFragment();
	for(var i=0; i<hrefs.length;i++){
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = hrefs[i];
		fragment.appendChild(link);
		}
	head.appendChild(fragment);
	}
