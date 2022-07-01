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
  Profile.findById(req.params.id)
  .populate("guides")
  .populate("favHeroes")
  .populate({
    path: "guides",
    populate: {
      path: "startingItems",
    }
  })
  .populate({
    path: "guides",
    populate: {
      path: "coreItems",
    }
  })
  .populate({
    path: "guides",
    populate: {
      path: "situationalItems",
    }
  })
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then((self) => {
      const isSelf = self._id.equals(profile._id);
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