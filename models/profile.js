import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  guides: [{type: Schema.Types.ObjectId, ref: "Guide"}],
  favHeroes: [{type: Schema.Types.ObjectId, ref: "Hero"}]
}, 
{
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
