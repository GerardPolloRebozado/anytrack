export default function AgrByCategoryTooltip({ payload, label, active }: { payload?: any, label?: string, active?: boolean }) {
    if (active) {
      console.log(payload)
        return (
            <div className='customChartTooltip'>
                <p>{`Genre: ${payload[0].payload?.name}`}</p>
                <p>{`WatchTime: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
}
