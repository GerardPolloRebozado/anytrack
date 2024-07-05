'use client';
import { useEffect, useState } from "react";
import styles from './page.module.css';
import MovieRuntimeTooltip from "@/components/RechartsTooltip/MovieRuntimeTooltip/MovieRuntimeTooltip";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MediaType, Notification, groupedFutureMedia } from "libs/types/src";
import { Clapperboard, Tv } from "lucide-react";
import { getMarkedMovies } from "@/utils/fetch/movies";
import { getManyMarkedShows } from "@/utils/fetch/show";
import Notifications from "@/components/Notifications/Notifications";
import { getManyFutureMedia } from "@/utils/fetch/media";
import MediaInfoCard from "@/components/FutureReleaseCard/MediaInfoCard";

function DashboardPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [nextMedia, setNextMedia] = useState<groupedFutureMedia[]>([]);
  const [MovieHistory, setMovieHistory] = useState<any>({});
  const [ShowHistory, setShowHistory] = useState<any>([]);
  const [MovieStats, setMovieStats] = useState<any>({});
  const [ShowStats, setShowStats] = useState<any>({});

  function addNotification(notification: Notification) {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(1))
    }, 5000)
  };

  useEffect(() => {
    async function fetchWatchtime() {
      try {
        const movies = await getMarkedMovies({
          watched: true,
          groupBy: 'month'
        })
        if (!movies.ok) throw new Error(await movies.json())
        const movieBody = await movies.json()
        setMovieHistory(await movieBody.groupedMedia)
        setMovieStats(await movieBody.statsOverview)

        const shows = await getManyMarkedShows({
          watched: true,
          groupBy: 'month'
        })
        if (!shows.ok) throw new Error(await shows.json())
        const showBody = await shows.json()
        setShowHistory(await showBody.groupedMedia)
        setShowStats(await showBody.statsOverview)
      } catch (error) {
        addNotification({ type: 'error', message: 'Failed to fetch watchtime' })
      }
    }
    fetchWatchtime()
    async function fetchFutureEpisodes() {
      try {
        const response = await getManyFutureMedia()
        if (!response.ok) throw new Error(await response.json())
        const nextEpisodesResponse = await response.json()
        setNextMedia(nextEpisodesResponse)
      } catch (error) {
        addNotification({ type: 'error', message: 'Failed to fetch upcoming releases' })
      }
    }
    fetchFutureEpisodes()
  }, [])

  return (
    <>
      <Notifications notifications={notifications} setNotifications={setNotifications} />
      <h2>Dashboard</h2>
      <div className={styles.container}>
        <div className={styles.chartContainer}>
          {MovieHistory && MovieHistory.length > 1 && (
            <div className={styles.chart}>
              <h3>Movie monthly watchtime</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={MovieHistory}>
                  <Bar type="monotone" dataKey="totalRuntime" fill={'var(--movieColor)'} />
                  <XAxis dataKey="month" stroke={'var(--secondary)'} />
                  <Tooltip content={<MovieRuntimeTooltip />} cursor={{ fill: 'transparent' }} />
                  {MovieStats && <Legend content={<div className={styles.legend}><Clapperboard color={'var(--movieColor)'} /><p><strong>{MovieStats.mediaCount} movies</strong></p> <span style={{ color: 'var(--movieColor)' }}>|</span> <p><strong>{MovieStats.totalRuntime}</strong> minutes</p></div>} />}
                </BarChart>
              </ResponsiveContainer>
            </div>)}
          {ShowHistory && ShowHistory.length > 1 && (
            <div className={styles.chart}>
              <h3>Show monthly watchtime</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={ShowHistory}>
                  <Bar type="monotone" dataKey="totalRuntime" fill={'var(--showColor)'} />
                  <XAxis dataKey="month" stroke={'var(--secondary)'} />
                  <Tooltip content={<MovieRuntimeTooltip />} cursor={{ fill: 'transparent' }} />
                  <Legend content={<div className={styles.legend}><Tv color={'var(--showColor)'} /> <p><strong>{ShowStats.episodeCount} episodes</strong></p> <span style={{ color: 'var(--showColor)' }}>|</span> <p><strong>{ShowStats.totalRuntime}</strong> minutes</p></div>} />
                </BarChart>
              </ResponsiveContainer>
            </div>)}
        </div>
        <div>
          <h2>Upcoming releases</h2>
          <div className={styles.upcomingReleases}>
            {nextMedia.length > 0 && (
              nextMedia.map((media: groupedFutureMedia) => (
                <MediaInfoCard
                  id={media.tmdbId}
                  title={media.title}
                  key={media.title}
                  poster={media.poster}
                  year={media.releaseDate}
                  mediaType={media.mediaType} />
              )))}
          </div>
        </div>
      </div >
    </>
  );
}

export default withProtectedRoute(DashboardPage);
