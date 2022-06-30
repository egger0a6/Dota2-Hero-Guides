import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  imageUrl: String,
  cost: {
    type: Number,
    min: 0
  }
},
{
  timestamps: true
})

const Item = mongoose.model("Item", itemSchema);

export {
  Item
}