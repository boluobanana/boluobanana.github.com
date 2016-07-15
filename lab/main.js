// console.log = (function(oriLogFunc) {
// 	var div = document.createElement('div');
// 	div.style.position = 'absolute';
// 	div.style.top = 0;
// 	div.style.height = '50px';
// 	div.style.overflow = 'scroll';
// 	div.style.zIndex = '1000';
// 	document.body.appendChild(div);


// 	return function (str){
// 		oriLogFunc.call(console, str);
// 		div.innerHTML += str + '<br/>';
// 		var chromeScrollBarHight = 20;
// 		div.scrollTop = div.scrollHeight - div.style.height.replace(/px/,'') + chromeScrollBarHight;
// 	};
// })(console.log);

(function () {
	if(/micromessenger/.test(navigator.userAgent.toLowerCase()) && /android/.test(navigator.userAgent.toLowerCase())){
		var old = document.createElement;
		document.createElement = function (name, var_args) {
			var ret = old.apply(document, arguments);
			if (name === 'video') {

				ret.__ENDED_PATCH__ = setInterval(function() {

					if(ret.duration && ret.currentTime === ret.duration){
						// closeCanvas();
						dispatch(ret, 'ended');
						// debugger;
						clearInterval(ret.__ENDED_PATCH__);
					}
				}, 100);

			}
			return ret;
		};
	}
	
}) ();

var guideImg1 = document.querySelector('#guideImg1');
var startBtn = document.querySelector('#startBtn');
var canvas = document.querySelector('#videoCanvas');
var pano = document.querySelector('#pano');
var video = document.createElement('video');
var audio = document.createElement('audio');
var first_page = document.querySelector('#first_page');

var year = document.querySelector('#year'),
	mouth = document.querySelector('#mouth'),
	day = document.querySelector('#day');
var startYear = 1900,endYear = new Date().getFullYear();
var firstVideoFlag,aniId,rotateFlag,safariHelpFlag;
var initial = {
	play: undefined,
	pause: undefined,
	paused: undefined,
	src: undefined
};
if(/micromessenger/.test(navigator.userAgent.toLowerCase())){
		location.href = '../tour.html';
}else{
		main();
}
function main(){
	firstVideoFlag = false;
	rotateFlag = false;

	window.targetVideo = video;

	video.style.display = 'none';
	video.id = 'wechatVideo';
	video.src = '../skin/assets/video/BAR-OPENING-1080.mp4';
	video.crossOrigin = 'anonymous';
	video.setAttribute('preload','auto');
	video.setAttribute('webkit-playsinline', true);

	document.body.appendChild(video);
	safariHelp();
	startBtn.addEventListener('click', function(){
		fullScreen();
		checkAge(function(){
			if( window.orientation==90||window.orientation==-90 ){
				enterVideoPano();

			}else{
				guideImg1.style.display = 'block';
				guideImg1.style.opacity = 1;
				playVideoHacker();
			}

			firstVideoFlag = true;
			rotateFlag = true;
		});

		if(firstVideoFlag == true){
			canvas.style.display = 'block';
			// playOnWechat('../skin/assets/video/1 Entrance-Welcome 2.mp4');
			// firstVideoFlag = false;
			// firstVideoFlag = null;

			pano.style.display = 'none';
			// embedpano({swf:"tour.swf", xml:"tour.xml", target:"pano", html5:"prefer", mobilescale:1.0, passQueryParameters:true});

		}

	});

	// canvas.addEventListener("click", closeCanvas);
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);

	window.addEventListener("resize", function(){
		if(window.orientation==90||window.orientation==-90){
			var ctx = canvas.getContext('2d');
			canvas.setAttribute('width',window.innerWidth);
			canvas.setAttribute('height', window.innerHeight);

			// finally query the various pixel ratios
			var devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
							ctx.mozBackingStorePixelRatio ||
							ctx.msBackingStorePixelRatio ||
							ctx.oBackingStorePixelRatio ||
							ctx.backingStorePixelRatio || 1;

			var ratio = devicePixelRatio / backingStoreRatio;

			if (devicePixelRatio !== backingStoreRatio) {

				var oldWidth = canvas.width;
				// var oldWidth = canvas.height / 16 * 9;
				var oldHeight = canvas.height;

				canvas.width = oldWidth * ratio;
				canvas.height = oldHeight * ratio;
				// alert(window.innerWidth);

				canvas.style.height = oldHeight + 'px';
				canvas.style.width = oldWidth + 'px';
				// canvas.style.width = oldHeight / 16 * 9 + 'px';


				// now scale the context to counter
				// the fact that we've manually scaled
				// our canvas element
				ctx.scale(ratio, ratio);
			}
		}

		
	});

}
function playVideoHacker(){
	video.play();
	video.addEventListener('playing', hackerPause);

	function hackerPause() {
		setTimeout(function(){
			video.pause();
			video.removeEventListener('playing', hackerPause);
		},20);
	}
}
function safariHelp (){

	var na = navigator.userAgent.toLowerCase();
	if(na.match(/safari/i) && !na.match(/micromessenger/i) && !na.match(/chrome/)){
		safariHelpFlag = true;
		initial.play = video.play;

		initial.paused = Object.getOwnPropertyDescriptor(video.__proto__.__proto__, 'paused') || Object.getOwnPropertyDescriptor(video, 'paused');

		//改video转发audio的事件
		['pause', 'play','ended'].forEach(function (event) {
			audio.addEventListener(event, function (e) {
				// // Create the event.
				// var event = document.createEvent('Event');

				// // Define that the event name is 'build'.
				// event.initEvent(e.type, true, true);

				// // target can be any Element or other EventTarget.
				// video.dispatchEvent(event);

				dispatch(video, e.type);
			});
		});
		Object.defineProperty(video, 'paused', {
				configurable: true, // this.initial.paused.configurable,
				enumerable: initial.paused.enumerable,
				get: function () {
					return audio.paused;
				}.bind(this),
				set: function (value) {
					audio.paused = !!value;
				}.bind(this)
			});


		// 修改video的play

		video.play = function(){
			audio.play();
		};
		video.pause = function(){
			audio.pause();
		};

		var safariAutoPlay = function (){
			video.play();
			document.removeEventListener('click',safariAutoPlay);
		};
		document.addEventListener('click',safariAutoPlay);

	}
}

function dispatch(target, eventName) {

	var event = document.createEvent('Event');

	// Define that the event name is 'build'.
	event.initEvent(eventName, true, true);

	// target can be any Element or other EventTarget.
	target.dispatchEvent(event);
	// debugger;
}

function checkAge(callback){
	var birthday = new Date(year.value, mouth.value, day.value);
	var now = new Date();
	var age = new Date(now - birthday).getYear() - new Date(0).getYear();

	if(age > 18){
		callback();
	}else{
		alert('不好意思你未成年!');
	}
}
function playOnAndroid(url){

	window.targetVideo.src = url;
	window.targetVideo.style.height = '100%';
	window.targetVideo.style.width = '100%';
	window.targetVideo.style.zIndex = "100";
	window.targetVideo.style.display = 'block';
	window.targetVideo.style.position = 'absolute';
	window.targetVideo.style.opacity = 1;
	window.targetVideo.style.left = 0;
	window.targetVideo.style.top = 0;
	// alert(url);
	video = window.targetVideo;

	window.targetVideo.play();

	video.addEventListener('play',function(){
		canvas.style.opacity = 1;
	});
	video.addEventListener('ended',function(){
		// alert('ended !');
		window.temperarilyDisableCloseCanvas = false;
		closeCanvas();
	});
}
function playOnWechat(url) {

	if(!url) {return;}
	if(/micromessenger/.test(navigator.userAgent.toLowerCase()) && /android/.test(navigator.userAgent.toLowerCase())){

		playOnAndroid(url);
		return ;
	}

	if(safariHelpFlag){
		initial.src = url;
		initial.src.split('|').forEach(function(src){
			if(src.match(/.mp3/)){
				audio.src = src;
			}
			if(src.match(/.mp4/)){
				video.src = src;
			}
		});

		video.addEventListener('canplaythrough', function(){
			video.play();
		});


	}else{
		// video = document.getElementById(id);
		// window.targetVideo = document.getElementById(id);
	}


	var list = url.split('|');

	var mp4 = list[0],
		webm = list[1];
	if (navigator.userAgent.toLowerCase().match(/android/i)) {
		video.src = mp4;
	} else {
		video.src = mp4;
	}


	video.crossOrigin = 'anonymous';
	video.setAttribute('preload','auto');
	video.setAttribute('webkit-playsinline', true);
	video.load();

	// var canvas = document.getElementById('videoCanvas');
	var ctx = canvas.getContext('2d');
	canvasResize(ctx);

	//video play
	video.play();

	var myImage = new Image();
	myImage.src = '../skin/blank.png';
	myImage.onload = function () {
		video.play();

		aniId = requestAnimationFrame(draw);
	};

	function draw(){
		if(safariHelpFlag){
			var __FRAME_RATE__ = 30;
			var __PERIOD__ = 1.0 / __FRAME_RATE__;
			/**
			 *	当 audio 数据不够的时候，直接停下就行了，不需要通知 video
			 *	当 video 数据不够的时候，需要让 audio 也暂停下来
			 */
			 // console.log('v readyState:' + video.readyState + '  v HAVE_ENOUGH_DATA : ' + video.HAVE_ENOUGH_DATA);
			if (video.readyState < video.HAVE_ENOUGH_DATA) {
				video.pause();
			} else{
				if(audio.src){
					var pos = audio.currentTime;
					video.currentTime = pos;
					if (Math.abs(pos - video.currentTime) >= __PERIOD__) {
						video.currentTime += __PERIOD__ * parseInt((pos - video.currentTime) / __PERIOD__);
					}
				}else{
					if( video.duration - video.currentTime < __PERIOD__){
						video.currentTime = video.duration;
						//手动触发ended事件
						dispatch(video, 'ended');
					}else{
						video.currentTime += __PERIOD__ ;


					}
				}

				// video.currentTime = audio.currentTime;
			}
		}

		ctx.drawImage(video,0,0,canvas.clientWidth,canvas.clientHeight);
		console.log(video.currentTime);
		if(video.duration){
			var endTime;
			if(video.duration > audio.duration){
				endTime = audio.duration;
			}else{
				endTime = video.duration;
			}
			if(video.currentTime < endTime ){
				prev_time = video.currentTime;

				aniId = requestAnimationFrame(draw);
			}else{
				cancelAnimationFrame(aniId);

				console.log('cancel ');
			}
		}else{
			aniId = requestAnimationFrame(draw);
		}

	}

	video.addEventListener('play',function(){
		canvas.style.opacity = 1;
	});
	video.addEventListener('ended',function(){
		// alert('ended !');
		window.temperarilyDisableCloseCanvas = false;
		closeCanvas();
	});
	// canvas.addEventListener('click', function(){
	// 	video.play();
	// })
}
window.temperarilyDisableCloseCanvas = false;
function closeCanvas(){
	if(/micromessenger/.test(navigator.userAgent.toLowerCase()) && /android/.test(navigator.userAgent.toLowerCase())){
		closeAndroidVideo();
		return;
	}
	if (window.temperarilyDisableCloseCanvas) {
		return;
	}
	console.log('closeCanvas');
	canvas.style.opacity = 0;
	pano.style.display = 'block';
	cancelAnimationFrame(aniId);
	video.pause();
	setTimeout(function(){
		canvas.style.display = 'none';
	},1200);
}
function closeAndroidVideo(){

	console.log('close video on android');
	canvas.style.display = 'none';
	canvas.style.opacity = 0;
	window.targetVideo.pause();
	window.targetVideo.style.opacity = 0;
	pano.style.display = 'block';
	setTimeout(function(){
		window.targetVideo.style.display = 'none';
	},1200);

}
function canvasResize() {
	var ctx = canvas.getContext('2d');
	canvas.style.display = "block";
	canvas.setAttribute('width',window.innerWidth);
	canvas.setAttribute('height', window.innerHeight);

	// finally query the various pixel ratios
	var devicePixelRatio = window.devicePixelRatio || 1,
	backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
					ctx.mozBackingStorePixelRatio ||
					ctx.msBackingStorePixelRatio ||
					ctx.oBackingStorePixelRatio ||
					ctx.backingStorePixelRatio || 1;

	var ratio = devicePixelRatio / backingStoreRatio;

	if (devicePixelRatio !== backingStoreRatio) {

		var oldWidth = canvas.width;
		// var oldWidth = canvas.height / 16 * 9;
		var oldHeight = canvas.height;

		canvas.width = oldWidth * ratio;
		canvas.height = oldHeight * ratio;
		// alert(window.innerWidth);

		canvas.style.height = oldHeight + 'px';
		canvas.style.width = oldWidth + 'px';
		// canvas.style.width = oldHeight / 16 * 9 + 'px';


		// now scale the context to counter
		// the fact that we've manually scaled
		// our canvas element
		ctx.scale(ratio, ratio);

	}
}
function hengshuping(){
	if(window.orientation == 180||window.orientation === 0){
		// alert("竖屏状态！")

		if(rotateFlag){

			guideImg1.style.display = 'block';
		}


	}
	if(window.orientation==90||window.orientation==-90){
		// alert("横屏状态！")
		guideImg1.style.display = 'none';

		if(firstVideoFlag && rotateFlag){

			enterVideoPano();
			var canvasResizeHeaker = function (){
				canvasResize();
				video.removeEventListener('playing',canvasResizeHeaker);
			};
			video.addEventListener('playing',canvasResizeHeaker);
			setTimeout(function(){
				canvasResize();
			}, 300);
		}
	}
}

function enterVideoPano(argument) {
	
	canvas.style.display = "block";
	first_page.style.display = 'none';
	document.querySelector('.video1Poster').style.display = 'block';
	// playOnWechat('../skin/assets/video/1 Entrance-Welcome 2.mp4|../skin/assets/audio/1 Entrance-Welcome 2.mp3');
	playOnWechat('../skin/assets/video/BAR-OPENING-1080.mp4|../skin/assets/audio/BAR-OPENING-1080.mp3');
	window.temperarilyDisableCloseCanvas = true;
	window.temperarilyDisableBgSound = true;
	firstVideoFlag = false;
	firstVideoFlag = null;


	pano.style.display = 'none';

	function startKr (){

		window.temperarilyDisableBgSound = false;

		embedpano({swf:"../tour.swf", xml:"tour.xml", target:"pano", html5:"prefer", mobilescale:1.0, passQueryParameters:true});
		window.targetVideo.removeEventListener('ended', startKr);
		canvas.removeEventListener('click', startKr);

		// 等 kr 启动了允许点击跳过视频
		window.temperarilyDisableCloseCanvas = false;
		canvas.addEventListener("click", closeCanvas);
	}
	window.targetVideo.addEventListener('ended', startKr);
	// canvas.addEventListener('click', startKr);
}


var update_percent = function () {

	var percent_text,
		percent_graph,
		tip_text;

	var update_text = function (text) {
		if (!tip_text) {
			tip_text = document.getElementById('tip_text');
		}

		if (tip_text) {
			tip_text.innerHTML = text;
		}
	};

	return function (value) {
		if (value < 20) {
			update_text('');
		} else
		if (value < 50) {
			update_text('360°全景探索');
		} else
		if (value < 90) {
			update_text('戴上耳机，体验更佳');
		} else {
			update_text('高品质酝酿中......');
		}

		if (!percent_text) {
			percent_text = document.getElementById('percent_text');
		}

		if (!percent_graph) {
			percent_graph = document.getElementById('percent_graph');
		}

		if (percent_text && percent_graph) {
			percent_text.innerHTML = value + '%';
			var t = value / 100 * 90 + 20;
			percent_graph.style.top = (100 - t) + '%';
		}
	};
} ();


var hide_loading = function () {

	var loading;
	var should_hide = false;
	var loaded = false;

	var hide = function () {
		if (loaded) {
			return;
		}

		var css = '@font-face { font-family: "hylx"; src: url("../fonts/hylx.ttf") format("truetype"); }',
			head = document.head || document.getElementsByTagName('head')[0],
			style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);

		loading.style.display = 'none';

		loaded = true;
	};

	window.addEventListener('load', function (e) {
		loading = document.getElementById('loading');

		if (should_hide) {
			hide();
		}
	});

	return function () {
		if (loading) {
			hide();
		} else {
			should_hide = true;
		}
	};
} ();


var loaded = function () {
	var time_begin = + new Date(),
		max_percent = 0,
		cur_percent = 0;
	var finished = false;

	var interval_id = setInterval(function () {
		var time_now = + new Date(),
			time_delta = (time_now - time_begin);
			max_percent = time_delta / 5000;
			if (max_percent >= 1) {
				max_percent = 1;

				// finished
				if (!finished) {
					clearInterval(interval_id);
				} else {
					hide_loading();
				}
			} else {
				if (cur_percent > max_percent) {
					update_percent(parseInt(max_percent * 100));
				}
			}
	}, 16);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../fonts/hylx.ttf', true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {

			if (cur_percent < max_percent) {
				hide_loading();
			} else {
				finished = true;
			}

		}
	};
	xhr.onprogress = function (e) {
		if (e.lengthComputable) {
			cur_percent = e.loaded / e.total;
			if (cur_percent < max_percent) {
				var percentComplete = parseInt((e.loaded / e.total) * 100);
				update_percent(percentComplete);
			}
		}
	};
	xhr.send(null);


} ();
function fullScreen() { 

  var element= document.documentElement; //若要全屏页面中div，var element= document.getElementById("divID");
  //IE 10及以下ActiveXObject
  if (window.ActiveXObject)
  {
	var WsShell = new ActiveXObject('WScript.Shell');
	WsShell.SendKeys('{F11}'); 
  }
  //HTML W3C 提议
  else if(element.requestFullScreen) {  
	element.requestFullScreen();  
  }
  //IE11
  else if(element.msRequestFullscreen) {  
	element.msRequestFullscreen();  
  }
  // Webkit (works in Safari5.1 and Chrome 15)
  else if(element.webkitRequestFullScreen ) {  
	element.webkitRequestFullScreen();  
  } 
  // Firefox (works in nightly)
  else if(element.mozRequestFullScreen) {  
	element.mozRequestFullScreen();  
  }  
}  