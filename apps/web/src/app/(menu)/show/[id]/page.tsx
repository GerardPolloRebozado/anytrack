'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { CircleCheck, CircleX, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { deleteOneUserShow, getManyShowReviews, getOneMarkedShow, getShow, postShowReview } from "@/utils/fetch/show";
import { getCredits, getMediaVideos, getSeasons, getWatchProviders } from "@/utils/fetch/tmdb";
import Chip from "@/components/Chip/Chip";
import MediaScore from "@/components/MediaScore/MediaScore";
import Notifications from "@/components/Notifications/Notifications";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { MediaReviewForm, MediaType, Notification } from "libs/types/src";
import { joiResolver } from "@hookform/resolvers/joi";
import { updateReviewSchema } from "libs/joi/src";
import { SubmitHandler, useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import distinctColors from "distinct-colors";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getName } from "country-list";

function ShowDetails({ params }: { params: { id: number } }) {
  const [show, setShow] = useState<any>();
  const [credits, setCredits] = useState<any>();
  const [reload, setReload] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [providers, setProviders] = useState<any>({});
  const [videos, setVideos] = useState<any>({})
  const [watchedEpisodes, setWatchedEpisodes] = useState<any[]>([]);
  const [country, setCountry] = useState<string>('');
  const router = useRouter();
  const [notifications, setNotifications] = useState<Notification[]>([])
  const colors = distinctColors({ count: show?.genres?.length, chromaMin: 50, lightMin: 30, lightMax: 70, quality: 50 });
  const reviewForm = useForm<MediaReviewForm>({
    resolver: joiResolver(updateReviewSchema),
    defaultValues: {
      mediaId: show?.localId,
    }
  });
  const submitReview: SubmitHandler<MediaReviewForm> = async (data: MediaReviewForm) => {
    try {
      const response = await postShowReview(data)
      if (response.status === 200) {
        addNotification({ type: 'success', message: 'Review added successfully' })
        setReload(!reload)
        reviewForm.reset()
        reviewForm.setValue('mediaId', show.localId)
      } else {
        addNotification({ type: 'error', message: 'Error adding review' })
      }
    } catch (error: any) {
      addNotification({ type: 'error', message: 'Error adding review' })
    }
  }

  function addNotification(notification: Notification) {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(1))
    }, 5000)
  };

  useEffect(() => {
    async function fetchWatchedEpisodes(mediaId: number) {
      const response = await getOneMarkedShow({ mediaId, watched: true });
      if (response.status === 200) {
        setWatchedEpisodes(await response.json())
      } else {
        addNotification({ type: 'error', message: 'Error fetching watched episodes' })
      }
    }
    async function fetchShow() {
      try {
        const response = await getShow(`tmdb:${params.id}`);
        response.body.year = response.body.first_air_date.split('-')[0];
        const seasons = await getSeasons({ tmdbId: params.id });
        const show = await response.body
        show.seasons = seasons.body;
        setShow(show);
        if (await show?.localId) {
          reviewForm.setValue('mediaId', await show.localId)
          const response = await getManyShowReviews(await show.localId)
          setReviews(await response.json())
          fetchWatchedEpisodes(await show.localId)
        }
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchShow();

    async function fetchCredits() {
      try {
        const response = await getCredits({ tmdbId: params.id, mediaType: MediaType.show });
        setCredits(await response.json())
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchCredits();

    async function fetchProviders() {
      try {
        const response = await getWatchProviders({ tmdbId: params.id, mediaType: MediaType.show })
        const body = await response.json()
        setProviders(await body)
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchProviders()
    async function fetchVideos() {
      try {
        const response = await getMediaVideos(params.id, MediaType.show)
        const videos = await response.json()
        setVideos(videos.results)
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchVideos()
  }, [params.id, reload, reviewForm]);

  function setIcon(season: any) {
    if (season.episodes.length === watchedEpisodes[season.season_number]?.count) {
      return 0
    }

    if (watchedEpisodes[season.season_number]?.episodes?.length > 0) {
      return 1
    }
    return 2
  }

  function openSeason(e: any, tmdbId: string, seasonNumber: number) {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    router.push(`/show/${tmdbId}/season/${seasonNumber}`)
  }

  async function deleteSeason({ tmdbId, season }: { tmdbId: number, season: number }) {
    await deleteOneUserShow(show.localId, { season }).then(() => setReload(!reload))
  }

  async function markSeason({ tmdbId, season }: { tmdbId: string, season: number }) {
    router.push(`/show/search/${tmdbId}?season=${season}`)
  }

  return (
    <>
      <Notifications notifications={notifications} setNotifications={setNotifications} />
      <>
        {show && (
          <div className="flex gap-x-12 ml-24 mt-8">
            <div className="w-[11dvw]">
              <Image
                src={show.poster_path}
                alt={show.name}
                width={0}
                height={0}
                sizes="100vw"
                objectFit="cover"
                className="w-[11dvw] h-auto rounded-lg"
              />
            </div>
            <div className='flex flex-col items-start w-[50dvw]'>
              <h1 className="text-3xl font-bold">{show.title} {show.name} ({show.year})</h1>
              <div className='text-l flex my-4'>{show.genres.map((genre: any, index: number) => <Chip key={genre.id} bgColor={colors[index].hex()}>{genre.name}</Chip>)}</div>
              <p> {show.number_of_seasons} Seasons</p>
              <MediaScore score={show?.vote_average} source="tmdb" />
              <p className="my-4">{show.overview}</p>
              <Tabs defaultValue="seasons">
                <TabsList>
                  <TabsTrigger value="seasons">Seasons</TabsTrigger>
                  <TabsTrigger value="credits">Credits</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="providers">Where to watch</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                </TabsList>
                <TabsContent value="seasons">
                  <Carousel opts={{ loop: true, align: "start" }}>
                    <CarouselContent className="w-[50dvw]">
                      {show.seasons.map((season: any) => (
                        <CarouselItem key={season.id} className="basis-[8dvw] ml-4">
                          <Card className="w-[8dvw] h-full" onClick={() => openSeason(event, show.id, season.season_number)} key={season.id}>
                            <Image
                              src={season.poster_path}
                              alt={season.name}
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="rounded-lg max-w-[8dvw] w-[8dvw] h-auto"
                            />
                            <div className="p-2 flex flex-col items-center">
                              <div className="flex justify-center w-full gap-1 my-2">
                                <p>Season {season.season_number}</p>
                                {setIcon(season) === 0 ? <CircleCheck className='text-green-500' /> : setIcon(season) === 1 ? <Eye className="text-orange-500" /> : <CircleX className="text-red-500" />}
                              </div>
                              {setIcon(season) === 0 && <Button onClick={() => deleteSeason({ tmdbId: show.id, season: season.season_number })}>Delete</Button> || <Button onClick={() => markSeason({ tmdbId: show.id, season: season.season_number })}>Mark</Button>}
                            </div>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                  </Carousel>
                </TabsContent>
                <TabsContent value="credits">
                  {credits && credits?.cast && (
                    <Carousel opts={{ loop: true, align: "start" }} >
                      <CarouselContent className="w-[50dvw]">
                        {(credits.cast.map((credit: any) => (
                          <CarouselItem key={credit.id} className="basis-[8dvw] ml-4">
                            <Card className="w-[8dvw] h-auto">
                              <Image
                                src={credit.profile_path}
                                alt={credit.name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="rounded-lg max-w-[8dvw] w-[8dvw] h-auto"
                              />
                              <div className="p-2">
                                <h5>{credit.name}</h5>
                                <p>{credit.roles.map((role: any) => {
                                  return role.character
                                })}</p>
                                <p>Episodes: {credit.total_episode_count}</p>
                              </div>
                            </Card>
                          </CarouselItem>)))}
                      </CarouselContent>
                      <CarouselNext />
                      <CarouselPrevious />
                    </Carousel>)}
                </TabsContent>
                <TabsContent value="reviews">
                  <div className='grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 my-4'>
                    {reviews.length > 0 ? reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} setReload={() => setReload(!reload)} />
                    )) : <p>No reviews found</p>}
                  </div>
                  {show.localId && (
                    <Form {...reviewForm}>
                      <form onSubmit={reviewForm.handleSubmit(submitReview)}>
                        <FormField
                          control={reviewForm.control}
                          name="rating"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Rating</FormLabel>
                              <FormControl>
                                <Input placeholder="Rating" type="number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={reviewForm.control}
                          name="review"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Review</FormLabel>
                              <FormControl>
                                <Input placeholder="Write a review of the movie" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        <Button type="submit" className="mt-1">Submit</Button>
                      </form>
                    </Form>)}
                </TabsContent>
                <TabsContent value="providers">
                  {providers && (
                    <Select onValueChange={(value) => setCountry(value)} defaultValue="">
                      <SelectTrigger>
                        <SelectValue placeholder="Select the country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Countries</SelectLabel>
                          {Object.keys(providers).length > 0 && Object.keys(providers).map((key) => (
                            <SelectItem key={key} value={key}>{getName(key)}</SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                  {country && (
                    <div className="flex gap-4 items-center mt-4 h-full w-full flex-wrap">
                      {Object.entries(providers[country]).map(([key, value]: [string, any]) => {
                        if (key === 'link') { return null; }
                        return value.map((provider: any) => {
                          return (
                            <Card key={provider.provider_id + provider.display_priority + key} className="flex items-center w-[400px]" onClick={provider.link}>
                              <div className="w-full">
                                <p className="text-xl mx-4 overflow-hidden whitespace-nowrap">{provider.provider_name} - {key[0].toUpperCase()}{key.slice(1)}</p>
                              </div>
                              <Image
                                src={provider.logo_path}
                                alt={provider.provider_name + ' logo'}
                                width={100}
                                height={100}
                                objectFit="cover"
                              />
                            </Card>
                          )
                        })
                      })}
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="videos">
                  {videos && videos.length > 0 && (
                    <Carousel opts={{ loop: true, align: "start" }} >
                      <CarouselContent className="w-[50dvw]">
                        {(videos.map((video: any) => (
                          <CarouselItem key={video.id} className="basis-[560px]">
                            <Card key={video.id} className="w-[560px] h-[315px]">
                              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} title={video.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="p-1"></iframe>
                            </Card>
                          </CarouselItem>)))}
                      </CarouselContent>
                      <CarouselNext />
                      <CarouselPrevious />
                    </Carousel>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div >
        )}
      </>
    </>
  );
}

export default withProtectedRoute(ShowDetails);
