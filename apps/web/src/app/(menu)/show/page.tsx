'use client'
import MediaCard from '@/components/MediaCard/MediaCard';
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import withProtectedRoute from '@/components/Hocs/withProtectedRoute';
import { getManyUserMediaItem } from '@/utils/fetch/userMediaItem';
import { MediaType } from 'libs/types/src';
import { Cell, Legend, Pie, PieChart, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';

import distinctColors from 'distinct-colors';
import AgrByCategoryTooltip from '@/components/RechartsTooltip/AgrByCategoryTooltip/AgrByCategoryTooltip';

function MyShows() {
  const [watchedShows, setWatchedShows] = useState([])
  const [watchlistShows, setWatchlistShows] = useState([])
  const [reload, setReload] = useState(false);
  const [agrupatedByGenres, setAgrupatedByGenres] = useState<any>();
  const pieColors = distinctColors({ count: watchedShows.length, chromaMin: 50, lightMin: 30, lightMax: 70, quality: 50 });

  useEffect(() => {
    async function fetchWatchedShows() {
      const response = await getManyUserMediaItem({
        mediaType: MediaType.show,
        groupBy: 'mediaItem',
      })
      setWatchedShows(await response.body)
      const tempAgrupation: { id: number, name: string, runtime: number, mediaItems: any[] }[] = [];
      await response.body.forEach((show: any) => {
        show.mediaItem.genres.forEach((genre: any) => {
          const category = tempAgrupation.find((category) => category.id === genre.id);
          if (category) {
            category.runtime += show.watchTime
            category.mediaItems.push(show.mediaItem);
          } else {
            tempAgrupation.push({ id: genre.id, name: genre.name, runtime: show.watchTime, mediaItems: [show.mediaItem] });
          }
        });
      });
      setAgrupatedByGenres(tempAgrupation)
    }
    fetchWatchedShows()

    async function fetchWatchlistShows() {
      const response = await getManyUserMediaItem({
        mediaType: MediaType.show,
        groupBy: 'mediaItem',
        watched: false
      })
      setWatchlistShows(await response.body)
    }
    fetchWatchlistShows()
  }, [reload]);

  return (
    <>
      <h3>Show stats</h3>
      <div className={styles.chartContainer}>
        {watchedShows && watchedShows.length > 0 && (
          <>
            <div className={styles.chart}>
              <h3>Watchtime agrupated by show</h3>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart >
                  <Pie data={watchedShows} dataKey="watchTime" nameKey="title" fill={'var(--showColor)'} label stroke="var(--primary)">
                    {watchedShows.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index].hex()} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className={`${styles.chart} radarChart`}>
              <h3>Watchtime agrupated by category</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={agrupatedByGenres}>
                  <PolarGrid color='white'/>
                  <PolarAngleAxis dataKey={'name'} stroke='white'/>
                  <Tooltip content={<AgrByCategoryTooltip />} />
                  <Radar name="Genres" dataKey="runtime" fill={pieColors[2].hex()} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
      <h1>My shows</h1>
      <h2>Watched Shows</h2>
      <div className={styles.cardContainer}>
        {watchedShows.length > 0 && watchedShows.map((show: any) => (
          <MediaCard key={show.mediaItem.tmdbId} id={show.mediaItem.tmdbId} title={show.mediaItem.title} poster={show.mediaItem.poster} year={show.mediaItem.year} mediaType={MediaType.show} />
        ))}
      </div>
      <h2>Watchlist</h2>
      <div className={styles.cardContainer}>
        {watchlistShows.length > 0 && watchlistShows.map((show: any) => (
          <MediaCard key={show.mediaItem.tmdbId} id={show.mediaItem.tmdbId} title={show.mediaItem.title} poster={show.mediaItem.poster} year={show.mediaItem.year} mediaType={MediaType.show} />
        ))}
      </div>
    </ >
  )
}

export default withProtectedRoute(MyShows);
