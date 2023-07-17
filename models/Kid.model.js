const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const kidSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      
    },
    age : {
        type: [String],
        enum : ["0-1","1-2","3-4","5-6"],
        required: true
    },
    parentId : {
      type : String
    },
    activities: [
      {
      type: Schema.Types.ObjectId,
      ref:"Activity"
      }
      ],
    done: [
      {
      type: Schema.Types.ObjectId,
      ref:"Activity"
      }
      ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Kid = model("Kid", kidSchema);

module.exports = Kid;

