'use client'
import SearchBar from "@/components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { getShow } from "@/utils/fetch/show";
import MediaCard from "@/components/MediaCard/MediaCard";
import Link from "next/link";
import { MediaType } from "libs/types/src";
import { Button } from "@/components/ui/button";
import { TvResultsResponse } from "moviedb-promise";

function SearchShows() {
  const [shows, setShows] = useState<TvResultsResponse>({});
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchData(query: string) {
      if (!query) {
        return;
      }
      const response = await getShow(query)
      const body = await response.json();
      setShows(await body.show as TvResultsResponse);
    }
    fetchData(query);
  }, [query]);


  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <SearchBar fetchData={(query: string) => setQuery(query)} />
      </div>
      <div className="p-8 grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-[1fr] gap-6 overflow-hidden">

        {shows && shows?.results && shows.results.length > 0 && shows.results.map((show: any) => (
          <MediaCard key={show.id} id={show.id} title={show.original_name} poster={show.poster_path} year={show.first_air_date.split('-')[0]} mediaType={MediaType.show}>
            <Link href={`/show/search/${show.id}`}>
              <Button>Mark</Button>
            </Link>
          </MediaCard>
        ))}
      </div>
    </>
  );
}

export default withProtectedRoute(SearchShows);
