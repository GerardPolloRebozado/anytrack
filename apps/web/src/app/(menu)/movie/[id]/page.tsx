'use client'
import Callout from "@/components/Callout/Callout";
import { searchMoviebyId } from "@/utils/fetch/movies";
import { useEffect, useState } from "react";
import styles from './page.module.css';
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import Chip from "@/components/Chip/Chip";
import { randomColor } from "@/utils/randomColor";
import { getCredits } from "@/utils/fetch/userMediaItem";
import { MediaType } from "@prisma/client";
import MediaScore from "@/components/MediaScore/MediaScore";
import Tabs from "@/components/Tabs/Tabs";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { Notification, ReviewWithUser } from "libs/types/src";
import UpsertReviewForm from "@/components/UpsertReviewForm/UpsertReviewForm";
import Notifications from "@/components/Notifications/Notifications";
import { getReviews } from "@/utils/fetch/reviews";

function MovieDetails({ params }: { params: { id: number } }) {
  const [movie, setMovie] = useState<any>();
  const [error, setError] = useState('');
  const [credits, setCredits] = useState<any>();
  const [reload, setReload] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [reviews, setReviews] = useState<ReviewWithUser[]>([]);
  const router = useRouter();

  function addNotification(notification: Notification) {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(1))
    }, 5000)
  };

  useEffect(() => {
    async function fetchReviews(mediaId: number) {
      try {
        const response = await getReviews(mediaId);
        setReviews(response)
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
        }
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchMovie();

    async function fetchCredits() {
      try {
        const response = await getCredits({ tmdbId: params.id, mediaType: MediaType.movie })
        const credits = await response.json()
        setCredits(await credits.cast)
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchCredits()
  }, [params.id, reload]);

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
                      <div key={credit.id} className={styles.creditCard}>
                        <Image
                          src={credit.profile_path}
                          alt={credit.name}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '5.7dvw', height: 'auto' }}
                        />
                        <div className={styles.castDetails}>
                          <h5>{credit.name}</h5>
                          <p>{credit.character}</p>
                        </div>
                      </div>
                    )))}
                </div>
                <div id="Reviews" className={styles.reviewsContainer}>
                  <div className={styles.reviewList}>
                    {reviews.length > 0 ? reviews.map((review: ReviewWithUser) => (
                      <ReviewCard key={review.id} {...review} />
                    )) : <p>No reviews found</p>}
                  </div>
                  {movie.localId && <UpsertReviewForm mediaId={movie.localId} addNotification={addNotification} setReload={() => setReload(!reload)} />}
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
