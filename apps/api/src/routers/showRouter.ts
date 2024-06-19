import { Router } from "express";
import { markShow, searchShow } from "../controllers/showController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getShowSchema, markShowSchema } from "@anytrack/joi";

const showRouter = Router();

showRouter.post("/mark", userMiddleware, joiMiddleware(markShowSchema, 'body'), markShow);
showRouter.get("/", userMiddleware, joiMiddleware(getShowSchema, "query"), searchShow);

export default showRouter;
