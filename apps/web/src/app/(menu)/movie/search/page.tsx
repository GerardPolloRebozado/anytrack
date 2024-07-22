'use client'
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState } from "react";
import MovieCard from "@/components/MediaCard/MediaCard";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { searchMovies } from "@/utils/fetch/movies";
import Link from "next/link";
import { MediaType } from "libs/types/src";
import { Button } from "@/components/ui/button";

function SearchMovie() {
  const [movies, setMovies] = useState([]);
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
      <div className="flex items-center justify-center mt-4">
        <SearchBar fetchData={(query: string) => fetchData(query)} />
      </div>
      <div className="p-8 grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-[1fr] gap-6 overflow-hidden">
        {movies.length > 0 && movies.map((movie: any) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} year={movie.release_date.split('-')[0]} mediaType={MediaType.movie}>
            <Link href={`/movie/search/${movie.id}`}>
              <Button>Mark</Button>
            </Link>
          </MovieCard>
        ))}
      </div>
    </>
  );
}

export default withProtectedRoute(SearchMovie);
