'use client';
import { useEffect, useState } from "react";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { BarChart, Bar, XAxis, Legend } from 'recharts';
import { MediaRuntimeChartData, groupedFutureMedia } from "libs/types/src";
import { Clapperboard, Tv } from "lucide-react";
import { getManyFutureMedia } from "@/utils/fetch/media";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getMediaRuntimeChart } from "@/utils/fetch/charts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";

function DashboardPage() {
  const [nextMedia, setNextMedia] = useState<groupedFutureMedia[]>([]);
  const [mediaHistory, setMediaHistory] = useState<MediaRuntimeChartData>()

  useEffect(() => {
    async function fetchFutureEpisodes() {
      try {
        const response = await getManyFutureMedia()
        if (!response.ok) throw new Error(await response.json())
        const nextEpisodesResponse = await response.json()
        setNextMedia(nextEpisodesResponse)
      } catch (error: any) {
        toast({ title: 'Failed to fetch future episodes', description: error.message, variant: "destructive" })
      }
    }
    fetchFutureEpisodes()

    async function fetchMediaHistory() {
      try {
        const response = await getMediaRuntimeChart('month')
        if (!response.ok) throw new Error(await response.json())
        const body = await response.json()
        setMediaHistory(body)
      } catch (error: any) {
        toast({ title: 'Failed to fetch media history', description: error.message, variant: "destructive" })
      }
    }
    fetchMediaHistory()
  }, [])


  useEffect(() => {
    console.log(mediaHistory)
  }, [mediaHistory])

  const monthlyWatchtimeChartConfig = {
    show: {
      label: 'Show',
      color: 'var(--showColor)',
    },
    movie: {
      label: 'Movie',
      color: 'var(--movieColor)',
    },
  }

  return (
    <>
      <h1 className="text-4xl">Dashboard</h1>
      <div>
        <div className='grid sm:grid-cols-1 xl:grid-cols-2 my-4'>
          {mediaHistory && mediaHistory.chartData.length > 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Media Monthly watchtime</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={monthlyWatchtimeChartConfig}>
                  <BarChart data={mediaHistory.chartData}>
                    <Bar dataKey="movie" fill={'var(--movieColor)'} />
                    <Bar dataKey="show" fill={'var(--showColor)'} />
                    <XAxis dataKey="date" />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                    <Legend content={<div className="flex items-center flex-col justify-center text-lg"><div className="flex justify-center items-center w-full"><Clapperboard className="text-movie mx-1" size={22} /><p><strong>{mediaHistory.mediaStats.movieCount} movies</strong></p> <span className="text-movie mx-1">|</span> <p><strong>{mediaHistory.mediaStats.movieRuntime}</strong> minutes</p></div> <div className="flex justify-center items-center w-full"><Tv className="text-show mx-1" size={22} /><p><strong>{mediaHistory.mediaStats.episodeCount} shows</strong></p> <span className="text-show mx-1">|</span> <p><strong>{mediaHistory.mediaStats.showRuntime}</strong> minutes</p></div></div>} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>)}
        </div>
        <h2 className="text-2xl mb-4">Upcoming releases</h2>
        <div className=" flex flex-col justify-center items-center">
          {nextMedia.length > 0 && (
            <Carousel opts={{ loop: true, align: "start" }} className="w-[80dvw]">
              <CarouselContent className="py-5">
                {nextMedia.map((media: groupedFutureMedia) => (
                  <CarouselItem key={media.title} className="basis-[250px] mx-5">
                    <Card className="w-[250px] rounded-lg h-[500px]">
                      <Link href={`/${media.mediaType}/info/${media.tmdbId || media.igdbId || '1'}`}>
                        <CardContent className="p-0">
                          <div className=" w-[250px] h-[375px] mb-3">
                            <Image
                              src={media.poster}
                              alt={`Poster for the ${media.mediaType}`}
                              width={250}
                              height={375}
                              className="p-0 rounded-lg" />
                          </div>
                        </CardContent>
                        <CardFooter>{media.title} <br />{new Date(media.releaseDate).toLocaleDateString(undefined, { year: 'numeric', month: 'numeric', day: 'numeric' })}</CardFooter>
                      </Link>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </div>
      </div >
    </>
  );
}

export default withProtectedRoute(DashboardPage);
