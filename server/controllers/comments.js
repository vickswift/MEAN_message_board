var mongoose = require('mongoose')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')

module.exports = {

  createComment : function(req, res){
    var post_id = req.params.id;
    Post.findOne({_id: post_id}, function(err, posted_message){
      var newComment = new Comment({name: req.body.inputName, comments: req.body.inputComment});
      console.log("NEW COMMENT", newComment);
      newComment._post = posted_message._id;
      Post.update({_id: posted_message._id}, {$push: {"_comments": newComment}}, function(err){

      });
      newComment.save(function(err){
          if(err){
            console.log(err);
            res.render('index.ejs', {errors: newComment.errors});
          } else {
            console.log("comment added");
            res.redirect("/");
          }
        });
      });
    }

}
