import styles from './Card.module.css';
export default function Card({ children, padding = true, className, onClick }: { children: React.ReactNode, padding?: boolean, className?: string, onClick?: () => void}) {
  return (
    <div className={styles.card + (padding ? ` ${styles.padding}` : '') + (className ? ` ${className}` : '')}>
      {children}
    </div>
  );
}
