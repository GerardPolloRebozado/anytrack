import { Settings } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../services/prisma";

export async function changeSettings(req: Request, res: Response) {
  try {
    const userId = res.locals.user.id;
    const settings: Settings = req.body
    const updatedSettings = await prisma.settings.upsert({
      where: {
        userId,
      },
      create: {
        userId,
        ...settings
      },
      update: settings
    })
    res.status(200).json(updatedSettings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getSettings(req: Request, res: Response) {
  try {
    const settings = await prisma.settings.findUnique({
      where: {
        userId: res.locals.user.id
      }
    })
    res.status(200).json(settings)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
