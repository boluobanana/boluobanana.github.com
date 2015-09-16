var o = (function(){
	var o = {};
	var doc = document;
	var count = doc.body.scrollTop;
	o.scroll = function(topPX){
		if (count < topPX) {
			var interval = setInterval(
				function(){
					doc.body.scrollTop = count;
					
					if (count < topPX -40) {
						count += 30;
						
					}else if(count < topPX && count > topPX - 40){
						count += 1;
					}else{
						clearInterval(interval);
					}
				},
				1
			)
		}else{
			var interval = setInterval(
				function(){
					doc.body.scrollTop = count;
					
					if (count > topPX -40) {
						count -= 30;
						
					}else if(count > topPX && count < topPX - 40){
						count -= 1;
					}else{
						clearInterval(interval);
					}
				},
				1
			)
		}
	}
	return o;
})()