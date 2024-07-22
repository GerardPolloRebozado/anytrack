'use client'
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { markMovie, searchMoviebyId } from "@/utils/fetch/movies";
import { useEffect, useState } from "react";
import Image from "next/image";
import { markMovieSchemaForm } from "libs/joi/src";
import { Notification, markMovieType } from "libs/types/src";
import Notifications from "@/components/Notifications/Notifications";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function MarkMovieForm({ params }: { params: { tmdbId: number } }) {
  const [movie, setMovie] = useState<any>({})
  const [result, setResult] = useState<boolean | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([])
  const form = useForm<markMovieType>({
    resolver: joiResolver(markMovieSchemaForm),
    defaultValues: {
      watchedDate: new Date().toISOString().split('T')[0],
    }
  })

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await searchMoviebyId(params.tmdbId)
        setMovie(await response.json())
      } catch (error: any) {
        addNotification({ type: 'error', message: error?.message })
      }
    }
    fetchMovie()
  }, [params.tmdbId])

  function addNotification(notification: Notification) {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(1))
    }, 5000)
  };

  const onSubmit = async (data: markMovieType) => {
    const response = await markMovie({
      tmdbId: params.tmdbId,
      watched: data.watched,
      watchedDate: data.watchedDate,
    })
    if (response.status === 200) {
      setResult(true)
    } else {
      setResult(false)
    }
  }


  return (
    <>
      <Notifications notifications={notifications} setNotifications={setNotifications} />
      <div className='flex flex-col items-center justify-center'>
        <h1 className="text-3xl font-semibold">{movie?.title} - {movie?.release_date?.slice(0, 4)}</h1>
        <Image src={movie.poster_path} alt={movie.title} width={300} height={420} className='rounded-lg my-2' />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=' flex flex-col'>
            <FormField
              control={form.control}
              name='watchedDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Watched Date</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder='Select the date you watched the movie' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            <FormField
              control={form.control}
              name='watched'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Watched</FormLabel>
                  <Select onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="true">Watched</SelectItem>
                        <SelectItem value="false">Not watched</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
            <Button type='submit' className="mt-2">Mark</Button>
          </form>
        </Form>
      </div >
    </>
  )
}
