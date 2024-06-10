import styles from './Chip.module.css';
export default function Chip({ children, onClick, className, bgColor }: { children: React.ReactNode; onClick?: () => void; className?: string, bgColor?: string }) {
  return (
    <div className={`${styles.chip} ${className}`} onClick={onClick} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
}
