'use client';
import { useEffect, useState } from "react";
import styles from './page.module.css';
import MovieRuntimeTooltip from "@/components/RechartsTooltip/MovieRuntimeTooltip/MovieRuntimeTooltip";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { getManyUserMediaItem } from "@/utils/fetch/userMediaItem";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MediaType } from "libs/types/src";
import { Clapperboard, Tv } from "lucide-react";
import { getMarkedMovies } from "@/utils/fetch/movies";
import { getManyMarkedShows } from "@/utils/fetch/show";

function DashboardPage() {
  const [MovieHistory, setMovieHistory] = useState<any>({});
  const [ShowHistory, setShowHistory] = useState<any>([]);
  const [MovieStats, setMovieStats] = useState<any>({});
  const [ShowStats, setShowStats] = useState<any>({});

  useEffect(() => {
    async function fetchWatchtime() {
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
    }
    fetchWatchtime()
  }, [])

  return (
    <>
      <h1>Dashboard</h1>
      <div className={styles.container}>
        <div className={styles.chartContainer}>
          {MovieHistory && MovieHistory.length > 1 && (
            <div className={styles.chart}>
              <h3>Movie monthly watchtime</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart width={400} height={400} data={MovieHistory}>
                  <Bar type="monotone" dataKey="totalRuntime" fill={'var(--movieColor)'} />
                  <XAxis dataKey="month" stroke={'var(--secondary)'} />
                  <Tooltip content={<MovieRuntimeTooltip />} cursor={{ fill: 'transparent' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>)}
          {ShowHistory && ShowHistory.length > 1 && (
            <div className={styles.chart}>
              <h3>Show monthly watchtime</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart width={400} height={400} data={ShowHistory}>
                  <Bar type="monotone" dataKey="totalRuntime" fill={'var(--showColor)'} />
                  <XAxis dataKey="month" stroke={'var(--secondary)'} />
                  <Tooltip content={<MovieRuntimeTooltip />} cursor={{ fill: 'transparent' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>)}
        </div>
        <div>
          <h1>Overview</h1>
          <div className={styles.overview}>
            {MovieStats && (
              <div>
                <Clapperboard color={'var(--movieColor)'} /><p><strong>{MovieStats.mediaCount} movies</strong></p> <span style={{ color: 'var(--movieColor)' }}>|</span> <p><strong>{MovieStats.totalRuntime}</strong> minutes</p>
              </div>)}
            {ShowStats && (
              <div>
                <Tv color={'var(--showColor)'} /> <p><strong>{ShowStats.episodeCount} episodes</strong></p> <span style={{ color: 'var(--showColor)' }}>|</span> <p><strong>{ShowStats.totalRuntime}</strong> minutes</p>
              </div>
            )}
          </div>
        </div>
      </div >
    </>
  );
}

export default withProtectedRoute(DashboardPage);
