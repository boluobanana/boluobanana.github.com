(function(win){
	win.verson = '0.1';

	win.onload = function (){
		PVFS.main();
	};

	var PVFS = {
		main: function(){
			this.is.init();
			this.polyfill();
		},
		play: function(){},
		draw: function(){},
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

		targetCanvas: null,
		targetVideo: null,
		targetAudio: null
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
			initial.play = this.targetVideo.play;

			initial.paused = Object.getOwnPropertyDescriptor(this.targetVideo.__proto__.__proto__, 'paused') || Object.getOwnPropertyDescriptor(this.targetVideo, 'paused');

			//改this.targetVideo转发audio的事件
			['pause', 'play','ended'].forEach(function (event) {
				this.targetAudio.addEventListener(event, function (e) {

					dispatch(this.targetVideo, e.type);
				});
			});
			Object.defineProperty(this.targetVideo, 'paused', {
					configurable: true, // this.initial.paused.configurable,
					enumerable: initial.paused.enumerable,
					get: function () {
						return this.targetAudio.paused;
					}.bind(this),
					set: function (value) {
						this.targetAudio.paused = !!value;
					}.bind(this)
				});

			// 修改this.targetVideo的play
			this.targetVideo.play = function(){
				this.targetAudio.play();
			};
			this.targetVideo.pause = function(){
				this.targetAudio.pause();
			};

			var safariAutoPlay = function (){
				this.targetVideo.play();
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

		targetVideo.src = url;
		targetVideo.style.height = '100%';
		targetVideo.style.width = '100%';
		targetVideo.style.zIndex = "100";
		targetVideo.style.display = 'block';
		targetVideo.style.position = 'absolute';
		targetVideo.style.opacity = 1;
		targetVideo.style.left = 0;
		targetVideo.style.top = 0;

		targetVideo.play();

		video.addEventListener('ended',function(){
			// alert('ended !');
			// window.temperarilyDisableCloseCanvas = false;
			// closeCanvas();
		});
	};
	PVFS.playOnSafariWeChat = function (){

		PVFS.basePlayer();
	};
	PVFS.playOnChrome = function (){

		PVFS.basePlayer();
	};
	PVFS.playOnSafari = function (){
		var src = url;
		src.split('|').forEach(function(src){
			if(src.match(/.mp3/)){
				this.targetAudio.src = src;
			}
			if(src.match(/.mp4/)){
				this.targetVideo.src = src;
			}
		});

		this.targetVideo.addEventListener('canplaythrough', function(){
			this.targetVideo.play();
		});

		safariDraw();

		function safariDraw() {
			var __FRAME_RATE__ = 30;
			var __PERIOD__ = 1.0 / __FRAME_RATE__;
			/**
			 *	当 audio 数据不够的时候，直接停下就行了，不需要通知 video
			 *	当 video 数据不够的时候，需要让 audio 也暂停下来
			 */
			 // console.log('v readyState:' + video.readyState + '  v HAVE_ENOUGH_DATA : ' + video.HAVE_ENOUGH_DATA);
			if (targetVideo.readyState < targetVideo.HAVE_ENOUGH_DATA) {
				targetVideo.pause();
			} else{
				if(targetAudio.src){
					var pos = targetAudio.currentTime;
					targetVideo.currentTime = pos;
					if (Math.abs(pos - targetVideo.currentTime) >= __PERIOD__) {
						targetVideo.currentTime += __PERIOD__ * parseInt((pos - targetVideo.currentTime) / __PERIOD__);
					}
				}else{
					if( targetVideo.duration - targetVideo.currentTime < __PERIOD__){
						targetVideo.currentTime = targetVideo.duration;
						//手动触发ended事件
						dispatch(targetVideo, 'ended');
					}else{
						targetVideo.currentTime += __PERIOD__ ;
					}
				}
			}
		}

		PVFS.basePlayer();

	};
	PVFS.basePlayer = function(){

		if( document.getElementById('targetVideo') ){
			this.targetVideo.crossOrigin = 'anonymous';
			this.targetVideo.setAttribute('preload','auto');
			this.targetVideo.setAttribute('webkit-playsinline', true);
			this.targetVideo.load();
			this.targetVideo.id = 'targetVideo';
		}
		if( !document.getElementById('targetCanvas') ){
			this.targetCanvas = document.createElement('canvas');
			this.targetCanvas.style.position = 'absolute';
			this.targetCanvas.style.top = 0;
			this.targetCanvas.style.left = 0;
			this.targetCanvas.id = 'targetCanvas';
		}
		var ctx = this.targetCanvas.getContext('2d');
		canvasResize();
		this.targetVideo.play();
		
	};
	PVFS.draw = function() {

		var ctx = targetCanvas.getContext('2d');
		ctx.drawImage(targetVideo,0,0,canvas.clientWidth,canvas.clientHeight);
		if(targetVideo.duration){
			var endTime;
			if(targetVideo.duration > targetAudio.duration){
				endTime = targetAudio.duration;
			}else{
				endTime = targetVideo.duration;
			}
			if(targetVideo.currentTime < endTime ){
				prev_time = targetVideo.currentTime;

				aniId = requestAnimationFrame(this.draw);
			}else{
				cancelAnimationFrame(aniId);

				console.log('cancel ');
			}
		}else{
			aniId = requestAnimationFrame(this.draw);
		}

	};

})(window);