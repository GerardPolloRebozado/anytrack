import { Router } from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import { markVGame } from "../controllers/gameController";

const vGameRouter = Router()

vGameRouter.post('/mark', userMiddleware, markVGame)

export default vGameRouter