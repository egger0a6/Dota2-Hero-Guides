import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.find({})
  .then((profiles) => {
    res.render("profiles/index", {
      profiles,
      title: "All Users"
    })
  })
  .catch((err) => {
    console.log(err);
    res.redirect(`/profiles`)
  })
}

function show(req, res) {
  console.log("profile show")
}

export {
  index,
  show
}