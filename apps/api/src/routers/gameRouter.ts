import { Router } from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getMarkedVGames, markVGame, removeMarkedVGame } from "../controllers/gameController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { idSchema, markVGameSchema } from "@anytrack/joi";

const vGameRouter = Router()

vGameRouter.post('/mark', userMiddleware, joiMiddleware(markVGameSchema, 'body'), markVGame)
vGameRouter.get('/mark', userMiddleware, getMarkedVGames)
vGameRouter.delete('/mark/:id', userMiddleware, joiMiddleware(idSchema, 'params'), removeMarkedVGame)

export default vGameRouter