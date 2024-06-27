'use client';
import { useEffect, useState } from "react";
import styles from './page.module.css';
import MovieRuntimeTooltip from "@/components/RechartsTooltip/MovieRuntimeTooltip/MovieRuntimeTooltip";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { getManyUserMediaItem } from "@/utils/fetch/userMediaItem";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MediaType } from "libs/types/src";
import { Clapperboard, Tv } from "lucide-react";

function DashboardPage() {
  const [MovieHistory, setMovieHistory] = useState<any>({});
  const [ShowHistory, setShowHistory] = useState<any>([]);
  const [MovieStats, setMovieStats] = useState<any>({});
  const [ShowStats, setShowStats] = useState<any>({});

  useEffect(() => {
    async function fetchWatchtime() {
      const movies = await getManyUserMediaItem({
        mediaType: MediaType.movie,
        watched: true,
        groupBy: 'month'
      })
      setMovieHistory(await movies.body.media)
      console.log(await movies.body.media.length)
      setMovieStats(await movies.body.statsOverview)
      const shows = await getManyUserMediaItem({
        mediaType: MediaType.show,
        watched: true,
        groupBy: 'month'
      })
      setShowHistory(await shows.body.media)
      setShowStats(await shows.body.statsOverview)
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
                <Tv color={'var(--showColor)'} /> <p><strong>{ShowStats.mediaCount} shows</strong></p> <span style={{ color: 'var(--showColor)' }}>|</span> <p><strong>{ShowStats.totalRuntime}</strong> minutes</p>
              </div>
            )}
          </div>
        </div>
      </div >
    </>
  );
}

export default withProtectedRoute(DashboardPage);
