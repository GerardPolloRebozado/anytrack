import { Router } from "express";
import { getManyFutureMedia } from "../controllers/mediaController";
import { userMiddleware } from "../middlewares/userMiddleware";

const mediaRouter = Router();

mediaRouter.get('/future', userMiddleware, getManyFutureMedia)

export default mediaRouter;
