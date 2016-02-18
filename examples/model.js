// Import everything in the library into the '$' variable.
var $ = require('/../lib/import.js').library();

var game = new $.Game();

$.Model.init(game.window);

var model = $.Model.load('/assets/suzanne.json');
model.transform.scale(0.5, 0.5, 0.5);

game.update = function() {
  model.transform.rotate(0, 0.01, 0);
};

game.draw = function() {
  // Camera and lights need to be updated when changed.
  $.Model.updateCameraAndLights();
  model.draw();
};

// Start running the game which calls update and draw.
game.run();