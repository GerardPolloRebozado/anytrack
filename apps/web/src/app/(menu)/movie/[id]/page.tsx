'use client'
import Callout from "@/components/Callout/Callout";
import { searchMoviebyId, updateMovieReview, getReview } from "@/utils/fetch/movies";
import { getName } from 'country-list';
import { useEffect, useState } from "react";
import Image from "next/image";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import Chip from "@/components/Chip/Chip";
import MediaScore from "@/components/MediaScore/MediaScore";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { MediaReviewForm, MediaType } from "libs/types/src";
import { joiResolver } from "@hookform/resolvers/joi";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateReviewSchema } from "libs/joi/src";
import { getCredits, getMediaVideos, getWatchProviders } from "@/utils/fetch/tmdb";
import { Card } from "@/components/ui/card";
import distinctColors from "distinct-colors";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { CreditsResponse, MovieResponse, VideosResponse } from "moviedb-promise";
import { MediaInfoContainer } from "@/components/mediaInfo";

function MovieDetails({ params }: { params: { id: number } }) {
  const [movie, setMovie] = useState<MovieResponse>();
  const [localId, setLocalId] = useState<number>(-1);
  const [error, setError] = useState('');
  const [credits, setCredits] = useState<CreditsResponse>();
  const [reload, setReload] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [providers, setProviders] = useState<any>({});
  const [videos, setVideos] = useState<VideosResponse>({})
  const [country, setCountry] = useState<string>('');
  const reviewForm = useForm<MediaReviewForm>({
    resolver: joiResolver(updateReviewSchema),
  });
  const colors = distinctColors({ count: movie?.genres?.length, chromaMin: 50, lightMin: 30, lightMax: 70, quality: 50 });
  const submitReview: SubmitHandler<MediaReviewForm> = async (data: MediaReviewForm) => {
    try {
      const response = await updateMovieReview(data)
      if (!response.ok) throw new Error(await response.json())
      toast({ title: 'Review added successfully' })
      setReload(!reload)
      reviewForm.reset()
      if (localId > 0) {
        reviewForm.setValue('mediaId', localId)
      }
    } catch (error: any) {
      toast({ title: 'Error adding review', description: error.message, variant: 'destructive' })
    }
  }



  useEffect(() => {
    async function fetchReviews(mediaId: number) {
      try {
        const response = await getReview(mediaId)
        if (!response.ok) throw new Error(await response.json())
        setReviews(await response.json())
      } catch (error: any) {
        toast({ title: 'Failed to fetch reviews', description: error.message, variant: 'destructive' })
      }
    }
    async function fetchMovie() {
      try {
        const response = await searchMoviebyId(params.id);
        const body = await response.json();
        setMovie(await body.movie);
        if (await body.localId) {
          fetchReviews(await body.localId)
          setLocalId(await body.localId)
          reviewForm.setValue('mediaId', await body.localId)
        }
      } catch (error: any) {
        toast({ title: 'Failed to fetch movie', description: error.message, variant: 'destructive' })
      }
    }
    fetchMovie();

    async function fetchCredits() {
      try {
        const response = await getCredits({ tmdbId: params.id, mediaType: 'movie' })
        const credits = await response.json()
        setCredits(await credits)
      } catch (error: any) {
        console.log(error)
        toast({ title: 'Failed to fetch credits', description: error.message, variant: 'destructive' })
      }
    }
    fetchCredits()

    async function fetchProviders() {
      try {
        const response = await getWatchProviders({ tmdbId: params.id, mediaType: MediaType.movie })
        const body = await response.json()
        setProviders(await body)
      } catch (error: any) {
        console.log(error)
        toast({ title: 'Failed to fetch providers', description: error.message, variant: 'destructive' })
      }
    }
    fetchProviders()

    async function fetchVideos() {
      try {
        const response = await getMediaVideos(params.id, MediaType.movie)
        const videos = await response.json()
        setVideos(videos)
      } catch (error: any) {
        console.log(error)
        toast({ title: 'Failed to fetch videos', description: error.message, variant: 'destructive' })
      }
    }
    fetchVideos()
  }, [params.id, reload, reviewForm]);

  const closeModal = () => {
    setError('')
  }


  return (
    <>
      {error && (
        <div className="flex flex-col justify-center items-center fixed bg-[rgba(0,0,0,0.5)] z-10 w-full h-full" onClick={closeModal}>
          <p className="absolute p-4 text-3xl cursor-pointer">X</p>
          <Callout type="error">{error}</Callout>
        </div>
      )}
      <MediaInfoContainer>
        {movie && (
          <>
            <div className="w-[11dvw]">
              <Image
                src={movie.poster_path || ''}
                alt={movie.title || 'Movie poster'}
                width={0}
                height={0}
                sizes="100vw"
                objectFit="cover"
                className="w-[11dvw] h-auto rounded-lg"
              />

            </div>
            <div className='flex flex-col items-start w-[50dvw]'>
              <h1 className="text-3xl font-bold">{movie.title} ({movie.release_date && movie.release_date.split('-')[0]})</h1>
              {movie.genres && (
                <p className='text-l flex my-4'>{movie.genres.map((genre: any, index: number) => <Chip key={genre.id} bgColor={colors[index].hex()}>{genre.name}</Chip>)}</p>
              )}
              <p> {movie.runtime} min</p>
              <MediaScore score={movie.vote_average || 0} source="tmdb" />
              <p className="my-4">{movie.overview}</p>
              <p>Directed by: </p> <p className="text-lg font-semibold mb-4">{credits && credits.crew?.filter((crew: any) => crew.job === 'Director').map((director: any) => director.name).join(', ')}</p>
              <Tabs defaultValue="credits">
                <TabsList>
                  <TabsTrigger value="credits">Credits</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="providers">Where to watch</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                </TabsList>
                <TabsContent value="credits" className="flex gap-x-2">
                  {credits && credits.cast && credits.cast.length > 0 && (
                    <Carousel opts={{ loop: true, align: "start" }} >
                      <CarouselContent className="w-[50dvw]">
                        {(credits.cast.map((credit: any) => (
                          <CarouselItem key={credit.id} className="basis-[8dvw] ml-4">
                            <Card key={credit.id} className="w-[8dvw] h-full">
                              <Image
                                src={credit.profile_path}
                                alt={credit.name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="rounded-lg max-w-[8dvw] w-[8dvw] h-auto"
                              />
                              <div className="p-2">
                                <p>{credit.name}</p>
                                <p>{credit.character}</p>
                              </div>
                            </Card>
                          </CarouselItem>)))}
                      </CarouselContent>
                      <CarouselNext />
                      <CarouselPrevious />
                    </Carousel>
                  )}
                </TabsContent>
                <TabsContent value="reviews">
                  <div className='grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4'>
                    {reviews.length > 0 ? reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} setReload={() => setReload(!reload)} />
                    )) : <p>No reviews found</p>}
                  </div>
                  {localId && (
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
                  {videos && videos.results && videos.results.length > 0 && (
                    <Carousel opts={{ loop: true, align: "start" }} >
                      <CarouselContent className="w-[50dvw]">
                        {(videos.results.map((video: any) => (
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
          </>
        )}
      </MediaInfoContainer>
    </>
  );
}

export default withProtectedRoute(MovieDetails);
