'use client';
import { useEffect, useState } from "react";
import styles from './page.module.css';
import MovieRuntimeTooltip from "@/components/RechartsTooltip/MovieRuntimeTooltip/MovieRuntimeTooltip";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MediaType, Notification } from "libs/types/src";
import { Clapperboard, Tv } from "lucide-react";
import { getMarkedMovies } from "@/utils/fetch/movies";
import { getManyFutureEpisode, getManyMarkedShows } from "@/utils/fetch/show";
import MediaCard from "@/components/MediaCard/MediaCard";
import Notifications from "@/components/Notifications/Notifications";

function DashboardPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [nextEpisodes, setNextEpisodes] = useState<any>({});
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
        const movieBody = await movies.json()
        setMovieHistory(await movieBody.groupedMedia)
        setMovieStats(await movieBody.statsOverview)
        const shows = await getManyMarkedShows({
          watched: true,
          groupBy: 'month'
        })
        const showBody = await shows.json()
        setShowHistory(await showBody.groupedMedia)
        setShowStats(await showBody.statsOverview)
      } catch (error) {
        addNotification({ type: 'error', message: 'Failed to fetch watchtime' })
      }
    }
    fetchWatchtime()
    async function fetchNextEpisodes() {
      try {
        const response = await getManyFutureEpisode()
        const nextEpisodesResponse = await response.json()
        setNextEpisodes(nextEpisodesResponse)
      } catch (error) {
        addNotification({ type: 'error', message: 'Failed to fetch upcoming releases' })
      }
    }
    fetchNextEpisodes()
  }, [])

  return (
    <>
      <Notifications notifications={notifications} setNotifications={setNotifications} />
      <h1>Dashboard</h1>
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
          <h1>Upcoming releases</h1>
          <div className={styles.upcomingReleases}>
            {nextEpisodes.length > 0 && (
              nextEpisodes.map((episode: any) => (
                <MediaCard
                  id={episode.id}
                  key={episode.id}
                  title={episode.title}
                  poster={episode.season.poster}
                  year={episode.releaseDate}
                  mediaType={MediaType.show} />
              )))}
          </div>
        </div>
      </div >
    </>
  );
}

export default withProtectedRoute(DashboardPage);
