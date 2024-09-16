'use client'
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState } from "react";
import MediaCard from "@/components/MediaCard/MediaCard";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { searchMovies } from "@/utils/fetch/movies";
import Link from "next/link";
import { MediaType } from "libs/types/src";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { MovieResultsResponse } from "moviedb-promise";

function SearchMovie() {
  const [movies, setMovies] = useState<MovieResultsResponse>();
  async function fetchData(query: string) {
    try {
      if (!query) {
        return;
      }
      const response = await searchMovies(query)
      const body = await response.json();
      if (await body.results) {
        setMovies(await body);
      }

    } catch (error: any) {
      toast({ title: 'Failed to fetch movies', description: error?.message, variant: "destructive" })
    }
  }

  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <SearchBar fetchData={(query: string) => fetchData(query)} />
      </div>
      <div className="p-8 grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-[1fr] gap-6 overflow-hidden">
        {movies?.results && movies.results.length > 0 && movies.results.map((movie) => {
          if (!movie.title || !movie.id) return null;
          return (
            <MediaCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path || ''} year={movie.release_date && movie.release_date.split('-')[0]} mediaType={MediaType.movie}>
              <Link href={`/movie/search/${movie.id}`}>
                <Button>Mark</Button>
              </Link>
            </MediaCard>
          );
        })}
      </div>
    </>
  );
}

export default withProtectedRoute(SearchMovie);
