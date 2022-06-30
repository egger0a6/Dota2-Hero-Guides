import DotaWebApi from "dota-web-api";
import { Guide } from "../models/guide.js";
import { Hero } from "../models/hero.js";
import { Item } from "../models/item.js";

const api = new DotaWebApi(process.env.STEAM_WEB_API_KEY);

// add all items to database if they don't already exist
function createItems(req, res) {
  api.getItems()
  .then((response) => {
    Object.keys(response).forEach((key) => {
      if (key.includes("recipe") || response[key].cost === 0 || response[key].id > 1000 ||key.includes("single") || key.includes("courier")) {
        delete response[key];
      }
    });
    for (const item in response) {
      const newItem = new Item(
        {
          name: response[item].localized_name,
          imageUrl: response[item].images.lg,
          cost: response[item].cost
        }
      );
      newItem.save()
      .catch((err) => {
        console.log(err);
        res.redirect("/heroes");
      })
    }
  })
  .catch((err) => {
    console.log(err);
    res.redirect("/heroes");
  })
}

function newGuide(req, res) {
  // if no items exist in db, create them first
  Item.estimatedDocumentCount()
  .then((count) => {
    if (!count) {
      createItems(req, res);
    }
  })
  .catch((err) => {
    console.log(err);
    res.redirect("/heroes");
  })
  Hero.find({}).sort({name: 1})
  .then((heroes) => {
    Item.find({}).sort({cost: 1})
    .then((items) => {
      res.render("guides/new", {
        heroes,
        items,
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
  console.log(req.body);
  res.redirect("/heroes");
}

export {
  create,
  newGuide as new
}