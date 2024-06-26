import { Request, Response } from "express";
import prisma from "../services/prisma";

export const getReviews = async (req: Request, res: Response) => {
  try {
    const userId = String(res.locals.user.id)
    const mediaId = Number(req.params.mediaId);
    const reviews = await prisma.review.findMany({
      where: {
        mediaId,
        OR: [
          {
            user: {
              settings: {
                public: true
              }
            }
          },
          {
            userId
          }
        ]
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

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const mediaId = Number(req.params.mediaId);
    const review = await prisma.review.delete({
      where: {
        userId_mediaId: {
          userId,
          mediaId
        }
      }
    })
    res.status(200).json(review)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

