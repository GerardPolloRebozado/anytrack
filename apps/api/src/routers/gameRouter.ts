import { Router } from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getMarkedVGames, markVGame } from "../controllers/gameController";

const vGameRouter = Router()

vGameRouter.post('/mark', userMiddleware, markVGame)
vGameRouter.get('/mark', userMiddleware, getMarkedVGames)

export default vGameRouter