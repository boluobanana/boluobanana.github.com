function myReady( fn ){

	if (document.addEventListener) {
		document.addEventListener("DOMContentLoad", fn, false);
	} else{
		IEContentLoaded (fn);
	};

	function IEContentLoaded (fn) {
		var done = false;
		var dom = document;

		var init = function(){
			if (!done) {
				done = true;
				fn();
			};
		};

		(function(){
			try{
				dom.documentElement.doScroll('left');
			}catch(e){
				setTimeout(arguments.callee,50);
			}

			init();
		})

		dom.onreadystatechange = function(){

			if (dom.readyState == 'complete') {
				dom.onreadystatechange == null;
				init();
			};
		}
	};
}