import { Router } from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getMarkedVGames, markVGame, removeMarkedVGame } from "../controllers/gameController";

const vGameRouter = Router()

vGameRouter.post('/mark', userMiddleware, markVGame)
vGameRouter.get('/mark', userMiddleware, getMarkedVGames)
vGameRouter.delete('/mark/:id', userMiddleware, removeMarkedVGame)

export default vGameRouter