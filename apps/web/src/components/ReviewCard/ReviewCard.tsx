import { removeReview } from "@/utils/fetch/movies";
import Card from "../Card/Card";
import MediaScore from "../MediaScore/MediaScore";
import styles from './ReviewCard.module.css';
import Cookies from "js-cookie";
import { deleteOneShowReview } from "@/utils/fetch/show";

export default function ReviewCard({ review, setReload }: { review: any, setReload: () => void }) {
  const fetchDeleteReview = async () => {
    if (review.movieId) {
      const response = await removeReview(review.movieId);
      if (response.status === 200) {
        setReload();
      }
    } else if (review.showId) {
      const response = await deleteOneShowReview(review.showId);
      if (response.status === 200) {
        setReload();
      }
    }
  }
  return (
    <Card>
      {review.userId === Cookies.get('userId') && <button className={styles.deleteButton} onClick={fetchDeleteReview}>X</button>}
      <div className={styles.title}>
        <h4>{review.user.name}</h4>
        <MediaScore score={review.rating} />
      </div>
      <p>{review.review}</p>
    </Card>
  );
}
