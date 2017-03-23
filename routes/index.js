module.exports = function Route(app){
  // Require the Mongoose Module
  var mongoose = require('mongoose');

    // define Schema variable
  // var Schema = mongoose.Schema;
  // // define Post Schema
  // var PostSchema = new mongoose.Schema({
  //   name: {type: String, required: true, min: [4, 'Name should be atleast 4 characters'] },
  //   message: {type: String, required: true },
  //   _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
  // }, {timestamps: {createdAt: 'created_at', updatedAt:'updated_at'} });

  // // define Comment Schema
  // var CommentSchema = new mongoose.Schema({
  //   name: {type: String},
  //   comments: {type: String},
  //   _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  // }, {timestamps: {createdAt: 'created_at', updatedAt:'updated_at'} });
  // CommentSchema.path('name').required(true, 'Name cannot be blank');
  // CommentSchema.path('comments').required(true, 'Comment cannot be blank');

  // set our models by passing them their respective Schemas
  // mongoose.model('Post', PostSchema);
  // mongoose.model('Comment', CommentSchema);


// basic models now in our models folder
//basic controllers now in controllers folder

var postMessagesController = require('./../controllers/posts.js');
var commentsController = require('./../controllers/comments.js');

//************** Routes *****************
// root route for fetched messages and their comments
app.get("/", postMessagesController.getAllMessagesWithComments);

//   app.get("/", function(req, res){
//   	Post.find({}, false, true)
//     .populate('_comments')
//     .exec(function(err, messages){
//       if (err) {
//         console.log("Error finding posted messages", err);
//       }
//       console.log(messages.comments);
//   	  res.render('index.ejs', {fetched_messages: messages});
//   	});
//   });
//
// // route to process posted message and redirect to root route
app.post('/message', postMessagesController.postMessage);
//   app.post('/message', function(request, response) {
//     var postMessage = new Post({name: request.body.inputName, message: request.body.inputMessage});
//     postMessage.save(function(err, result) {
//       if (err) {
//         console.log("Error posting message", postMessage.errors);
//       }else {
//         console.log("Success posting message");
//         response.redirect('/')
//       }
//     })
//   })
//
//   // route for creating one comment with the parent post id
app.post('comment/:id', commentsController.createComment);

//   app.post("/comment/:id", function(req, res){
// 	var post_id = req.params.id;
// 	Post.findOne({_id: post_id}, function(err, posted_message){
// 		var newComment = new Comment({name: req.body.inputName, comments: req.body.inputComment});
//     console.log("NEW COMMENT", newComment);
// 		newComment._post = posted_message._id;
// 		Post.update({_id: posted_message._id}, {$push: {"_comments": newComment}}, function(err){
//
// 		});
// 		newComment.save(function(err){
// 			if(err){
// 				console.log(err);
// 				res.render('index.ejs', {errors: newComment.errors});
// 			} else {
// 				console.log("comment added");
// 				res.redirect("/");
// 			}
// 		});
// 	});
// });

}
