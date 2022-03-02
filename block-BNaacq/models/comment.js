var mongoose = require("mongoose");
var User = require("./user");
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: String,
    author: { type: Schema.Types.ObjectId, ref: User },
    article: String,
  },
  { timestamps: true }
);

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;