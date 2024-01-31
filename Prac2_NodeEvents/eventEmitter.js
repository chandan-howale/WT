var events = require('events');
var em = new events.EventEmitter();
var ch = function (){
 console.log('Bulb is on');
}
var ch1 = function(){
 console.log('Bulb is off');
}
em.on('on',ch);
em.on('off',ch1);
em.emit('on');
em.emit('off');