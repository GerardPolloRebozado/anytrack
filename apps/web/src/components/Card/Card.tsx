import styles from './Card.module.css';
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}
