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

function MovieDetails({ params }: { params: { id: string } }) {
  const [movie, setMovie] = useState<any>();
  const [error, setError] = useState('')
  const [errorModal, setErrorModal] = useState(false)
  const router = useRouter();

  useEffect(() => {
    async function fetchMovie() {
      const response = await searchMoviebyId(params.id);
      if (response.status === 200) {
        response.body.year = response.body.release_date.split('-')[0];
        setMovie(await response.body);
      } else {
        setError(response.body.error);
        setErrorModal(true);
      }
    }
    fetchMovie();
  }, [params.id]);

  const closeModal = () => {
    setErrorModal(false);
  }

  return (
    <div className={styles.container}>
      <ArrowLeft className={styles.back} size={32} onClick={() => router.back()} />
      {error && errorModal && (
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
                width={300}
                height={420} />
            </div>

            <div className={styles.movieDetails}>
              <h1 className={styles.title}>{movie.title} ({movie.year})</h1>
              <p className={styles.genres}>{movie.genres.map((genre: any) => <Chip key={genre.id} bgColor={randomColor()}>{genre.name}</Chip>)}</p>
              <p className={styles.runtime}> {movie.runtime} min</p>
              <p className={styles.overview}>{movie.overview}</p>
            </div>
          </div>
        )}
      </div>
    </div >
  );
}

export default withProtectedRoute(MovieDetails);
