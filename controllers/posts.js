var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = {

  getAllMessagesWithComments :  function(req, res) {
    var posts = Post.find({}, false, true)
    .populate('_comments')
    .exec(function(err, messages){
      if (err) {
        console.log("Error finding posted messages", err);
      }
      console.log(messages.comments);
      res.render('index.ejs', {fetched_messages: messages});
    });
  },
  postMessage : function(req, res){
  var postMessage = new Post({name: req.body.inputName, message: req.body.inputMessage});
    postMessage.save(function(err, result) {
      if (err) {
        console.log("Error posting message", postMessage.errors);
      }else {
        console.log("Success posting message");
        res.redirect('/')
      }
    });
  }
}
