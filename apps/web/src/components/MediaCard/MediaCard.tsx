'use client'
import React from 'react';
import Image from 'next/image';
import { MediaType } from 'libs/types/src';
import styles from './MediaCard.module.css';
import { useRouter } from 'next/navigation';
import { convertMs } from '@anytrack/utils';

export default function MediaCard({ id, title, poster, year, children, mediaType, playtime }: { id: string | number, title: string, poster?: string, year: string | undefined, children?: React.ReactNode, mediaType: MediaType, playtime?: number }) {
  const router = useRouter();
  const handleClick = async (e: any) => {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT') {
      router.push(`/${mediaType}/info/${id}`);
    }
  }
  return (
    <div onClick={handleClick} className='shadow-[rgba(0,0,0,0.5)_0px_20px_30px_-10px] transition-all duration-500 rounded-[10px] hover:shadow-[rgba(0,0,0,0.7)_5px_25px_35px_-10px] hover:scale-105 group'>
      {poster && (
        <Image
          src={poster}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full rounded-lg"
        />
      )}
      <div className='details hidden opacity-0 group-hover:flex group-hover:opacity-100 absolute bottom-0 w-full h-full p-2 bg-black bg-opacity-70 text-white z-10 rounded-b-lg transition-opacity duration-500 flex-col justify-center items-center'>
        <h2 className={styles.title}>{title}</h2>
        {year && (
          <p className={styles.year}>{year}</p>)}
        <div className={styles.actions}>
          {playtime && (<p className={styles.playtime}>{convertMs(playtime)}</p>)}
          {children}
        </div>
      </div>
    </div>
  );
}
