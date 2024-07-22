import Image from 'next/image';

export default function MediaScore({ score, source }: { score: number, source?: string }) {
  return (
    <div className="flex justify-center items-center">
      <span className={`${score >= 7 ? 'text-green-500' : score >= 5 ? 'text-yellow-500' : 'text-red-500'} font-bold`}
      >{score.toFixed(1)}</span>
      {source === 'tmdb' && <Image src={'/icons/tmdb.png'} alt="tmdb logo" width={0} height={0} sizes="100vw" style={{ width: '2dvw', height: 'auto' }} className='m-4'/>}
    </div>
  );
}
