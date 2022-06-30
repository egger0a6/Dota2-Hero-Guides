import DotaWebApi from "dota-web-api";
import { Hero } from "../models/hero.js";


const api = new DotaWebApi(process.env.STEAM_WEB_API_KEY);

function index(req, res) {
  Hero.find({}).sort({name: 1})
  .then((heroes) => {
    api.getHeroes()
    .then((response) => {
      heroes.forEach((hero) => {
        if (hero.name in response) {
          delete response[hero.name];
        }
      })
      res.render("heroes/index", {
        heroes,
        results: response,
        title: "All Heroes"
      })
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/heroes");
    })
  })
  .catch((err) => {
    console.log(err);
    res.redirect("/heroes");
  })
}

function create(req, res) {
  Hero.create(req.body)
  .then((hero) => {
    res.redirect("/heroes");
  })
  .catch((err) => {
    console.log(err);
    res.redirect("/heroes");
  })
}

function show(req, res) {
  Hero.findById(req.params.id)
  .populate({
    path: "guides",
    populate: {
      path: "author",
    }
  })
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
  .then((hero) => {
    res.render("heroes/show", {
      hero,
      title: "Hero Details"
    })
  })
  .catch((err) => {
    console.log(err);
    res.redirect("/heroes");
  })
}

export {
  index,
  create,
  show
}