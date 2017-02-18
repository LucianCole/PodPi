var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
var green = new five.Led(9);
var red = new five.Led(10);
var blue = new five.Led(11);

red.pulse({
  easing: "linear",
  duration: 7500,
  cuePoints: [0, 0.27, 0.33, 0.6, 0.67, 0.93, 1],
  keyFrames: [255, 127, 0, 0, 0, 0, 255],
  metronomic: false,
});
blue.pulse({
  easing: "linear",
  duration: 7500,
  cuePoints: [0, 0.27, 0.33, 0.6, 0.67, 0.93, 1],
  keyFrames: [0, 0, 255, 127, 0, 0, 0],
  metronomic: false,
});
green.pulse({
  easing: "linear",
  duration: 7500,
  cuePoints: [0, 0.27, 0.33, 0.6, 0.67, 0.93, 1],
  keyFrames: [0, 0, 0, 0, 255, 127, 0],
  metronomic: false,
});
});
