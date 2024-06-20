import { InfoProps } from 'libs/types/src';
import styles from './Callout.module.css';
import { CircleCheck, CircleX, Info, TriangleAlert } from 'lucide-react';

export default function Callout({ type, children }: InfoProps) {
    const icons = { error: <CircleX />, warning: <TriangleAlert />, success: <CircleCheck />, info: <Info /> };
    return (
        <div className={`${styles[type]} ${styles.info}`}>
            {icons[type]}{children}
        </div>
    )
}
