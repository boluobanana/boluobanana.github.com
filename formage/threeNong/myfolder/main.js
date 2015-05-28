
/*--------- list main js ------------*/

window.onload = function  () {
	
	var work = new slide('bodyHeader','body');
	document.addEventListener('mousewheel', function(){
		var goTopDiv = document.getElementById('goTopDiv');
		if (document.body.scrollTop-200 > document.documentElement.clientHeight) {
			
				goTopDiv.style.opacity = '1';
				// goTopDiv.onclick = startSlide(0);
						
		}else{
			goTopDiv.style.opacity = '0';
		};
	})

}

/*-------------- 业务js ------------------*/
function slide(navsId, sectionsId){
	var doc = document;
	this.navsId = navsId,
	this.sectionsId = sectionsId;

	var goTopDiv = document.getElementById('goTopDiv');
	var navs = doc.getElementById(this.navsId).getElementsByTagName('div'),
		tables = doc.getElementById(this.sectionsId).getElementsByTagName('section');

	for(var i = 0,len = navs.length; i < len; i++){

		var jump = function(v){
			return function(){
				
				
				startSlide(tables[v].offsetTop);
				goTopDiv.style.opacity = '1';
			}
		}
	
		navs[i].addEventListener('click',jump(i));
	}

}

/*-------------- /业务js ------------------*/



/*---------------- js lab ---------------*/
function startSlide (topPX) {
	var doc = document;
	var count = doc.body.scrollTop;
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
	
};
function goTop(){
	startSlide(0);
	var goTopDiv = document.getElementById('goTopDiv');
	goTopDiv.style.opacity = '0';
}


/*---------------- /js lab ---------------*/
