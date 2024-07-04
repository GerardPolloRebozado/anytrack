'use client'
import Callout from "@/components/Callout/Callout";
import { useEffect, useState } from "react";
import styles from './showInfo.module.css';
import Image from "next/image";
import { ArrowLeft, CircleCheck, CircleX, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { deleteOneUserShow, getManyShowReviews, getOneMarkedShow, getShow, postShowReview } from "@/utils/fetch/show";
import { getCredits, getSeasons } from "@/utils/fetch/tmdb";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import Chip from "@/components/Chip/Chip";
import { randomColor } from "@/utils/randomColor";
import Tabs from "@/components/Tabs/Tabs";
import MediaScore from "@/components/MediaScore/MediaScore";
import Notifications from "@/components/Notifications/Notifications";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { MediaReviewForm, MediaType, Notification } from "libs/types/src";
import { joiResolver } from "@hookform/resolvers/joi";
import { updateReviewSchema } from "libs/joi/src";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input/Input";
import Card from "@/components/Card/Card";

function ShowDetails({ params }: { params: { id: number } }) {
  const [show, setShow] = useState<any>();
  const [credits, setCredits] = useState<any>();
  const [reload, setReload] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [watchedEpisodes, setWatchedEpisodes] = useState<any[]>([]);
  const [error, setError] = useState('')
  const router = useRouter();
  const [notifications, setNotifications] = useState<Notification[]>([])
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<MediaReviewForm>({
    resolver: joiResolver(updateReviewSchema),
    defaultValues: {
      mediaId: show?.localId,
    }
  });
  const submitReview: SubmitHandler<MediaReviewForm> = async (data: MediaReviewForm) => {
    try {
      const response = await postShowReview(data)
      if (response.status === 200) {
        addNotification({ type: 'success', message: 'Review added successfully' })
        setReload(!reload)
        reset()
        setValue('mediaId', show.localId)
      } else {
        addNotification({ type: 'error', message: 'Error adding review' })
      }
    } catch (error: any) {
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
    async function fetchWatchedEpisodes(mediaId: number) {
      const response = await getOneMarkedShow(mediaId, true);
      if (response.status === 200) {
        setWatchedEpisodes(await response.json())
      } else {
        addNotification({ type: 'error', message: 'Error fetching watched episodes' })
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
        if (await show?.localId) {
          setValue('mediaId', await show.localId)
          const response = await getManyShowReviews(await show.localId)
          setReviews(await response.json())
          fetchWatchedEpisodes(await show.localId)
        }
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchShow();

    async function fetchCredits() {
      try {
        const response = await getCredits({ tmdbId: params.id, mediaType: MediaType.show });
        setCredits(await response.json())
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchCredits();
  }, [params.id, reload, setValue]);
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
    await deleteOneUserShow(show.localId, {season}).then(() => setReload(!reload))
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
              <MediaScore score={show?.vote_average} source="tmdb" />
              <p className={styles.overview}>{show.overview}</p>
              <Tabs>
                <div className={styles.listContainer} id="Seasons">
                  {show.seasons.map((season: any) => (
                    <Card padding={false} className={`${styles.season}`} onClick={() => openSeason(event, show.id, season.season_number)} key={season.id}>
                      <Image
                        src={season.poster_path}
                        alt={season.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '6dvw', height: 'auto' }} />
                      <p className={styles.seasonTitle}>Season {season.season_number} {setIcon(season) === 0 ? <CircleCheck className='ok' /> : setIcon(season) === 1 ? <Eye className="warning" /> : <CircleX className="error" />}</p>
                      {setIcon(season) === 0 && <PrimaryButton onClick={() => deleteSeason({ tmdbId: show.id, season: season.season_number })}>Delete</PrimaryButton> || <PrimaryButton onClick={() => markSeason({ tmdbId: show.id, season: season.season_number })}>Mark</PrimaryButton>}
                    </Card>
                  ))}
                </div>
                <div className={`${styles.listContainer} ${styles.castList}`} id="Credits">
                  {credits && credits?.cast && (
                    credits.cast.map((credit: any) => (
                      <Card key={credit.id} className={styles.creditCard} padding={false}>
                        <Image
                          src={credit.profile_path}
                          alt={credit.name}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '6dvw', height: 'auto' }} />
                        <div className={styles.castDetails}>
                          <h5>{credit.name}</h5>
                          <p>{credit.roles.map((role: any) => {
                            return role.character
                          })}</p>
                          <p>Episodes: {credit.total_episode_count}</p>
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
                  {show.localId && (
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
                      {errors.review && <Callout type="error">{errors.review.message}</Callout>}
                      {errors.rating && <Callout type="error">{errors.rating.message}</Callout>}
                    </form>)}
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
