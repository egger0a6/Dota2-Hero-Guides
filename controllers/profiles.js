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
  Guide.find({})
  Profile.findById(req.params.id)
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then((self) => {
      res.render("profiles/show", {
        profile,
        isSelf,
        title: `${profile.name}'s Profile`
      })
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/profiles")
    })
  })
  .catch((err) => {
    console.log(err);
    res.redirect("/profiles");
  })
}

export {
  index,
  show
}