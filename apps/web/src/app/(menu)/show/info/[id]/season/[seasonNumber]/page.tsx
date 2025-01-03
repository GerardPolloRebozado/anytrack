'use client'
import withProtectedRoute from "@/components/Hocs/withProtectedRoute"
import { getSeasons } from "@/utils/fetch/tmdb"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "@/components/ui/use-toast"
import { TvSeasonResponse } from "moviedb-promise"

function SeasonPage({ params }: { params: { id: number, seasonNumber: number } }) {
  const [season, setSeason] = useState<TvSeasonResponse>()
  const [title, setTitle] = useState('AnyTrack')

  useEffect(() => {
    async function fetchSeason() {
      try {
        const response = await getSeasons({
          tmdbId: params.id,
          season: params.seasonNumber
        })
        const body = await response.json()
        setSeason(body)
        setTitle(`AnyTrack ${body.name}`)
      } catch (error: any) {
        console.log(error)
        toast({ title: 'Failed to fetch season', description: error?.message, variant: "destructive" })
      }
    }
    fetchSeason()
  }, [params.id, params.seasonNumber])

  return (
    <div>
      <title>{title}</title>
      <div>
        {season && (
          <div className='flex gap-x-12 ml-24 mt-8'>
            {season.poster_path && (
              <div className="w-[11dvw]">
                <Image
                  src={season.poster_path}
                  alt={season.name || "Season poster path"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[11dvw] h-auto rounded-lg"
                />
              </div>)}
            <div className='detailsContainer'>
              <h1 className="text-4xl font-semibold">{season.name} {season.air_date && (season.air_date.slice(0, 7))}</h1>
              <p className="my-4">{season.overview}</p>
              <p className="text-2xl mb-4">Episodes:</p>
              <ScrollArea className="w-[50dvw] h-[80dvh]">
                {season.episodes && season.episodes.map((episode: any) => (
                  <Card key={episode.episode_number} className="my-4">
                    <CardContent className="p-0 flex gap-4">
                      <Image
                        src={episode.still_path}
                        width={350}
                        height={200}
                        sizes="100vw"
                        className="rounded-lg h-[10dvh] w-auto"
                        alt={`Episode ${episode.episode_number} - ${episode.name} still path`}
                      />
                      <div className="pr-4">
                        <p className="text-xl font-semibold">{episode.episode_number}-{episode.name}</p>
                        <p className="font-thin">{episode.runtime} min</p>
                        <div>{episode.overview}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </ScrollArea>
            </div>
          </div>
        )
        }
      </div >
    </div >
  )
}

export default withProtectedRoute(SeasonPage)
