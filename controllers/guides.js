import DotaWebApi from "dota-web-api";
import { Guide } from "../models/guide.js";
import { Hero } from "../models/hero.js";

const api = new DotaWebApi(process.env.STEAM_WEB_API_KEY);

function newGuide(req, res) {
  Hero.find({}).sort({name: 1})
  .then((heroes) => {
    api.getItems()
    .then((response) => {
      Object.keys(response).forEach((key) => {
        if (key.includes("recipe") || response[key].cost === 0 || response[key].id > 1000 ||key.includes("single")) {
          delete response[key]
        }
      });
      let results = Object.entries(response).sort((a, b) => {
        return ((a[1].cost) - (b[1].cost))
      });
      res.render("guides/new", {
        heroes,
        results: results,
        title: "Create a Hero Guide"
      });
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
  console.log("create Guide");
}

export {
  create,
  newGuide as new
}