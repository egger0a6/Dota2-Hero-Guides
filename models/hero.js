import mongoose from "mongoose";

const Schema = mongoose.Schema;

const heroSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  guides: [{type: Schema.Types.ObjectId, ref: "Guide"}],
},
{
  timestamps: true
})

const Hero = mongoose.model("Hero", heroSchema);

export {
  Hero
}