import { Review } from "@prisma/client"
import Cookies from "js-cookie"
import { ReviewForm, ReviewWithUser } from "libs/types/src"

export const upsertReview = async (data: ReviewForm) => {
  return await fetch('/api/v1/review', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`
    },
    body: JSON.stringify(data)
  })
}

export const getReviews = async (mediaId: number): Promise<ReviewWithUser[]> => {
  const response = await fetch(`/api/v1/review/${mediaId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }

  const data = await response.json();
  return data;
};
