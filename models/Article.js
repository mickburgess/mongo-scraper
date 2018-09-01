var mongoose = require("mongoose");

// reference to the Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  // Headline - the title of the article
  title: {
    type: String,
    required: true,
    unique: true
  },
  // URL - the link to the original article
  link: {
    type: String,
    required: true
  },
  // Date - the date the article was added to db
  date: {
    type: Date,
    default: Date.now()
  },
  note: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

// Create model from above schema using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;