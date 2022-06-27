import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as heroesCtrl from "../controllers/heroes.js";

const router = Router();

router.get("/", heroesCtrl.index);

export {
  router
}