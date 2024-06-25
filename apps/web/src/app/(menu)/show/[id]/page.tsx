'use client'
import Callout from "@/components/Callout/Callout";
import { useEffect, useState } from "react";
import styles from './showInfo.module.css';
import Image from "next/image";
import { ArrowLeft, CircleCheck, CircleX, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { getShow } from "@/utils/fetch/show";
import { getSeasons } from "@/utils/fetch/tmdb";
import { deleteUserMediaItem, getCredits, getWatchedEpisodes } from "@/utils/fetch/userMediaItem";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import Chip from "@/components/Chip/Chip";
import { randomColor } from "@/utils/randomColor";
import { MediaType, Review } from "@prisma/client";
import Tabs from "@/components/Tabs/Tabs";
import MediaScore from "@/components/MediaScore/MediaScore";
import { getReviews, upsertReview } from "@/utils/fetch/reviews";
import { Notification, ReviewForm, ReviewWithUser } from "libs/types/src";
import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { upsertReviewSchema } from "libs/joi/src";
import Input from "@/components/Input/Input";
import Notifications from "@/components/Notifications/Notifications";
import ReviewCard from "@/components/ReviewCard/ReviewCard";

function ShowDetails({ params }: { params: { id: string } }) {
  const [show, setShow] = useState<any>();
  const [tab, setTab] = useState('seasons');
  const [credits, setCredits] = useState<any>();
  const [reviews, setReviews] = useState<ReviewWithUser[]>([]);
  const [watchedEpisodes, setWatchedEpisodes] = useState<any[]>([]);
  const [error, setError] = useState('')
  const router = useRouter();
  const [reload, setReload] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ReviewForm>({
    resolver: joiResolver(upsertReviewSchema),
  });
  const [notifications, setNotifications] = useState<Notification[]>([])

  function addNotification(notification: Notification) {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
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
    async function fetchShow() {
      try {
        const response = await getShow(`tmdb:${params.id}`);
        response.body.year = response.body.first_air_date.split('-')[0];
        const seasons = await getSeasons({ tmdbId: params.id });
        const show = await response.body
        show.seasons = seasons.body;
        setShow(show);
        setValue('mediaId', await show.localId)
        if (await show.localId) {
          await fetchReviews(await show.localId)
        }
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchShow();
    async function fetchWatchedEpisodes() {
      const response = await getWatchedEpisodes(params.id);
      if (response.status === 200) {
        setWatchedEpisodes(await response.body)
      } else {
        setError(response.body.error);
      }
    }
    fetchWatchedEpisodes();
    async function fetchCredits() {
      const response = await getCredits({ tmdbId: params.id, mediaType: MediaType.show });
      if (response.status === 200) {
        setCredits(response.body)
      } else {
        setError(response.body.error)
      }
    }
    fetchCredits();
  }, [params.id, reload]);

  const onSubmit: SubmitHandler<ReviewForm> = async (data: ReviewForm) => {
    const response = await upsertReview(data)
    if (response.status === 200) {
      setReload(!reload)
    }
  }
  const closeModal = () => {
    setError('')
  }
  function setIcon(season: any) {
    if (season.episodes.length === watchedEpisodes[season.season_number]?.count) {
      return 0
    }

    if (watchedEpisodes[season.season_number]?.episodes?.length > 0) {
      return 1
    }
    return 2
  }

  function openSeason(e: any, tmdbId: string, seasonNumber: number) {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    router.push(`/show/${tmdbId}/season/${seasonNumber}`)
  }

  async function deleteSeason({ tmdbId, season }: { tmdbId: number, season: number }) {
    await deleteUserMediaItem({ tmdbId, season }).then(() => setReload(!reload))
  }

  async function markSeason({ tmdbId, season }: { tmdbId: string, season: number }) {
    router.push(`/show/search/${tmdbId}?season=${season}`)
  }


  return (
    <>
      <ArrowLeft className={styles.back} size={32} onClick={() => router.back()} />
      <Notifications notifications={notifications} setNotifications={setNotifications} />
      <>
        {error && (
          <div className={styles.errorModal} onClick={closeModal}>
            <p className={styles.closeModal}>X</p>
            <Callout type="error">{error}</Callout>
          </div>
        )}
        {show && (
          <div className={styles.grid}>
            <div className={styles.poster}>
              <Image
                src={show.poster_path}
                alt={show.name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '15dvw', height: 'auto' }} />
            </div>
            <div className={styles.showDetails}>
              <h1 className={styles.title}>{show.title} {show.name} ({show.year})</h1>
              <div className={styles.genres}>{show.genres.map((genre: any) => <Chip key={genre.id} bgColor={randomColor()}>{genre.name}</Chip>)}</div>
              <p className={styles.runtime}> {show.number_of_seasons} Seasons</p>
              <MediaScore score={show?.vote_average} source="tmdb"/>
              <p className={styles.overview}>{show.overview}</p>
              <Tabs>
                <div className={styles.listContainer} id="Seasons">
                  {show.seasons.map((season: any) => (
                    <div className={`${styles.season}`} onClick={() => openSeason(event, show.id, season.season_number)} key={season.id}>
                      <Image
                        src={season.poster_path}
                        alt={season.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '5.7dvw', height: 'auto' }} />
                      <p className={styles.seasonTitle}>Season {season.season_number} {setIcon(season) === 0 ? <CircleCheck className='ok' /> : setIcon(season) === 1 ? <Eye className="warning" /> : <CircleX className="error" />}</p>
                      {setIcon(season) === 0 && <PrimaryButton onClick={() => deleteSeason({ tmdbId: show.id, season: season.season_number })}>Delete</PrimaryButton> || <PrimaryButton onClick={() => markSeason({ tmdbId: show.id, season: season.season_number })}>Mark</PrimaryButton>}
                    </div>
                  ))}
                </div>
                <div className={`${styles.listContainer} ${styles.seasonList} ${styles.castList}`} id="Credits">
                  {credits && credits?.cast && (
                    credits.cast.map((credit: any) => (
                      <div key={credit.id} className={styles.creditCard}>
                        <Image
                          src={credit.profile_path}
                          alt={credit.name}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '5.7dvw', height: 'auto' }} />
                        <div className={styles.castDetails}>
                          <h5>{credit.name}</h5>
                          <p>{credit.roles.map((role: any) => {
                            return role.character
                          })}</p>
                          <p>Episodes: {credit.total_episode_count}</p>
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                      label="Rating"
                      register={register}
                      name="rating"
                      type="number"
                      required={true}
                      placeholder="Rating"
                      error={errors.rating}
                    />
                    <Input
                      label="Review"
                      register={register}
                      name="review"
                      type="text"
                      required={false}
                      placeholder="Type your review"
                      error={errors.review}
                    />
                    <PrimaryButton type="submit">Submit</PrimaryButton>
                  </form>
                </div>
              </Tabs>
            </div>
          </div >
        )}
      </>
    </>
  );
}

export default withProtectedRoute(ShowDetails);
