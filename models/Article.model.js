const { Schema, model } = require("mongoose");


const articleSchema = new Schema(
    {
      title: {
        type: String,
        trim: true,
        required: true,
        unique: true,
      },
      information: {
        type: String,
        required: true, 
      },
      month: {
        type: Number,
        required: true
      },
      year: {
        type: Number,
        required: true
      },
      reference: {
        type: String, 
      },
      image : {
        type : String,
      } 
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`    
      timestamps: true
    }
  );
  
  const Article = model("Article", articleSchema);
  
  module.exports = Article;