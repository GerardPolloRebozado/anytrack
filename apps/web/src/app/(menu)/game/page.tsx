'use client'
import { useEffect, useState } from 'react'
import withProtectedRoute from '@/components/Hocs/withProtectedRoute';
import { MediaType, markedGameResponse } from 'libs/types/src';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { getMarkedVGames } from '@/utils/fetch/game';
import MediaCard from '@/components/MediaCard/MediaCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import distinctColors from 'distinct-colors';

function MyGames() {
  const [markedGames, setMarkedGames] = useState<markedGameResponse[]>([])
  const pieColors = distinctColors({ count: markedGames.length, chromaMin: 50, lightMin: 30, lightMax: 70, quality: 50 });

  useEffect(() => {
    async function fetchMarkedVGames() {
      try {
        setMarkedGames(await getMarkedVGames())
      } catch (error: any) {
        toast({ title: 'Failed to fetch video games', description: error?.message, variant: "destructive" })
      }
    }
    fetchMarkedVGames()
  }, []);

  return (
    <>
      {/*
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
    */}
      <Card>
        <CardHeader>
          <CardTitle> Playtime agrupated by game in minutes</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
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
      <div className='flex h-[35dvh] gap-4'>
        {markedGames.length > 0 && markedGames.map((markedGame) => (
          markedGame.playTime > 0 && (
            <MediaCard
              key={markedGame.game.id}
              id={markedGame.game.id} title={markedGame.game.name}
              poster={markedGame.game.coverId && `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${markedGame.game.coverId}.jpg` || undefined}
              year={markedGame.game.firstReleaseDate && new Date(markedGame.game.firstReleaseDate).toLocaleDateString() || undefined} mediaType={MediaType.vgame}
              playtime={markedGame.playTime}>
              <Button>Remove</Button>
            </MediaCard>)
        ))}
      </div>

      <h2 className='text-xl my-4'>Watchlist</h2>
      <div className='flex h-[35dvh] gap-4'>
        {markedGames.length > 0 && markedGames.map((markedGame) => (
          markedGame.playTime === 0 && (
            <MediaCard key={markedGame.game.id} id={markedGame.game.id} title={markedGame.game.name} poster={markedGame.game.coverId && `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${markedGame.game.coverId}.jpg` || undefined}
              year={markedGame.game.firstReleaseDate && new Date(markedGame.game.firstReleaseDate).toLocaleDateString() || undefined} mediaType={MediaType.vgame}>
              <Button>Remove</Button>
            </MediaCard>)
        ))}
      </div>
    </ >
  )
}

export default withProtectedRoute(MyGames);
