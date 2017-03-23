// Require the Mongoose Module
var mongoose = require('mongoose');

// define Schema variable
var Schema = mongoose.Schema;
// define Post Schema
var PostSchema = new mongoose.Schema({
name: {type: String, required: true, min: [4, 'Name should be atleast 4 characters'] },
message: {type: String, required: true },
_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: {createdAt: 'created_at', updatedAt:'updated_at'} });

// set the model by passing it the Schema
mongoose.model('Post', PostSchema);
