'use client'
import Callout from "@/components/Callout/Callout";
import { searchMoviebyId, updateMovieReview, getReview } from "@/utils/fetch/movies";
import { useEffect, useState } from "react";
import Image from "next/image";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import Chip from "@/components/Chip/Chip";
import MediaScore from "@/components/MediaScore/MediaScore";
import Tabs from "@/components/Tabs/Tabs";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { MediaReviewForm, Notification } from "libs/types/src";
import Notifications from "@/components/Notifications/Notifications";
import { joiResolver } from "@hookform/resolvers/joi";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateReviewSchema } from "libs/joi/src";
import { getCredits } from "@/utils/fetch/tmdb";
import { Card } from "@/components/ui/card";
import distinctColors from "distinct-colors";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function MovieDetails({ params }: { params: { id: number } }) {
  const [movie, setMovie] = useState<any>();
  const [error, setError] = useState('');
  const [credits, setCredits] = useState<any>();
  const [reload, setReload] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [reviews, setReviews] = useState<any[]>([]);
  const reviewForm = useForm<MediaReviewForm>({
    resolver: joiResolver(updateReviewSchema),
    defaultValues: {
      mediaId: movie?.localId,
    }
  });
  const colors = distinctColors({ count: movie?.genres?.length, chromaMin: 50, lightMin: 30, lightMax: 70, quality: 50 });
  const submitReview: SubmitHandler<MediaReviewForm> = async (data: MediaReviewForm) => {
    try {
      const response = await updateMovieReview(data)
      if (!response.ok) throw new Error(await response.json())
      addNotification({ type: 'success', message: 'Review added successfully' })
      setReload(!reload)
      reviewForm.reset()
      reviewForm.setValue('mediaId', movie.localId)
    } catch (error: any) {
      console.error(error)
      addNotification({ type: 'error', message: 'Error adding review' })
    }
  }


  function addNotification(notification: Notification) {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(1))
    }, 5000)
  };



  useEffect(() => {
    async function fetchReviews(mediaId: number) {
      try {
        const response = await getReview(mediaId)
        if (!response.ok) throw new Error(await response.json())
        setReviews(await response.json())
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    async function fetchMovie() {
      try {
        const response = await searchMoviebyId(params.id);
        const movie = await response.json();
        setMovie(await movie)
        if (await movie.localId) {
          fetchReviews(await movie.localId)
          reviewForm.setValue('mediaId', await movie?.localId)
        }
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchMovie();

    async function fetchCredits() {
      try {
        const response = await getCredits({ tmdbId: params.id, mediaType: 'movie' })
        const credits = await response.json()
        setCredits(await credits.cast)
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchCredits()
  }, [params.id, reload, reviewForm]);

  const closeModal = () => {
    setError('')
  }


  return (
    <>
      <Notifications notifications={notifications} setNotifications={setNotifications} />
      {error && (
        <div className="flex flex-col justify-center items-center fixed bg-[rgba(0,0,0,0.5)] z-10 w-full h-full" onClick={closeModal}>
          <p className="absolute p-4 text-3xl cursor-pointer">X</p>
          <Callout type="error">{error}</Callout>
        </div>
      )}
      <>
        {movie && (
          <div className="flex gap-x-12 ml-24 mt-8">
            <div className="w-[11dvw]">
              <Image
                src={movie.poster}
                alt={movie.title}
                width={0}
                height={0}
                sizes="100vw"
                objectFit="cover"
                className="w-[11dvw] h-auto rounded-lg"
              />

            </div>
            <div className='flex flex-col items-start w-[50dvw]'>
              <h1 className="text-3xl font-bold">{movie.title} ({movie.release_date.split('-')[0]})</h1>
              <p className='text-l flex my-4'>{movie.genres.map((genre: any, index: number) => <Chip key={genre.id} bgColor={colors[index].hex()}>{genre.name}</Chip>)}</p>
              <p> {movie.runtime} min</p>
              <MediaScore score={movie.vote_average} source="tmdb" />
              <p className="my-4">{movie.overview}</p>
              <Tabs>
                <div id="Credits" className="flex gap-x-2 py-4">

                  {credits && credits.length > 0 && (
                    <Carousel opts={{ loop: true, align: "start" }} >
                      <CarouselContent className="w-[50dvw]">
                        {(credits.map((credit: any) => (
                          <CarouselItem key={credit.id} className="basis-[8dvw] ml-4">
                            <Card key={credit.id} className="w-[8dvw] h-full">
                              <Image
                                src={credit.profile_path}
                                alt={credit.name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="rounded-lg max-w-[8dvw] w-[8dvw] h-auto"
                              />
                              <div className="p-2">
                                <p>{credit.name}</p>
                                <p>{credit.character}</p>
                              </div>
                            </Card>
                          </CarouselItem>)))}
                      </CarouselContent>
                      <CarouselNext />
                      <CarouselPrevious />
                    </Carousel>
                  )}
                </div>
                <div id="Reviews">
                  <div className='grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 my-4'>
                    {reviews.length > 0 ? reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} setReload={() => setReload(!reload)} />
                    )) : <p>No reviews found</p>}
                  </div>
                  {movie.localId && (
                    <Form {...reviewForm}>
                      <form onSubmit={reviewForm.handleSubmit(submitReview)}>
                        <FormField
                          control={reviewForm.control}
                          name="rating"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Rating</FormLabel>
                              <FormControl>
                                <Input placeholder="Rating" type="number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={reviewForm.control}
                          name="review"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Review</FormLabel>
                              <FormControl>
                                <Input placeholder="Write a review of the movie" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        <Button type="submit" className="mt-1">Submit</Button>
                      </form>
                    </Form>)}
                </div>
              </Tabs>
            </div>
          </div>
        )}
      </>
    </ >
  );
}

export default withProtectedRoute(MovieDetails);
