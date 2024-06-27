'use client'
import MovieCard from '@/components/MediaCard/MediaCard';
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import withProtectedRoute from '@/components/Hocs/withProtectedRoute';
import { deleteUserMediaItem, getManyUserMediaItem } from '@/utils/fetch/userMediaItem';
import { MediaType } from 'libs/types/src';
import { removeMarkedMovie } from '@/utils/fetch/movies';

function MyMovies() {
  const [movies, setMovies] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    async function fetchMovies() {
      const response = await getManyUserMediaItem({
        mediaType: MediaType.movie,
      })
      setMovies(await response.body)
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
        {movies.length > 0 && movies.map((movie: any) => (
          movie.watched && (
            <MovieCard key={movie.mediaItem.tmdbId} id={movie.mediaItem.tmdbId} title={movie.mediaItem.title} poster={movie.mediaItem.poster} year={movie.mediaItem.year} mediaType={MediaType.movie}>
              <PrimaryButton onClick={() => deleteMarkedMedia(movie.id)}>Remove</PrimaryButton>
            </MovieCard>)
        ))}
      </div>
      <h2>Watchlist</h2>
      <div className={styles.cardContainer}>
        {movies.length > 0 && movies.map((movie: any) => (
          !movie.watched && (
            <MovieCard key={movie.mediaItem.tmdbId} id={movie.mediaItem.tmdbId} title={movie.mediaItem.title} poster={movie.mediaItem.poster} year={movie.mediaItem.year} mediaType={MediaType.movie}>
              <PrimaryButton onClick={() => deleteMarkedMedia(movie.id)}>Remove</PrimaryButton>
            </MovieCard>)
        ))}
      </div>
    </div >
  )
}

export default withProtectedRoute(MyMovies);
