import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as guidesCtrl from "../controllers/guides.js"

const router = Router();

router.get("/new", isLoggedIn, guidesCtrl.new);

router.post("/", isLoggedIn, guidesCtrl.create);

router.delete("/:id", isLoggedIn, guidesCtrl.delete);

export {
  router
}