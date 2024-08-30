'use client'

import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { getVGameById } from "@/utils/fetch/igdb";
import { useEffect, useState } from "react"
import { MediaInfoCard, MediaInfoContainer, MediaInfoData, MediaInfoImage, MediaInfoTags, MediaInfoTitle, Overview } from "@/components/mediaInfo";
import MediaScore from "@/components/MediaScore/MediaScore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MediaType, VGameExpanded } from "@anytrack/type";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { number } from "joi";
import Link from "next/link";
import { Company, InvolvedCompany } from "igdb-api-types";

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
                {game.involved_companies && <TabsTrigger value="involvedCompanies">Involved companies</TabsTrigger>}
              </TabsList>
              {game.dlcs && game.dlcs.length > 0 && (
                <TabsContent value="dlcs">
                  <Carousel opts={{ loop: true, align: "start" }} >
                    <CarouselContent className="w-[50dvw]">
                      {game.dlcs.map(dlc => {
                        if (typeof dlc !== 'number' && dlc.name && typeof dlc.cover !== 'number') {
                          return (
                            <CarouselItem key={dlc.id} className={`${(dlc.cover?.width ?? 0) > (dlc.cover?.height ?? 1) ? 'basis-[400px]' : 'basis-[220px]'} ml-4 h-[400px]`}>
                              <Link href={`/game/${dlc.id}`}>
                                <MediaInfoCard name={dlc.name} cover={typeof dlc.cover?.image_id === 'string' ? `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${dlc.cover.image_id}.jpg` : undefined}>
                                  <p>{dlc.name}</p>
                                </MediaInfoCard>
                              </Link>
                            </CarouselItem>
                          );
                        }
                        return null;
                      })}
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                  </Carousel>
                </TabsContent>)}
              <TabsContent value="involvedCompanies">
                <Carousel opts={{ loop: true, align: "start" }} >
                  <CarouselContent className="w-[50dvw]">
                    {game.involved_companies && (
                      game.involved_companies.map(involvedCompany => {
                        if (typeof involvedCompany !== 'object') return null
                        if (typeof involvedCompany.company !== 'object') return null;
                        return (
                          <CarouselItem key={involvedCompany.id} className={` ml-4 h-[250px] basis-[250px] ${typeof involvedCompany.company.logo === 'object' && typeof involvedCompany.company.logo.image_id === 'string' && typeof involvedCompany.company.logo.width === 'number' && typeof involvedCompany.company.logo.height === 'number' && (involvedCompany.company.logo.width > involvedCompany.company.logo.height ? 'basis-[400px]' : 'basis-[200px]')}`}>
                            <MediaInfoCard name={involvedCompany.company.name || 'Game company'} cover={typeof involvedCompany.company.logo !== 'number' && involvedCompany.company.logo?.image_id ? `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${involvedCompany.company.logo?.image_id}.jpg` : undefined}>
                              <p>{involvedCompany.company.name}</p>
                              <p>{involvedCompany.developer && 'Developer'}</p>
                              <p>{involvedCompany.publisher && 'Publisher'}</p>
                              <p>{involvedCompany.porting && 'Porting'}</p>
                              <p>{involvedCompany.supporting && 'Supporting'}</p>
                            </MediaInfoCard>
                          </CarouselItem>
                        );
                      })
                    )}
                  </CarouselContent>
                  <CarouselNext />
                </Carousel>
              </TabsContent>
            </Tabs>
          </MediaInfoData>
        </>
      )}
    </MediaInfoContainer>
  )
}

export default withProtectedRoute(GameDetails);
