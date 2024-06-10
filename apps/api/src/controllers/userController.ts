import { Request, Response } from "express";
import { comparePasswords, hashPassword } from "../services/bcryptService";
import { createUser, getUserByEmail } from "../services/userService";
import jwt from 'jsonwebtoken';
import { User } from "@prisma/client";

export async function signup(req: Request, res: Response) {
    try {
        const user: Omit<User, "id" | "createdAt" | "updatedAt"> = req.body;
        if (await getUserByEmail(user.email)) {
            return res.status(400).json({ error: "User already exists" });
        }
        user.password = await hashPassword(user.password);
        const newUser = await createUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export async function signin(req: Request, res: Response) {
    try {
        const user: Pick<User, "email" | "password"> = req.body;
        const foundUser = await getUserByEmail(user.email);
        if (!foundUser) {
            return res.status(400).json({ error: "User not found" });
        }
        if (await comparePasswords(user.password, foundUser.password)) {
            if (!process.env.JWT_SECRET) {
                throw new Error("JWT_SECRET not found");
            }
            const token = jwt.sign({ id: foundUser.id }, process.env.JWT_SECRET, { expiresIn: "30d" });
            return res.status(200).json({ token });
        } else {
            return res.status(400).json({ error: "Invalid email or password" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}
