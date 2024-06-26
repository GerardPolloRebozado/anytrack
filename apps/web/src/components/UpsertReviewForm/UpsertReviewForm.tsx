'use client'
import { upsertReview } from "@/utils/fetch/reviews";
import { joiResolver } from "@hookform/resolvers/joi";
import { upsertReviewSchema } from "libs/joi/src";
import { Notification, ReviewForm } from "libs/types/src";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input/Input";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function UpsertReviewForm({ mediaId, addNotification, setReload }: { mediaId: number, addNotification: (notification: Notification) => void, setReload: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<ReviewForm>({
    resolver: joiResolver(upsertReviewSchema),
    defaultValues: {
      mediaId: mediaId,
    }
  });

  const onSubmit: SubmitHandler<ReviewForm> = async (data: ReviewForm) => {
    const response = await upsertReview(data)
    if (response.status === 200) {
      addNotification({ type: 'success', message: 'Review added successfully' })
      setReload()
    } else {
      addNotification({ type: 'error', message: 'Error adding review' })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Rating"
        register={register}
        name="rating"
        type="number"
        placeholder="Rating"
        error={errors.rating}
      />
      <Input
        label="Review"
        register={register}
        name="review"
        type="text"
        placeholder="Type your review"
        error={errors.review}
      />
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </form>
  )
}
