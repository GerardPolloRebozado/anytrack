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
import { MediaType } from "@prisma/client";
import Tabs from "@/components/Tabs/Tabs";

function ShowDetails({ params }: { params: { id: string } }) {
  const [show, setShow] = useState<any>();
  const [tab, setTab] = useState('seasons');
  const [credits, setCredits] = useState<any>();
  const [watchedEpisodes, setWatchedEpisodes] = useState<any[]>([]);
  const [error, setError] = useState('')
  const router = useRouter();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchShow() {
      const response = await getShow(`tmdb:${params.id}`);
      if (response.status === 200) {
        response.body.year = response.body.first_air_date.split('-')[0];
        const seasons = await getSeasons({ tmdbId: params.id });
        const show = await response.body
        show.seasons = seasons.body;
        setShow(show);
      } else {
        setError(response.body.error);
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
    <div className={styles.container}>
      <ArrowLeft className={styles.back} size={32} onClick={() => router.back()} />
      <div>
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
                width={300}
                height={420} />
            </div>
            <div className={styles.showDetails}>
              <h1 className={styles.title}>{show.title} {show.name} ({show.year})</h1>
              <p className={styles.genres}>{show.genres.map((genre: any) => <Chip key={genre.id} bgColor={randomColor()}>{genre.name}</Chip>)}</p>
              <p className={styles.runtime}> {show.number_of_seasons} Seasons</p>
              <p className={styles.overview}>{show.overview}</p>
              <div className={styles.tabs}>
                <div className={tab === 'seasons' ? styles.activeTab : ''} onClick={() => setTab('seasons')}>Seasons</div>
                <div className={tab === 'cast' ? styles.activeTab : ''} onClick={() => setTab('cast')}>Cast</div>
              </div>
              <Tabs>
                <div className={styles.listContainer} id="Seasons">
                  {show.seasons.map((season: any) => (
                    <div className={`${styles.season}`} onClick={() => openSeason(event, show.id, season.season_number)} key={season.id}>
                      <Image
                        src={season.poster_path}
                        alt={season.name}
                        width={150}
                        height={225} />
                      <p className={styles.seasonTitle}>Season {season.season_number} {setIcon(season) === 0 ? <CircleCheck className='ok' /> : setIcon(season) === 1 ? <Eye className="warning" /> : <CircleX className="error" />}</p>
                      {setIcon(season) === 0 && <PrimaryButton onClick={() => deleteSeason({ tmdbId: show.id, season: season.season_number })}>Delete</PrimaryButton> || <PrimaryButton onClick={() => markSeason({ tmdbId: show.id, season: season.season_number })}>Mark</PrimaryButton>}
                    </div>
                  ))}
                </div>
                <div className={`${styles.listContainer} ${styles.seasonList} ${styles.castList}`} id="Credits">
                  {credits.cast.map((credit: any) => (
                    <div key={credit.id} className={styles.creditCard}>
                      <Image
                        src={credit.profile_path}
                        alt={credit.name}
                        objectFit="contain"
                        width={143}
                        height={192} />
                      <div className={styles.castDetails}>
                        <h5>{credit.name}</h5>
                        <p>{credit.roles.map((role: any) => {
                          return role.character
                        })}</p>
                        <p>Episodes: {credit.total_episode_count}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tabs>
            </div>
          </div >
        )}
      </div>
    </div>
  );
}

export default withProtectedRoute(ShowDetails);
