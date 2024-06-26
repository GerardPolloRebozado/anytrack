import { Router } from "express";
import { signin, signup, userData } from "../controllers/userController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { createUserSchema, loginUserSchema } from "@anytrack/joi";
import { userMiddleware } from "../middlewares/userMiddleware";

const userRouter = Router();

userRouter.post("/signup", joiMiddleware(createUserSchema, 'body'), signup);
userRouter.post("/signin", joiMiddleware(loginUserSchema, 'body'), signin);
userRouter.get("/", userMiddleware, userData)

export default userRouter;
