import Image from 'next/image';
import styles from './MediaScore.module.css';

export default function MediaScore({ score, source }: { score: number, source?: string }) {
  let color;
  if (score >= 7 && score <= 10) {
    color = 'var(--ok)';
  } else if (score >= 5 && score < 7) {
    color = 'var(--warning)';
  } else {
    color = 'var(--error)';
  }
  const background = `conic-gradient(${color} ${score * 10}%, #ddd ${score * 10}% 100%)`;
  return (
    <div className={styles.container}>
      <div className={styles.progressCircle} style={{ background }}>
        <div className={styles.innerCircle}>
          <span>{score.toFixed(1)}</span>
        </div>
      </div>
      {source === 'tmdb' && <Image src={'/icons/tmdb.png'} alt="tmdb logo" width={0} height={0} sizes="100vw" style={{ width: '2dvw', height: 'auto' }} />}
    </div>
  );
}
