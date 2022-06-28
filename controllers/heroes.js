import DotaWebApi from "dota-web-api";
import { Hero } from "../models/hero.js";


const api = new DotaWebApi(process.env.STEAM_WEB_API_KEY);

function index(req, res) {
  api.getHeroes()
  .then((response) => {
    console.log(response)
    res.render("heroes/index", {
      results: response,
      title: "All Heroes"
    })
  })
  .catch((err) => {
    console.log(err);
    res.redirect("/heroes");
  })
}

export {
  index
}