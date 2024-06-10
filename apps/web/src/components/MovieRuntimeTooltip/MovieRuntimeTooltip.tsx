import styles from './MovieRuntimeTooltip.module.css';
export default function MovieRuntimeTooltip({ payload, label, active }: { payload?: any, label?: string, active?: boolean }) {
    if (active) {
        const date = new Date(label || '');
        const monthName = date.toLocaleString('default', { month: 'long' });
        return (
            <div className={styles.tooltip}>
                <p className={styles.label}>{`Month: ${monthName}`}</p>
                <p className={styles.label}>{`Runtime: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
}
