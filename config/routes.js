var postMessagesController = require('./../controllers/posts.js');
var commentsController = require('./../controllers/comments.js');

module.exports = function(app){
//************** Routes *****************
  // root route for fetched messages and their comments
  app.get("/", postMessagesController.getAllMessagesWithComments);

  // // route to process posted message and redirect to root route
  app.post('/message', postMessagesController.postMessage);

  //   // route for creating one comment with the parent post id
  app.post('/comment/:id', commentsController.createComment);
}
