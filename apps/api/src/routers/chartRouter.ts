import { Router } from "express";
import { userMiddleware } from "../middlewares/userMiddleware";
import { getMediaRuntimeChart } from "../controllers/chartController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { getMediaRuntimeChartSchema } from "@anytrack/joi";


const chartRouter = Router()

chartRouter.get('/mediaRuntime', userMiddleware, joiMiddleware(getMediaRuntimeChartSchema, 'query'), getMediaRuntimeChart)

export default chartRouter;
