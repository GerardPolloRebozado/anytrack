import Card from "../Card/Card";
import { ReviewWithUser } from "libs/types/src";
import MediaScore from "../MediaScore/MediaScore";
import styles from './ReviewCard.module.css';

export default function ReviewCard(review: ReviewWithUser) {
  return (
    <Card>
      <div className={styles.title}>
        <h4>{review.user.name}</h4>
        <MediaScore score={review.rating} />
      </div>
      <p>{review.review}</p>
    </Card>
  );
}
