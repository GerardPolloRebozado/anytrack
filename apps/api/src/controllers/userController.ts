import { Request, Response } from "express";
import { comparePasswords, hashPassword } from "../services/bcryptService";
import jwt from 'jsonwebtoken';
import { User } from "@prisma/client";
import prisma from "../services/prisma";

export async function signup(req: Request, res: Response) {
  try {
    const user: Omit<User, "id" | "createdAt" | "updatedAt"> = req.body;
    if (await prisma.user.findUnique({ where: { email: user.email } })) {
      return res.status(400).json({ error: "User already exists" });
    }
    user.password = await hashPassword(user.password);
    const newUser = await prisma.user.create({ data: user });
    await prisma.settings.create({ data: { userId: newUser.id } });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function signin(req: Request, res: Response) {
  try {
    const user: Pick<User, "email" | "password"> = req.body;
    const foundUser = await prisma.user.findUnique({ where: { email: user.email } });
    if (!foundUser) {
      return res.status(400).json({ error: "User not found" });
    }
    if (await comparePasswords(user.password, foundUser.password)) {
      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET not found");
      }
      const token = jwt.sign({ id: foundUser.id }, process.env.JWT_SECRET, { expiresIn: "30d" });
      return res.status(200).json({ token, userId: foundUser.id });
    } else {
      return res.status(400).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function userData(req: Request, res: Response) {
  try {
    const user = await prisma.user.findUnique({ where: { id: res.locals.user.id } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
