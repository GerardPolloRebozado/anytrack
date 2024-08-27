'use client'

import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { getVGameById } from "@/utils/fetch/igdb";
import { Game } from "igdb-api-types"
import { useEffect, useState } from "react"
import { MediaInfoContainer, MediaInfoData, MediaInfoImage, MediaInfoTags, MediaInfoTitle } from "@/components/mediaInfo";
import { gameGenre } from "@prisma/client";

function GameDetails({ params }: { params: { id: number } }) {
  const [game, setGame] = useState<Game & { coverUrl?: string, genreDb?: gameGenre[] }>();

  useEffect(() => {
    async function fetchGame() {
      const res = await getVGameById(params.id);
      const data = await res.json();
      setGame(await data);
    }
    fetchGame();
  }, [params.id]);

  return (
    <MediaInfoContainer>
      {game && (
        <>
          {game.coverUrl && (
            <MediaInfoImage path={game.coverUrl} alt={game.name || 'Game poster'} />
          )}
          <MediaInfoData>
            <MediaInfoTitle>{game.name}</MediaInfoTitle>
            {game.genreDb && <MediaInfoTags tags={game.genreDb} />}
          </MediaInfoData>
        </>
      )}
    </MediaInfoContainer>
  )
}

export default withProtectedRoute(GameDetails);
