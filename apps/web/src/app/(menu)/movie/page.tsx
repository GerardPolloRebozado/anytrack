'use client'
import MovieCard from '@/components/MediaCard/MediaCard';
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import withProtectedRoute from '@/components/Hocs/withProtectedRoute';
import { MediaType, getMarkedMoviesType } from 'libs/types/src';
import { getMarkedMovies, removeMarkedMovie } from '@/utils/fetch/movies';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';
import AgrByCategoryTooltip from '@/components/RechartsTooltip/AgrByCategoryTooltip/AgrByCategoryTooltip';
import distinctColors from 'distinct-colors';

function MyMovies() {
  const [markedMovies, setMarkedMovies] = useState([])
  const [agrupatedByGenre, setAgrupatedByGenre] = useState<any>();
  const [reload, setReload] = useState(false)
  const pieColors = distinctColors({ count: markedMovies.length, chromaMin: 50, lightMin: 30, lightMax: 70, quality: 50 });

  useEffect(() => {
    async function fetchMovies(data: getMarkedMoviesType) {
      return (await getMarkedMovies(data)).json()
    }
    fetchMovies({}).then((response) => {
      setMarkedMovies(response)
    })
    fetchMovies({ groupBy: 'genre', watched: true }).then((response) => {
      setAgrupatedByGenre(response)
    })

  }, [reload]);

  async function deleteMarkedMedia(id: number) {
    try {
      await removeMarkedMovie(id)
      setReload(!reload)
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Movie stats</h1>
      <div className={styles.chartContainer}>
        {markedMovies && markedMovies.length > 1 && (
          <>
            <div className={styles.chart}>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={agrupatedByGenre}>
                  <PolarGrid color='white' />
                  <PolarAngleAxis dataKey={'name'} stroke='white' />
                  <Tooltip content={<AgrByCategoryTooltip />} />
                  <Radar name="Genres" dataKey="runtime" fill={pieColors[Math.floor(Math.random() * pieColors.length)]?.hex()} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </>)}
      </div>
      <h1>My Movies</h1>
      <h2>Watched Movies</h2>
      <div className={styles.cardContainer}>
        {markedMovies.length > 0 && markedMovies.map((markedMovie: any) => (
          markedMovie.watched && (
            <MovieCard key={markedMovie.movie.tmdbId} id={markedMovie.movie.tmdbId} title={markedMovie.movie.title} poster={markedMovie.movie.poster} year={markedMovie.movie.releaseDate} mediaType={MediaType.movie}>
              <PrimaryButton onClick={() => deleteMarkedMedia(markedMovie.id)}>Remove</PrimaryButton>
            </MovieCard>)
        ))}
      </div>
      <h2>Watchlist</h2>
      <div className={styles.cardContainer}>
        {markedMovies.length > 0 && markedMovies.map((markedMovie: any) => (
          !markedMovie.watched && (
            <MovieCard key={markedMovie.movie.tmdbId} id={markedMovie.movie.tmdbId} title={markedMovie.movie.title} poster={markedMovie.movie.poster} year={markedMovie.movie.releaseDate} mediaType={MediaType.movie}>
              <PrimaryButton onClick={() => deleteMarkedMedia(markedMovie.id)}>Remove</PrimaryButton>
            </MovieCard>)
        ))}
      </div>
    </div >
  )
}

export default withProtectedRoute(MyMovies);
