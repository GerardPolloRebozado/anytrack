'use client'
import { useEffect, useState } from 'react'
import withProtectedRoute from '@/components/Hocs/withProtectedRoute';
import { MediaType, markedGameResponse } from 'libs/types/src';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { getMarkedVGames, removeMarkedVGame } from '@/utils/fetch/game';
import MediaCard from '@/components/MediaCard/MediaCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import distinctColors from 'distinct-colors';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Spinner } from '@/components/ui/spinner';

function MyGames() {
  const [markedGames, setMarkedGames] = useState<markedGameResponse[] | null>(null)
  const pieColors = distinctColors({ count: markedGames?.length || 0, chromaMin: 50, lightMin: 30, lightMax: 70, quality: 50 });

  useEffect(() => {
    async function fetchMarkedVGames() {
      try {
        setMarkedGames(await getMarkedVGames({}))
      } catch (error: any) {
        toast({ title: 'Failed to fetch video games', description: error?.message, variant: "destructive" })
      }
    }
    fetchMarkedVGames()
  }, []);

  if (markedGames === null) return <Spinner />
  if (markedGames.length === 0) return <div className='w-full flex justify-center'><h1 className='text-2xl'>You have not marked any game</h1></div>

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle> Playtime agrupated by game in minutes</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer height={400}>
            <PieChart>
              <Pie
                data={markedGames
                  .filter(item => item.playTime > 0)
                  .map(item => ({
                    ...item,
                    playTime: item.playTime / 60000,
                  }))}
                dataKey="playTime"
                nameKey="game.name"
                fill={'var(--vgameColor)'}
                label stroke="var(--primary)">
                {markedGames.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index].hex()} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <h2 className='text-xl my-4'>Played Games</h2>
      <div className='px-10'>
        <Carousel opts={{ loop: true, align: "start" }}>
          <CarouselContent className='2xl:h-[35dvh] xl:h-[25dvh] lg:h-[13dvh]'>
            {markedGames.length > 0 && markedGames.map((markedGame) => (
              markedGame.playTime > 0 && (
                <CarouselItem key={markedGame.game.id} className='basis-1/6'>
                  <MediaCard
                    id={markedGame.game.id} title={markedGame.game.name}
                    poster={markedGame.game.coverId && `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${markedGame.game.coverId}.jpg` || undefined}
                    year={markedGame.game.firstReleaseDate && new Date(markedGame.game.firstReleaseDate).toLocaleDateString() || undefined} mediaType={MediaType.vgame}
                    playtime={markedGame.playTime}>
                    <Button onClick={() => removeMarkedVGame(markedGame.game.id)}>Remove</Button>
                  </MediaCard>
                </CarouselItem>
              )))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <h2 className='text-xl my-4'>Watchlist</h2>
      <div className='px-10'>
        <Carousel opts={{ loop: true, align: "start" }}>
          <CarouselContent className='2xl:h-[35dvh] xl:h-[25dvh] lg:h-[13dvh]'>
            {markedGames.length > 0 && markedGames.map((markedGame) => (
              markedGame.playTime === 0 && (
                <CarouselItem key={markedGame.game.id} className='basis-1/6'>
                  <MediaCard id={markedGame.game.id} title={markedGame.game.name} poster={markedGame.game.coverId && `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${markedGame.game.coverId}.jpg` || undefined}
                    year={markedGame.game.firstReleaseDate && new Date(markedGame.game.firstReleaseDate).toLocaleDateString() || undefined} mediaType={MediaType.vgame}>
                    <Button>Remove</Button>
                  </MediaCard>
                </CarouselItem>
              )))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div >
    </ >
  )
}

export default withProtectedRoute(MyGames);
