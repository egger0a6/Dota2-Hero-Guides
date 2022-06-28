import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as guidesCtrl from "../controllers/guides.js"

const router = Router();

router.get("/new", isLoggedIn, guidesCtrl.new);

export {
  router
}