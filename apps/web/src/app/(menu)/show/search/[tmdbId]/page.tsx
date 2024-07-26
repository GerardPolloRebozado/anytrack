'use client'
import { joiResolver } from "@hookform/resolvers/joi";
import { markShowSchemaForm } from "libs/joi/src";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getSeasons } from "@/utils/fetch/tmdb";
import { getShow, markShow } from "@/utils/fetch/show";
import Image from "next/image";
import Callout from "@/components/Callout/Callout";
import { markShowType } from "libs/types/src";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function MarkShowForm({ params }: { params: { tmdbId: number } }) {
  const searchParams = useSearchParams();
  const [seasons, setSeasons] = useState<any[]>([]);
  const [show, setShow] = useState<any>(null)
  const [selectedSeason, setSelectedSeason] = useState(-1);
  const [result, setResult] = useState<boolean | null>(null);
  const [error, setError] = useState('')
  const season = Number(searchParams.get('season')) || -1
  const episode = Number(searchParams.get('episode')) || -1

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<markShowType>({
    resolver: joiResolver(markShowSchemaForm),
    defaultValues: {
      season,
      episode,
      watchedDate: new Date().toISOString().split('T')[0],
    }
  });

  const onSubmit = async (data: markShowType) => {
    let season = -1
    let episode = -1
    if (data.season !== -1) {
      season = data.season
      if (data.episode !== -1 && data.episode) {
        episode = data.episode
      }
    }
    const response = await markShow({
      tmdbId: params.tmdbId,
      watched: data.watched,
      watchedDate: data.watchedDate,
      season: season,
      episode: episode
    })
    console.log(await response)
    if (response.status === 200) {
      setResult(true)
    } else {
      setResult(false)
    }
  }

  useEffect(() => {
    async function fetchSeasons() {
      const response = await getSeasons({ tmdbId: params.tmdbId });
      if (response.status === 200) {
        setSeasons(response.body);
        setValue('season', season)
        setValue('episode', episode)
      } else {
        setError(await response.body.error)
      }
    }
    fetchSeasons();
    async function fetchShow() {
      const response = await getShow('tmdb:' + params.tmdbId);
      if (response.status === 200) {
        setShow(await response.body);
      }
    }
    fetchShow();
  }, [episode, params.tmdbId, season, setValue])



  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === 'season') {
        const seasonNumber = Number(value.season)
        setSelectedSeason(seasons.findIndex(season => season.season_number === seasonNumber));
      }
    });
    return () => subscription.unsubscribe();
  }, [seasons, watch]);

  return (
    <>
      {show && (
        <div className="flex flex-col items-center justify-center">
          <h1>Mark show {show?.name && show.name}</h1>
          <Image src={show?.poster_path} alt={show.name} width={300} height={420} className='rounded-lg my-2' />
          <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col'>
            <label htmlFor="watchedDate">Date watched:</label>
            <input type="date" id='watchedDate' {...register('watchedDate', { required: true })} />
            <label htmlFor="season">Season:</label>
            <select id='season' {...register('season', { required: true })}>
              <option value={-1}>All</option>
              {seasons.length > 0 && (
                seasons.map((season: any) => (
                  <option key={season.id} value={season.season_number}>{season.season_number}-{season.name}</option>
                ))
              )}
            </select>
            {selectedSeason !== -1 && (
              <>
                <label htmlFor="episode">Episode:</label>
                <select id='episode' {...register('episode', { required: true })}>
                  <option value={-1}>All</option>
                  {seasons[selectedSeason].episodes.length > 0 && (
                    seasons[selectedSeason].episodes.map((episode: any) => (
                      <option key={episode.id} value={episode.episode_number}>{episode.episode_number}-{episode.name}</option>
                    )))}
                </select>
              </>)}
            <label htmlFor="watched">Watched or watchlist:</label>
            <select id="watched" {...register('watched', { required: true })}>
              <option value="true">Watched</option>
              <option value="false">Watchlist</option>
            </select>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      )}
    </>
  )
}
