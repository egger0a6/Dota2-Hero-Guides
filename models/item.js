import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
},
{
  timestamps: true
})

const Item = mongoose.model("Item", itemSchema);

export {
  Item
}