export default function AgrByCategoryTooltip({ payload, label, active }: { payload?: any, label?: string, active?: boolean }) {
    if (active) {
        return (
            <div className='customChartTooltip'>
                <p>{`Genre: ${payload[0].payload?.name}`}</p>
                <p>{`${payload[0].value}min`}</p>
            </div>
        );
    }

    return null;
}
