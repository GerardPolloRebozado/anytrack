export default function MovieRuntimeTooltip({ payload, label, active }: { payload?: any, label?: string, active?: boolean }) {
    if (active) {
        const date = new Date(label || '');
        const monthName = date.toLocaleString('default', { month: 'long' });
        return (
            <div className='customChartTooltip'>
                <p>{`Month: ${monthName}`}</p>
                <p>{`Runtime: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
}
