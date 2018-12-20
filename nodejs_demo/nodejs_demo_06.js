/**
 * Created by zhengjin on 2016/11/3.
 *
 * Demo use events refer to Node.js Tutorial.
 */
var events = require('events');

// example 01
var eventEmitter = new events.EventEmitter();

eventEmitter.on('data_received', function () {
    console.log('data received success!');
});

//eventEmitter.once('data_received', function () {
//    console.log('data received success!');
//});

eventEmitter.emit('data_received');
eventEmitter.emit('data_received');


// example 02
//var eventEmitter = events.EventEmitter;
//var emitter = new eventEmitter();
//
//emitter.on('newListener', function (eventName, listener) {
//    console.log('Added listener for ' + eventName + ' events');
//});
//
//emitter.on('data_received', function () {
//});
//emitter.on('data_received', function () {
//});
//
//console.log(eventEmitter.listenerCount(emitter, "data_received"));
