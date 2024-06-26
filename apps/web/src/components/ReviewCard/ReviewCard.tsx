import Card from "../Card/Card";
import { ReviewWithUser } from "libs/types/src";
import MediaScore from "../MediaScore/MediaScore";
import styles from './ReviewCard.module.css';
import Cookies from "js-cookie";
import { deleteReview } from "@/utils/fetch/reviews";

export default function ReviewCard({ review, setReload }: { review: ReviewWithUser, setReload: () => void }) {
  const fetchDeleteReview = async () => {
    const response = await deleteReview(review.mediaId);
    if (response.status === 200) {
      setReload();
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
