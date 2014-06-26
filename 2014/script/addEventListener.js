var addEvent = (function(){
		if (document.addEventListener) {
			return function(el, type, fn){
				el.addEventListener(type, fn, false);
			};	
		} else{
			return function  (el, type, fn) {
				el.attachEvent('on' + type, function(){
					return fn.call(el, window.event);
				});
			}
		};
	})();

var div1 = document.getElementById('div1');
addEvent(div1, 'click', function(){
		alert("找到我 了！ 我是父级div");
	})