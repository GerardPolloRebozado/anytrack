'use client'
import MovieCard from '@/components/MediaCard/MediaCard';
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import withProtectedRoute from '@/components/Hocs/withProtectedRoute';
import { MediaType } from 'libs/types/src';
import { getMarkedMovies, removeMarkedMovie } from '@/utils/fetch/movies';

function MyMovies() {
  const [markedMovies, setMarkedMovies] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    async function fetchMovies() {
      const response = await getMarkedMovies({})
      setMarkedMovies(await response.json())
    }
    fetchMovies()
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
      <h1>My Movies</h1>
      <h2>Watched Movies</h2>
      <div className={styles.cardContainer}>
        {markedMovies.length > 0 && markedMovies.map((markedMovie: any) => (
          markedMovie.watched && (
            <MovieCard key={markedMovie.movie.tmdbId} id={markedMovie.movie.tmdbId} title={markedMovie.movie.title} poster={markedMovie.movie.poster} year={markedMovie.movie.year} mediaType={MediaType.movie}>
              <PrimaryButton onClick={() => deleteMarkedMedia(markedMovie.id)}>Remove</PrimaryButton>
            </MovieCard>)
        ))}
      </div>
      <h2>Watchlist</h2>
      <div className={styles.cardContainer}>
        {markedMovies.length > 0 && markedMovies.map((markedMovie: any) => (
          !markedMovie.watched && (
            <MovieCard key={markedMovie.movie.tmdbId} id={markedMovie.movie.tmdbId} title={markedMovie.movie.title} poster={markedMovie.movie.poster} year={markedMovie.movie.year} mediaType={MediaType.movie}>
              <PrimaryButton onClick={() => deleteMarkedMedia(markedMovie.id)}>Remove</PrimaryButton>
            </MovieCard>)
        ))}
      </div>
    </div >
  )
}

export default withProtectedRoute(MyMovies);
