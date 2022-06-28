import DotaWebApi from "dota-web-api";
import { Guide } from "../models/guide.js";
import { Item } from "../models/item.js";

function newGuide(req, res) {
  console.log("new Guide");
}

function create(req, res) {
  console.log("create Guide");
}

export {
  newGuide as new
}