'use client'
import SearchBar from "@/components/SearchBar/SearchBar";
import { useRef, useState } from "react";
import styles from './page.module.css';
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { getShow, markShow } from "@/utils/fetch/show";
import MediaCard from "@/components/MediaCard/MediaCard";
import Link from "next/link";
import { MediaType } from "libs/types/src";

function SearchShows() {
  const [shows, setShows] = useState([]);

  async function fetchData(query: string) {
    if (!query) {
      setShows([]);
      return;
    }
    const response = await getShow(query)
    const body = await response.body;
    if (await body.results) setShows(await body.results);
  }

  return (
    <>
      <div className={styles.barContainer}>
        <SearchBar fetchData={(query: string) => fetchData(query)} />
      </div>
      <div className={styles.cardContainer}>
        {shows.length > 0 && shows.map((show: any) => (
          <MediaCard key={show.id} id={show.id} title={show.original_name} poster={show.poster_path} year={show.first_air_date.split('-')[0]} mediaType={MediaType.show}>
            <Link href={`/show/search/${show.id}`}>
              <PrimaryButton>Mark</PrimaryButton>
            </Link>
          </MediaCard>
        ))}
      </div>
    </>
  );
}

export default withProtectedRoute(SearchShows);
