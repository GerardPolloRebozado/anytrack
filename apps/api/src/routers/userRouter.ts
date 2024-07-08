import { Router } from "express";
import { signin, signup, updateUser, userData } from "../controllers/userController";
import joiMiddleware from "../middlewares/joiMiddleware";
import { createUserSchema, loginUserSchema, updateUserSchema } from "@anytrack/joi";
import { userMiddleware } from "../middlewares/userMiddleware";

const userRouter = Router();

userRouter.post("/signup", joiMiddleware(createUserSchema, 'body'), signup);
userRouter.post("/signin", joiMiddleware(loginUserSchema, 'body'), signin);
userRouter.get("/", userMiddleware, userData);
userRouter.put('/', userMiddleware, joiMiddleware(updateUserSchema, 'body'), updateUser);

export default userRouter;
