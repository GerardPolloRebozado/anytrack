import { Router } from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import { changeSettings, getSettings } from "../controllers/settingsController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { updateSettingsSchema } from "@anytrack/joi";


const settingRouter = Router();

settingRouter.post("/", joiMiddleware(updateSettingsSchema, 'body'), userMiddleware, changeSettings);
settingRouter.get("/", userMiddleware, getSettings);

export default settingRouter;
