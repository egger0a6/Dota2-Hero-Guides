import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: {type: Schema.Types.ObjectId, ref: "Profile"}
},
{
  timestamps: true
})

const guideSchema = new mongoose.Schema({
  name: String,
  items: {type: Schema.Types.ObjectId, ref: "Item"},
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  hero: {type: Schema.Types.ObjectId, ref: ""},
  comments: [commentSchema]
},
{
  timestamps: true
})

const Guide = mongoose.model("Guide", guideSchema);

export {
  Guide
}