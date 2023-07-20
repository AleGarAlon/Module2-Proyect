const { Schema, model } = require("mongoose");


const activityBetaSchema = new Schema(
    {
      name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true, 
      },
      description: {
        type: String,
        required: true, 
      },
      duration: {
        type: Number,
        enum : [5,15,30,60],
        required: true
      },
      age : {
        type: [String],
        enum : ["0-1","1-2","3-4","5-6"],
        required: true
      },
      materials : {
        type: [String],
        trim: true,
        required: true
      },
      skills : {
        type: [String],
        trim: true,
        required: true
      },
      steps : {
        type: [String],
        trim: true,
        required: true
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
  
  const ActivityBeta = model("ActivityBeta", activityBetaSchema);
  
  module.exports = ActivityBeta;