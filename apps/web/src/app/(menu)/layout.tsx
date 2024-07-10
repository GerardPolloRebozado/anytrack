import DropDownMenu from '@/components/DropdownMenu/DropDownMenu';
import GoBack from '@/components/GoBack/GoBack';
import { Clapperboard, Tv } from 'lucide-react';
import Link from 'next/link';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='grid grid-cols-[1fr_6fr] grid-rows-[1fr] gap-x-10 gap-y-0 h-full'>
      <div className='bg-primary-foreground flex flex-col items-center pt-16 h-full'>
        <h1 className='text-5xl font-bold pb-16'>AnyTrack</h1>
        <Link href="/dashboard" className='w-[70%] flex flex-row items-center justify-center m-2 p-2 hover:bg-accent rounded-lg'>Dashboard</Link>
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
        <Link href="/settings" className='w-[70%] flex flex-row items-center justify-center m-2 p-2 hover:bg-accent rounded-lg'>Settings</Link>
      </div>
      <div className='h-full pr-3'>
        <GoBack />
        {children}
      </div>
    </div>
  );
}
