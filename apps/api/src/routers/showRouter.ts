import { Router } from "express";
import { markShow, searchShow } from "../controllers/showController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getShowSchema } from "@anytrack/joi";

const showRouter = Router();

showRouter.post("/mark", userMiddleware, markShow);
showRouter.get("/", joiMiddleware(getShowSchema, "query"), searchShow);

export default showRouter;
