var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');

// Use native promises
mongoose.Promise = global.Promise; //Do we need it???

var fs = require('fs');
var path = require('path');

var models_path = path.join(__dirname, '/../models');
fs.readdirSync(models_path).forEach(function (file) {
  if (file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})

//Do we need the models_path?? Because before it looks like code
//works just fine.
