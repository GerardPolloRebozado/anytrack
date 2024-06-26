'use client'
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { markMovie, searchMoviebyId } from "@/utils/fetch/movies";
import { useEffect, useState } from "react";
import styles from '@/styles/markMediaForm.module.css';
import Image from "next/image";
import { markMovieSchemaForm } from "libs/joi/src";
import { Notification, markMovieType } from "libs/types/src";
import Callout from "@/components/Callout/Callout";
import Notifications from "@/components/Notifications/Notifications";

export default function MarkMovieForm({ params }: { params: { tmdbId: number } }) {
  const [movie, setMovie] = useState<any>({})
  const [result, setResult] = useState<boolean | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([])
  const { register, handleSubmit, formState: { errors } } = useForm<markMovieType>({
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
      <div className={styles.container}>
        <h1>{movie?.title} - {movie?.release_date?.slice(0, 4)}</h1>
        <Image src={movie.poster_path} alt={movie.title} width={300} height={420} className={styles.poster} />
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input type="date" id='watchedDate' {...register('watchedDate', { required: true })} />
          <select id="watched" {...register('watched', { required: true })}>
            <option value="true">Watched</option>
            <option value="false">Not watched</option>
          </select>
          <PrimaryButton type="submit">Submit</PrimaryButton>
          {result === true && <Callout type="success" >Movie added</Callout>}
          {result === false && <Callout type="error" >Error adding movie</Callout>}
          {errors.watchedDate && <Callout type="error" >{errors.watchedDate.message}</Callout>}
          {errors.watched && <Callout type="error" >{errors.watched.message}</Callout>}
        </form>
      </div>
    </>
  )
}
