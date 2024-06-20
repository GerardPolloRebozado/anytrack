import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization;
    if (!auth) {
        return res.status(401).json({ error: "Unauthorized token expired or not found" });
    } else {
        const token = auth.split(" ")[1];
        try {
            if (!process.env.JWT_SECRET) {
                throw new Error("JWT_SECRET not found");
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            res.locals.user = decoded;
            next();
        } catch (error) {
            console.log(error);
            return res.status(401).json({ error });
        }
    }
};
