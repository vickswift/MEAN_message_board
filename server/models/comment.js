// Require the Mongoose Module
var mongoose = require('mongoose');

// define Schema variable
var Schema = mongoose.Schema;
// // define Comment Schema
var CommentSchema = new mongoose.Schema({
  name: {type: String},
  comments: {type: String},
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
}, {timestamps: {createdAt: 'created_at', updatedAt:'updated_at'} });
CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('comments').required(true, 'Comment cannot be blank');

// set the model by passing it the Schema
mongoose.model('Comment', CommentSchema);
