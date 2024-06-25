'use client'
import Callout from "@/components/Callout/Callout";
import { searchMoviebyId } from "@/utils/fetch/movies";
import { useEffect, useState } from "react";
import styles from './page.module.css';
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import Chip from "@/components/Chip/Chip";
import { randomColor } from "@/utils/randomColor";
import { getCredits } from "@/utils/fetch/userMediaItem";
import { MediaType } from "@prisma/client";
import MediaScore from "@/components/MediaScore/MediaScore";

function MovieDetails({ params }: { params: { id: string } }) {
  const [movie, setMovie] = useState<any>();
  const [error, setError] = useState('');
  const [credits, setCredits] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    async function fetchMovie() {
      const response = await searchMoviebyId(params.id);
      if (response.status === 200) {
        response.body.year = response.body.release_date.split('-')[0];
        setMovie(await response.body);
      } else {
        setError(response.body.error);
      }
    }
    fetchMovie();

    async function fetchCredits() {
      const response = await getCredits({ tmdbId: params.id, mediaType: MediaType.movie })
      if (response.status === 200) {
        setCredits(await response.body.cast)
      } else {
        setError(await response.body.error)
      }
    }
    fetchCredits()
  }, [params.id]);

  const closeModal = () => {
    setError('')
  }

  return (
    <div className={styles.container}>
      <ArrowLeft className={styles.back} size={32} onClick={() => router.back()} />
      {error && (
        <div className={styles.errorModal} onClick={closeModal}>
          <p className={styles.closeModal}>X</p>
          <Callout type="error">{error}</Callout>
        </div>
      )}
      <div>
        {movie && (
          <div className={styles.grid}>
            <div className={styles.poster}>
              <Image
                src={movie.poster}
                alt={movie.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '15dvw', height: 'auto' }} />
            </div>
            <div className={styles.movieDetails}>
              <h1 className={styles.title}>{movie.title} ({movie.year})</h1>
              <p className={styles.genres}>{movie.genres.map((genre: any) => <Chip key={genre.id} bgColor={randomColor()}>{genre.name}</Chip>)}</p>
              <p className={styles.runtime}> {movie.runtime} min</p>
              <MediaScore score={movie.vote_average} />
              <p className={styles.overview}>{movie.overview}</p>
              <div id="Credits" className={styles.creditList}>
                {credits && credits.length > 0 && (
                  credits.map((credit: any) => (
                    <div key={credit.id} className={styles.creditCard}>
                      <Image
                        src={credit.profile_path}
                        alt={credit.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '5dvw', height: 'auto' }}
                      />
                      <div className={styles.castDetails}>
                        <h5>{credit.name}</h5>
                        <p>{credit.character}</p>
                      </div>
                    </div>
                  )))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  );
}

export default withProtectedRoute(MovieDetails);
