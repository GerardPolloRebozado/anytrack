import { Request, Response } from "express";
import { comparePasswords, hashPassword } from "../services/bcryptService";
import jwt from 'jsonwebtoken';
import { user } from "@prisma/client";
import prisma from "../services/prisma";

export async function signup(req: Request, res: Response) {
  try {
    const user: Omit<user, "id" | "createdAt" | "updatedAt"> = req.body;
    if (await prisma.user.findUnique({ where: { email: user.email } })) {
      return res.status(400).json({ error: "User already exists" });
    }
    user.password = await hashPassword(user.password);
    const newUser = await prisma.user.create({ data: user });
    await prisma.setting.create({ data: { userId: newUser.id } });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function signin(req: Request, res: Response) {
  try {
    const user: Pick<user, "email" | "password"> = req.body;
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
    delete user.password
    delete user.createdAt
    delete user.updatedAt
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const userId = res.locals.user.id
    const { email, name } = req.body;
    let password = req.body.password;
    if (password) {
      password = await hashPassword(password)
    }
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email,
        name,
        password,
      }
    })
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    } else {
      delete user.password
    }
    res.status(200).json(user)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
