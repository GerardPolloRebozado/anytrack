'use client'
import MovieCard from '@/components/MediaCard/MediaCard';
import { useEffect, useState } from 'react'
import withProtectedRoute from '@/components/Hocs/withProtectedRoute';
import { MediaType, getMarkedMoviesType } from 'libs/types/src';
import { getMarkedMovies, removeMarkedMovie } from '@/utils/fetch/movies';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';
import AgrByCategoryTooltip from '@/components/RechartsTooltip/AgrByCategoryTooltip/AgrByCategoryTooltip';
import distinctColors from 'distinct-colors';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Spinner } from '@/components/ui/spinner';

function MyMovies() {
  const [markedMovies, setMarkedMovies] = useState<object[] | null>(null);
  const [agrupatedByGenre, setAgrupatedByGenre] = useState<any>();
  const [reload, setReload] = useState(false)
  const pieColors = distinctColors({ count: markedMovies?.length || 0, chromaMin: 50, lightMin: 30, lightMax: 70, quality: 50 });

  useEffect(() => {
    async function fetchMovies(data: getMarkedMoviesType) {
      try {
        return (await getMarkedMovies(data)).json()
      } catch (error: any) {
        toast({ title: 'Failed to fetch movies', description: error?.message, variant: "destructive" })
      }
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
      toast({ title: 'Failed to delete movie', description: error?.message, variant: "destructive" })
    }
  }

  if (markedMovies === null) return <Spinner />
  if (markedMovies.length === 0) return <div className='w-full flex justify-center'><h1 className='text-2xl'>You have not marked any movie</h1></div>

  return (
    <div>
      <div className='grid grid-rows-[1fr] grid-cols-[repeat(auto-fill,minmax(550px,1fr))]'>
        {markedMovies && markedMovies.length > 1 && (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Movie stats</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={agrupatedByGenre}>
                    <PolarGrid color='white' />
                    <PolarAngleAxis dataKey={'name'} stroke='white' />
                    <Tooltip content={<AgrByCategoryTooltip />} />
                    <Radar name="Genres" dataKey="runtime" fill={pieColors[Math.floor(Math.random() * pieColors.length)]?.hex()} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </>)}
      </div>
      <h2 className='text-xl my-4'>Watched Movies</h2>
      <div className='flex h-[35dvh] gap-4'>
        {markedMovies.length > 0 && markedMovies.map((markedMovie: any) => (
          markedMovie.watched && (
            <MovieCard key={markedMovie.movie.tmdbId} id={markedMovie.movie.tmdbId} title={markedMovie.movie.title} poster={markedMovie.movie.poster} year={markedMovie.movie.releaseDate} mediaType={MediaType.movie}>
              <Button onClick={() => deleteMarkedMedia(markedMovie.id)}>Remove</Button>
            </MovieCard>)
        ))}
      </div>
      <h2 className='text-xl my-4'>Watchlist</h2>
      <div className='flex h-[35dvh] gap-4'>
        {markedMovies.length > 0 && markedMovies.map((markedMovie: any) => (
          !markedMovie.watched && (
            <MovieCard key={markedMovie.movie.tmdbId} id={markedMovie.movie.tmdbId} title={markedMovie.movie.title} poster={markedMovie.movie.poster} year={markedMovie.movie.releaseDate} mediaType={MediaType.movie}>
              <Button onClick={() => deleteMarkedMedia(markedMovie.id)}>Remove</Button>
            </MovieCard>)
        ))}
      </div>
    </div >
  )
}

export default withProtectedRoute(MyMovies);
