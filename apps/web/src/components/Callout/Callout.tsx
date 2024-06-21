import { InfoProps } from 'libs/types/src';
import styles from './Callout.module.css';
import { CircleCheck, CircleX, Info, TriangleAlert } from 'lucide-react';

export default function Callout({ type, children, onClick }: InfoProps) {
    const icons = { error: <CircleX />, warning: <TriangleAlert />, success: <CircleCheck />, info: <Info /> };
    return (
        <div className={`${styles[type]} ${styles.info}`} onClick={onClick}>
            {icons[type]}{children}
        </div>
    )
}
