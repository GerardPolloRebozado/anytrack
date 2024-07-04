'use client'
import Callout from "@/components/Callout/Callout";
import { searchMoviebyId, updateMovieReview, getReview } from "@/utils/fetch/movies";
import { useEffect, useState } from "react";
import styles from './page.module.css';
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import Chip from "@/components/Chip/Chip";
import { randomColor } from "@/utils/randomColor";
import MediaScore from "@/components/MediaScore/MediaScore";
import Tabs from "@/components/Tabs/Tabs";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { MediaReviewForm, Notification } from "libs/types/src";
import Notifications from "@/components/Notifications/Notifications";
import { joiResolver } from "@hookform/resolvers/joi";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input/Input";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { updateReviewSchema } from "libs/joi/src";
import { getCredits } from "@/utils/fetch/tmdb";
import Card from "@/components/Card/Card";

function MovieDetails({ params }: { params: { id: number } }) {
  const [movie, setMovie] = useState<any>();
  const [error, setError] = useState('');
  const [credits, setCredits] = useState<any>();
  const [reload, setReload] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [reviews, setReviews] = useState<any[]>([]);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<MediaReviewForm>({
    resolver: joiResolver(updateReviewSchema),
    defaultValues: {
      mediaId: movie?.localId,
    }
  });
  const submitReview: SubmitHandler<MediaReviewForm> = async (data: MediaReviewForm) => {
    try {
      const response = await updateMovieReview(data)
      if (!response.ok) throw new Error(await response.json())
      addNotification({ type: 'success', message: 'Review added successfully' })
      setReload(!reload)
      reset()
      setValue('mediaId', movie.localId)
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
          setValue('mediaId', await movie?.localId)
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
  }, [params.id, reload, setValue]);

  const closeModal = () => {
    setError('')
  }


  return (
    <div className={styles.container}>
      <ArrowLeft className={styles.back} size={32} onClick={() => router.back()} />
      <Notifications notifications={notifications} setNotifications={setNotifications} />
      {error && (
        <div className={styles.errorModal} onClick={closeModal}>
          <p className={styles.closeModal}>X</p>
          <Callout type="error">{error}</Callout>
        </div>
      )}
      <div>
        {movie && (
          <div className={styles.grid}>
            <div className={styles.poster}>
              <Image
                src={movie.poster}
                alt={movie.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '15dvw', height: 'auto' }} />
            </div>
            <div className={styles.movieDetails}>
              <h1 className={styles.title}>{movie.title} ({movie.release_date.split('-')[0]})</h1>
              <p className={styles.genres}>{movie.genres.map((genre: any) => <Chip key={genre.id} bgColor={randomColor()}>{genre.name}</Chip>)}</p>
              <p className={styles.runtime}> {movie.runtime} min</p>
              <MediaScore score={movie.vote_average} source="tmdb" />
              <p className={styles.overview}>{movie.overview}</p>
              <Tabs>
                <div id="Credits" className={styles.creditList}>
                  {credits && credits.length > 0 && (
                    credits.map((credit: any) => (
                      <Card key={credit.id} className={styles.creditCard} padding={false}>
                        <Image
                          src={credit.profile_path}
                          alt={credit.name}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '6dvw', height: 'auto' }}
                        />
                        <div className={styles.castDetails}>
                          <h5>{credit.name}</h5>
                          <p>{credit.character}</p>
                        </div>
                      </Card>
                    )))}
                </div>
                <div id="Reviews" className={styles.reviewsContainer}>
                  <div className={styles.reviewList}>
                    {reviews.length > 0 ? reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} setReload={() => setReload(!reload)} />
                    )) : <p>No reviews found</p>}
                  </div>
                  {movie.localId && (
                    <form onSubmit={handleSubmit(submitReview)}>
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
                  )}
                </div>
              </Tabs>
            </div>
          </div>
        )}
      </div>
    </div >
  );
}

export default withProtectedRoute(MovieDetails);
