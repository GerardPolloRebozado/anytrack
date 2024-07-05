import styles from './layout.module.css';
import DropDownMenu from '@/components/DropdownMenu/DropDownMenu';
import GoBack from '@/components/GoBack/GoBack';
import { Clapperboard, Tv } from 'lucide-react';
import Link from 'next/link';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.parent}>
      <div className={styles.menu}>
        <Link href="/dashboard" className={styles.link}>Dashboard</Link>
        <DropDownMenu text='Movies' icon={<Clapperboard color='var(--movieColor)' />} menuKey='dropdownMovies'>
          <Link href="/movie/search">
            <p>Search Movie</p>
          </Link>
          <Link href="/movie">
            <p>My Movies</p>
          </Link>
        </DropDownMenu>
        <DropDownMenu text='Shows' icon={<Tv color='var(--showColor)' />} menuKey='dropdownShows'>
          <Link href="/show/search">
            <p>Search Show</p>
          </Link>
          <Link href="/show">
            <p>My Shows</p>
          </Link>
        </DropDownMenu>
        <Link href="/settings" className={styles.link}>Settings</Link>
      </div>
      <div className={styles.content}>
        <GoBack />
        {children}
      </div>
    </div>
  );
}
