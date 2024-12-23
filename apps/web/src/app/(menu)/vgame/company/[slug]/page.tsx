import { getCompanyBySlug } from '@/utils/fetch/vgame/company';
import {
  MediaInfoCard,
  MediaInfoContainer,
  MediaInfoData,
  MediaInfoImage,
  MediaInfoTitle,
  Overview,
} from '@/components/mediaInfo';
import { type VGameCompany } from '@anytrack/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';

export default async function Company({ params }: { params: { slug: string } }) {
  const res = await getCompanyBySlug(params.slug)
  if (!res.ok) {
    return <MediaInfoContainer>Company not found</MediaInfoContainer>
  }
  const company: VGameCompany = await res.json();
  console.log(company)
  return (
    <MediaInfoContainer>
      {company.logo && typeof company.logo === 'object' && company.logo.image_id && (
        <MediaInfoImage
          path={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${company.logo.image_id}.jpg`}
          alt={`${company.name} Company logo`}
        />
      )}
      <MediaInfoData>
        <MediaInfoTitle>{company.name}</MediaInfoTitle>
        <Overview>{company.description}</Overview>
        {company.developed && company.developed.length > 0 && (
          <Carousel opts={{ loop: true, align: 'start'}}>
            <CarouselContent className="w-[50dvw] content-stretch">
              {company.developed.map((game) => {
                if (
                  typeof game !== 'number' &&
                  game.name &&
                  typeof game.cover !== 'number'
                ) {
                  return (
                    <CarouselItem
                      key={game.id}
                      className="ml-4 basis-[200px]"
                    >
                      <Link href={`/vgame/info/${game.id}`}>
                        <MediaInfoCard
                          name={game.name}
                          cover={
                            typeof game.cover?.image_id === 'string'
                              ? `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game.cover.image_id}.jpg`
                              : undefined
                          }
                        >
                          <p>{game.name}</p>
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
          </Carousel>)}
      </MediaInfoData>
    </MediaInfoContainer>
  );

}
