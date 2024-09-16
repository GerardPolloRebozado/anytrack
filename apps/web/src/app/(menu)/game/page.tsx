'use client'
import { useEffect, useState } from 'react'
import withProtectedRoute from '@/components/Hocs/withProtectedRoute';
import { MediaType, markedGameResponse } from 'libs/types/src';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import MediaCard from '@/components/MediaCard/MediaCard';
import { getMarkedVGames } from '@/utils/fetch/game';

function MyGames() {
  const [markedGames, setMarkedGames] = useState<markedGameResponse[]>([])

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
      <h2 className='text-xl my-4'>Played Games</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
        {markedGames.length > 0 && markedGames.map((markedGame) => (
          markedGame.playTime > 0 && (
            <MediaCard key={markedGame.game.id} id={markedGame.game.id} title={markedGame.game.name} poster={markedGame.game.coverId && `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${markedGame.game.coverId}.jpg` || undefined}
              year={markedGame.game.firstReleaseDate && new Date(markedGame.game.firstReleaseDate).toLocaleDateString() || undefined} mediaType={MediaType.vgame}>
              <Button>Remove</Button>
            </MediaCard>)
        ))}
      </div>

      <h2 className='text-xl my-4'>Watchlist</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
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
