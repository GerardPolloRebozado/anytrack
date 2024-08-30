'use client'

import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { getVGameById } from "@/utils/fetch/igdb";
import { useEffect, useState } from "react"
import { MediaCardHorizontal, MediaCardVertical, MediaInfoContainer, MediaInfoData, MediaInfoImage, MediaInfoTags, MediaInfoTitle, Overview } from "@/components/mediaInfo";
import MediaScore from "@/components/MediaScore/MediaScore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MediaType, VGameExpanded } from "@anytrack/type";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { number } from "joi";
import Link from "next/link";

function GameDetails({ params }: { params: { id: number } }) {
  const [game, setGame] = useState<VGameExpanded>();

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
          {game.cover && typeof game.cover !== 'number' && typeof game.cover.image_id === 'string' && (
            <MediaInfoImage path={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game.cover.image_id}.jpg`} alt={`${game.name} Game poster`} />
          )}
          <MediaInfoData>
            <MediaInfoTitle>{game.name}</MediaInfoTitle>
            {game.genreDb && <MediaInfoTags tags={game.genreDb} />}
            {game.total_rating && <MediaScore score={game?.total_rating / 10} source="igdb" />}
            <Overview>{game.summary}</Overview>
            <Tabs defaultValue="dlcs">
              <TabsList>
                {game.dlcs && <TabsTrigger value="dlcs">DLCS</TabsTrigger>}
                {game.expansions && <TabsTrigger value="expansions">Expansions</TabsTrigger>}
                <TabsTrigger value="involvedCompanies">Involved companies</TabsTrigger>
              </TabsList>
              {game.dlcs && game.dlcs.length > 0 && (
                <TabsContent value="dlcs" className="flex gap-x-2">
                  <Carousel opts={{ loop: true, align: "start" }} >
                    <CarouselContent className="w-[50dvw]">
                      {game.dlcs.map(dlc => {
                        if (typeof dlc !== 'number' && dlc.name && typeof dlc.cover !== 'number') {
                          if (dlc.cover?.height && dlc.cover?.width && dlc.cover.height > dlc.cover.width) {
                            return (
                              <CarouselItem key={dlc.id} className="basis-[8dvw] ml-4">
                                <Link href={`/game/${dlc.id}`}>
                                  <MediaCardVertical id={dlc.id} name={dlc.name} mediaType={MediaType.game} cover={typeof dlc.cover?.image_id === 'string' ? `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${dlc.cover.image_id}.jpg` : undefined}>
                                    <p>{dlc.name}</p>
                                  </MediaCardVertical>
                                </Link>
                              </CarouselItem>
                            );
                          } else {
                            return (
                              <CarouselItem key={dlc.id} className="basis-[20dvw] ml-4">
                                <Link href={`/game/${dlc.id}`}>
                                  <MediaCardHorizontal id={dlc.id} name={dlc.name} mediaType={MediaType.game} cover={typeof dlc.cover?.image_id === 'string' ? `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${dlc.cover.image_id}.jpg` : undefined}>
                                    <p>{dlc.name}</p>
                                  </MediaCardHorizontal>
                                </Link>
                              </CarouselItem>
                            );
                          }
                        }
                        return null;
                      })}
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                  </Carousel>
                </TabsContent>)}
            </Tabs>
          </MediaInfoData>
        </>
      )}
    </MediaInfoContainer>
  )
}

export default withProtectedRoute(GameDetails);
