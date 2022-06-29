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

const itemSchema = new Schema({
  name: String,
  imageUrl: String,
  priority: {
    type: Number,
    min: 0,
    max: 2,
  },
  cost: {
    type: Number,
    min: 0
  }
},
{
  timestamps: true
})

const guideSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema],
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