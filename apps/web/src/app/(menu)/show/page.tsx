'use client'
import MediaCard from '@/components/MediaCard/MediaCard';
import { useEffect, useState } from 'react'
import withProtectedRoute from '@/components/Hocs/withProtectedRoute';
import { MediaType } from 'libs/types/src';
import { Cell, Legend, Pie, PieChart, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';
import distinctColors from 'distinct-colors';
import AgrByCategoryTooltip from '@/components/RechartsTooltip/AgrByCategoryTooltip/AgrByCategoryTooltip';
import { getManyMarkedShows } from '@/utils/fetch/show';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { toast } from '@/components/ui/use-toast';

function MyShows() {
  const [watchedShows, setWatchedShows] = useState<object[] | null>(null)
  const [watchlistShows, setWatchlistShows] = useState<object[] | null>(null)
  const [agrupatedByGenre, setAgrupatedByGenre] = useState<any>();
  const pieColors = distinctColors({ count: watchedShows?.length || 0, chromaMin: 50, lightMin: 30, lightMax: 70, quality: 50 });

  useEffect(() => {
    async function fetchWatchedShows() {
      try {
        const response = await getManyMarkedShows({
          groupBy: 'show',
          watched: true
        })
        const body = await response.json()
        setWatchedShows(await body)
        const tempAgrupation: { id: number, name: string, runtime: number, mediaItems: any[] }[] = [];
        await body.forEach((userShow: any) => {
          userShow.show.genre.forEach((genre: any) => {
            const category = tempAgrupation.find((category) => category.id === genre.id);
            if (category) {
              category.runtime += userShow.watchTime
              category.mediaItems.push(userShow.show);
            } else {
              tempAgrupation.push({ id: genre.id, name: genre.name, runtime: userShow.watchTime, mediaItems: [userShow.mediaItem] });
            }
          });
        });
        setAgrupatedByGenre(tempAgrupation)
      } catch (error: any) {
        toast({ title: 'Failed to fetch watched shows', description: error?.message, variant: "destructive" })
      }
    }
    fetchWatchedShows()

    async function fetchWatchlistShows() {
      try {
        const response = await getManyMarkedShows({
          groupBy: 'show',
          watched: false
        })
        setWatchlistShows(await response.json())
      } catch (error: any) {
        toast({ title: 'Failed to fetch watchlisted shows', description: error?.message, variant: "destructive" })
      }
    }
    fetchWatchlistShows()
  }, []);

  if (watchedShows === null && watchlistShows === null) return <Spinner />
  if (watchedShows && watchedShows.length === 0 && watchlistShows?.length === 0) return <div className='w-full flex justify-center'><h1 className='text-2xl'>You have not marked any show</h1></div>

  return (
    <>
      <h1 className='text-4xl font-semibold'>My shows</h1>
      {watchedShows && watchedShows.length > 1 && (
        <>
          <h1 className='text-2xl mt-4'>Stats</h1>
          <div className='flex gap-4 my-4'>
            <Card>
              <CardHeader>
                <CardTitle>Watchtime agrupated by show</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart >
                    <Pie data={watchedShows} dataKey="watchTime" nameKey="title" fill={'var(--showColor)'} label stroke="var(--primary)">
                      {watchedShows.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={pieColors[index].hex()} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            {agrupatedByGenre && agrupatedByGenre.length > 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Watchtime agrupated by category</CardTitle>
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
            )}
          </div>
        </>
      )}
      <h2 className='text-2xl mb-4'>Watched Shows</h2>
      <div className='flex h-[35dvh] gap-4'>
        {watchedShows === null ? <Spinner /> : watchedShows.length > 0 ? (
          <>
            {watchedShows.length > 0 && watchedShows.map((userShow: any) => (
              <MediaCard key={userShow.show.tmdbId} id={userShow.show.tmdbId} title={userShow.show.title} poster={userShow.show.poster} year={userShow.show.releaseDate} mediaType={MediaType.show} />
            ))}
          </>
        ) : (
          <h1 className='text-2xl'>You have not marked any show as watched</h1>
        )}
      </div>
      <>
        <h2 className='text-2xl my-4'>Watchlist</h2>
        <div className='flex h-[35dvh] gap-4'>
          {watchlistShows === null ? <Spinner /> : watchlistShows.length > 0 ? (
            <>
              {watchlistShows.length > 0 && watchlistShows.map((userShow: any) => (
                <MediaCard key={userShow.show.tmdbId} id={userShow.show.tmdbId} title={userShow.show.title} poster={userShow.show.poster} year={userShow.show.releaseDate} mediaType={MediaType.show} />
              ))}
            </>
          ) : (
            <h1 className='text-2xl'>You have not added any show to your watchlist</h1>
          )}
        </div>
      </>
    </ >
  )
}

export default withProtectedRoute(MyShows);
