import { Router } from "express";
import { signin, signup } from "../controllers/userController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { createUserSchema, loginUserSchema } from "@anytrack/joi";

const userRouter = Router();

userRouter.post("/signup", joiMiddleware(createUserSchema, 'body'), signup);
userRouter.post("/signin", joiMiddleware(loginUserSchema, 'body'), signin);

export default userRouter;
