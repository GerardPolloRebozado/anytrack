import { Request, Response } from "express";
import prisma from "../services/prisma";

export const getReviews = async (req: Request, res: Response) => {
  try {
    const mediaId = Number(req.params.mediaId);
    const reviews = await prisma.review.findMany({
      where: {
        mediaId,
      },
      include: {
        user: true,
      }
    });
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const upsertReview = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const { review, rating, mediaId } = req.body;
    console.log(req.body)
    console.log(userId)
    const reviewFromDb = await prisma.review.upsert({
      where: {
        userId_mediaId: {
          userId,
          mediaId
        }
      },
      create: {
        userId,
        review,
        rating,
        mediaId,
      },
      update: {
        review,
        rating
      }
    })
    res.status(200).json(reviewFromDb)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

