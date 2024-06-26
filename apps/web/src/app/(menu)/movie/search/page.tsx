'use client'
import SearchBar from "@/components/SearchBar/SearchBar";
import { useRef, useState } from "react";
import styles from './page.module.css';
import MovieCard from "@/components/MediaCard/MediaCard";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { searchMovies } from "@/utils/fetch/movies";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import Link from "next/link";
import { MediaType } from "libs/types/src";

function SearchMovie() {
  const [movies, setMovies] = useState([]);
  const watchedDateRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  async function fetchData(query: string) {
    if (!query) {
      setMovies([]);
      return;
    }
    const response = await searchMovies(query)
    const body = await response.json();
    if (await body.results) setMovies(await body.results);
  }

  return (
    <>
      <div className={styles.barContainer}>
        <SearchBar fetchData={(query: string) => fetchData(query)} />
      </div>
      <div className={styles.cardContainer}>
        {movies.length > 0 && movies.map((movie: any) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} year={movie.release_date.split('-')[0]} mediaType={MediaType.movie}>
            <Link href={`/movie/search/${movie.id}`}>
              <PrimaryButton>Mark</PrimaryButton>
            </Link>
          </MovieCard>
        ))}
      </div>
    </>
  );
}

export default withProtectedRoute(SearchMovie);
