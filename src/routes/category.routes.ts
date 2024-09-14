import * as express from "express";
import { CategoryController } from "../controllers/category.controller";

const Router = express.Router()

Router.get("/", CategoryController.get)
Router.post("/", CategoryController.create)

export {Router as categoryRouter}
