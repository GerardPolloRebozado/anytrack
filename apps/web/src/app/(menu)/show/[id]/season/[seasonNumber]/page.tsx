'use client'

import withProtectedRoute from "@/components/Hocs/withProtectedRoute"
import { getSeasons } from "@/utils/fetch/tmdb"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import styles from '../../showInfo.module.css'
import { useRouter } from "next/navigation"
import Callout from "@/components/Callout/Callout"
import Image from "next/image"
import { getWatchedEpisodes } from "@/utils/fetch/userMediaItem"

function SeasonPage({ params }: { params: { id: string, seasonNumber: number } }) {
  const [season, setSeason] = useState<any>(null)
  const [watchedEpisodes, setWatchedEpisodes] = useState<any[]>([])
  const [error, setError] = useState('')
  const router = useRouter()
  const [title, setTitle] = useState('AnyTrack')


  useEffect(() => {
    async function fetchSeason() {
      const response = await getSeasons({
        tmdbId: params.id,
        season: params.seasonNumber
      })
      if (response.status === 200) {
        setSeason(response.body)
        setTitle(`AnyTrack ${response.body.name}`)
        fetchWatchedEpisodes()
      } else {
        setError(response.body.error)
      }
    }
    fetchSeason()

    async function fetchWatchedEpisodes() {
      const response = await getWatchedEpisodes(params.id, params.seasonNumber)
      if (response.status === 200) {
        setWatchedEpisodes(response.body)
      } else {
        setError(response.body.error)
      }
    }
  }, [params.id, params.seasonNumber])

  return (
    <div className={styles.container}>
      <title>{title}</title>
      <ArrowLeft className={styles.back} size={32} onClick={() => router.back()} />
      {error && (
        <div className={styles.errorModal} onClick={() => setError('')}>
          <p className={styles.closeModal}>X</p>
          <Callout type="error">{error}</Callout>
        </div>
      )}
      <div>
        {season && (
          <div className={styles.grid}>
            <div className={styles.poster}>
              <Image
                src={season.poster_path}
                alt={season.name}
                width={300}
                height={420} />
            </div>

            <div className={styles.showDetails}>
              <h1 className={styles.name}>{season.name} ({season.air_date.slice(0, 7)})</h1>
              <p className={styles.overview}>{season.overview}</p>
              <p>Episodes:</p>
              <div className={styles.episodeList}>
                {season.episodes.map((episode: any) => (
                  <div className={styles.episodeItem} key={episode.episode_number}>
                    <div className={styles.ImageTitle}>
                      <Image
                        className={styles.episodeImg}
                        src={episode.still_path}
                        width={300}
                        height={300}
                        alt={`Episode ${episode.episode_number} - ${episode.name} still path`}
                      />
                      <div>
                        <p>{episode.episode_number}-{episode.name}</p>
                        <p className="darker">{episode.runtime} min</p>
                      </div>
                    </div>
                    <div className={styles.overview}>{episode.overview}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default withProtectedRoute(SeasonPage)
