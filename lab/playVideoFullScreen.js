(function(win){
	win.verson = '0.1';

	win.onload = function (){
		PVFS.main();
	};

	var PVFS = {
		main: function (){
			this.is.init();
			this.polyfill();

		},
		play: function(){},
		basePlayer: function(){},
		playOnAndroidWeChat: function(){},
		playOnSafariWeChat: function(){},
		playOnSafari: function(){},
		playOnChrome: function(){},
		polyfill: function(){},
		dispatch: function(){},
		config: {
			videoUrl:'',
			audioUrl:'',
			posterUrl:''
		},
		is: {
			init: null,
			android: false,
			safari: false,
			chrome: false,
			wechat: false,
			androidWechat: false,
			iosWechat: false,
			mobile: false
		},

		playCanvas: null,
		playVideo: null,
		playAudio: null
	};
	win.PVFS = PVFS;

	PVFS.is.init = function (){
		var na = navigator.userAgent.toLowerCase();
		alert(na);
		if( na.match(/safari/i) && !na.match(/chrome/i) ){
			this.safari = true;
		}
		if( na.match(/chrome/i) ){
			this.chrome = true;
		}
		if( na.match(/micromessenger/i) ){
			this.wechat = true;
		}
		if( na.match(/android/i) ){
			this.android = true;
		}
		if( na.match(/mobile/i) ){
			this.mobile = true;
		}

		if( this.android && this.wechat ){
			this.androidWechat = true;
		}
		if( this.safari && this.wechat ){
			this.iosWechat = true;
		}
	};

	PVFS.polyfill = function(){

		if( this.is.androidWechat ){
			addVideoEndedEvent();
		}
		if( this.is.safari && !this.is.wechat && this.is.mobile){
			safariHelp();
		}

		function safariHelp (){
			var initial = {};
			initial.play = this.playVideo.play;

			initial.paused = Object.getOwnPropertyDescriptor(this.playVideo.__proto__.__proto__, 'paused') || Object.getOwnPropertyDescriptor(this.playVideo, 'paused');

			//改this.playVideo转发audio的事件
			['pause', 'play','ended'].forEach(function (event) {
				this.playAudio.addEventListener(event, function (e) {

					dispatch(this.playVideo, e.type);
				});
			});
			Object.defineProperty(this.playVideo, 'paused', {
					configurable: true, // this.initial.paused.configurable,
					enumerable: initial.paused.enumerable,
					get: function () {
						return this.playAudio.paused;
					}.bind(this),
					set: function (value) {
						this.playAudio.paused = !!value;
					}.bind(this)
				});

			// 修改this.playVideo的play
			this.playVideo.play = function(){
				this.playAudio.play();
			};
			this.playVideo.pause = function(){
				this.playAudio.pause();
			};

			var safariAutoPlay = function (){
				this.playVideo.play();
				document.removeEventListener('click',safariAutoPlay);
			};
			document.addEventListener('click',safariAutoPlay);
		}
		function addVideoEndedEvent (){
			var old = document.createElement;
			document.createElement = function (name, var_args) {
				var ret = old.apply(document, arguments);
				if (name === 'video') {

					ret.__ENDED_PATCH__ = setInterval(function() {

						if(ret.duration && ret.currentTime === ret.duration){
							this.dispatch(ret, 'ended');
							clearInterval(ret.__ENDED_PATCH__);
						}
					}, 100);

				}
				return ret;
			};
		}
	};

	PVFS.dispatch = function (target, eventName) {
		var event = document.createEvent('Event');
		// Define that the event name is 'build'.
		event.initEvent(eventName, true, true);
		// target can be any Element or other EventTarget.
		target.dispatchEvent(event);
		// debugger;
	};
	PVFS.play = function (){
		if(this.is.androidWechat){
			this.playOnAndroidWeChat();
			return;
		}
		if(this.is.iosWechat){
			this.playOnSafariWeChat();
			return;
		}
		if(this.is.chrome){
			this.playOnChrome();
			return;
		}
		if(this.is.safari && this.mobile){
			this.playOnSafari();
			return;
		}
			
	};
	PVFS.playOnAndroidWeChat = function (){

		playVideo.src = url;
		playVideo.style.height = '100%';
		playVideo.style.width = '100%';
		playVideo.style.zIndex = "100";
		playVideo.style.display = 'block';
		playVideo.style.position = 'absolute';
		playVideo.style.opacity = 1;
		playVideo.style.left = 0;
		playVideo.style.top = 0;

		playVideo.play();

		video.addEventListener('ended',function(){
			// alert('ended !');
			// window.temperarilyDisableCloseCanvas = false;
			// closeCanvas();
		});
	};
	PVFS.playOnSafariWeChat = function (){
		
	

	};
	PVFS.playOnChrome = function (){

	};
	PVFS.playOnSafari = function (){
		var src = url;
		src.split('|').forEach(function(src){
			if(src.match(/.mp3/)){
				this.playAudio.src = src;
			}
			if(src.match(/.mp4/)){
				this.playVideo.src = src;
			}
		});

		this.playVideo.addEventListener('canplaythrough', function(){
			this.playVideo.play();
		});


	};
	PVFS.basePlayer = function(){

		if( document.getElementById('playVideo') ){
			this.playVideo.crossOrigin = 'anonymous';
			this.playVideo.setAttribute('preload','auto');
			this.playVideo.setAttribute('webkit-playsinline', true);
			this.playVideo.load();
			this.playVideo.id = 'playVideo';
		}
		if( !document.getElementById('playCanvas') ){
			this.playCanvas = document.createElement('canvas');
			this.playCanvas.style.position = 'absolute';
			this.playCanvas.style.top = 0;
			this.playCanvas.style.left = 0;
			this.playCanvas.id = 'playCanvas';
		}
		var ctx = this.playCanvas.getContext('2d');
		canvasResize();

	};


})(window);