'use client'
import Image from 'next/image';
import styles from './MediaCard.module.css';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MediaType } from 'libs/types/src';

export default function MediaCard({ id, title, poster, year, children, mediaType }: { id: string, title: string, poster: string, year: string, children?: React.ReactNode, mediaType: MediaType }) {
  const router = useRouter();

  const handleClick = async (e: any) => {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT') {
      router.push(`/${mediaType}/${id}`);
    }
  }
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.posterContainer}>
        <Image
          src={poster}
          alt={title}
          width={300}
          height={450}
          className={styles.poster} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.year}>{new Date(year).toLocaleDateString(undefined, { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
        <div className={styles.actions}>
          {children}
        </div>
      </div>
    </div>
  );
}
