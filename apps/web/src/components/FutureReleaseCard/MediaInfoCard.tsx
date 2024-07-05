import Image from 'next/image';
import styles from './FutureReleaseCard.module.css';
import React from 'react';
import { MediaType } from 'libs/types/src';
import Link from 'next/link';
import Card from '../Card/Card';

export default function MediaInfoCard({ id, title, poster, year, children, mediaType }: { id: number, title: string, poster: string, year: Date | string, children?: React.ReactNode, mediaType: MediaType }) {

  return (
    <Card padding={false} className={styles.card}>
      <Link href={`/${mediaType}/${id}`}>
        <Image
          src={poster}
          alt={title}
          width={250}
          height={375}
          className={styles.poster} />
        <div className={styles.details}>
          <p className={styles.title}>{title}</p>
          <p className={styles.date}>{new Date(year).toLocaleDateString(undefined, { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
        </div>
      </Link>
    </Card>
  );
}
