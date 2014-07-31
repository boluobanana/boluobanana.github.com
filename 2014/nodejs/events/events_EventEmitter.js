var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent' ,function  (arg1, arg2) {
	console.log('listener1', arg1, arg2	);
});

emitter.on("someEvent",function  (arg1, arg2) {
	console.log('listener2', arg1, arg2);
});

emitter.once('anyEvent', function  (arg1, arg2) {
	console.log('listener3', arg1, arg2)
});
emitter.on('anyEvent', function  (arg1, arg2) {
	console.log('listener4', arg1, arg2)
});
// emitter.emit('someEvent', 'byvoid', 1991);

emitter.removeListener('anyEvent',function  (arg1, arg2) {
	console.log('listener4', arg1, arg2)
});
emitter.emit('anyEvent', 'byvoid',1999);

emitter.emit('anyEvent', 'byvoid',1999);
