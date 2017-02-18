var five = require('johnny-five');
var board = new five.board();

board.on('ready', function() {
var green = new five.Led(11);
var red = new five.Led(10);
var blue = new five.Led(9);
red.pulse(2000);
blue.pulse(1500);
green.pulse(1000);
});
