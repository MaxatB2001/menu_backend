import * as express from "express";
import { MenuController } from "../controllers/menu.controller";
 
const Router = express.Router()

Router.get(
    '/',
    MenuController.getMenuItems
)
Router.post("/", MenuController.createMenuItem)
Router.post("/add-extra-option/:uid",MenuController.addExtraOptionsMenuItem)


export {Router as menuRouter} 