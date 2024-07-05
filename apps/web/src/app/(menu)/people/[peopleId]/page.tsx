'use client'

import { getOnePeople } from "@/utils/fetch/tmdb"
import { useEffect, useRef, useState } from "react"
import styles from './people.module.css';
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { ArrowDown } from "lucide-react";
import Tabs from "@/components/Tabs/Tabs";
import MediaCard from "@/components/MediaCard/MediaCard";

export default function PeoplePage({ params }: { params: { peopleId: number } }) {
  const [people, setPeople] = useState<any>({})
  const biographyRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await getOnePeople(params.peopleId)
        if (!response.ok) throw new Error(JSON.stringify(await response.json()))
        const responsePeople = await response.json()
        setPeople(responsePeople)
      } catch (error: any) {
        console.log(error)
      }
    }
    fetchPeople()
  }, [params.peopleId]);

  function showMore() {
    biographyRef.current?.classList.toggle(styles.biography)
  }

  return (
    <>
      {people && (
        <>
          <div className={styles.infoContainer}>
            <div className={styles.posterContainer}>
              <Image
                src={people.profile_path}
                alt={people.name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '15dvw', height: 'auto' }} />
            </div>
            <div className="detailsContainer">
              <p className={styles.name}>{people.name}</p>
              <p className={styles.birthday}>{people.birthday}</p>
              <div className={styles.biographyContainer}>
                <p className={styles.biography} ref={biographyRef}>
                  {people.biography}
                </p>
                <PrimaryButton className={styles.viewMore} onClick={showMore}><ArrowDown size={32} /></PrimaryButton>
              </div>
              <Tabs>
                <div id="Personal info" className={styles.personalInfo}>
                  <p><strong>Known For:</strong> {people.known_for_department}</p>
                  <p><strong>Gender:</strong> {people.gender === 1 ? 'Female' : people.gender === 2 ? 'Male' : people.gender === 3 ? 'Non-binary' : 'Not specified'}</p>
                  <p><strong>Place of birth:</strong> {people.place_of_birth}</p>
                </div>
                <div id="Known for" className='detailsContainer'>
                  {people.combined_credits && (
                    people.combined_credits.cast.map((media: any) => (
                      <MediaCard
                        key={media.id}
                        id={media.id}
                        title={media.original_title}
                        poster={media.poster_path}
                        year={media.release_date}
                        mediaType={media.media_type}
                      />
                    )))}
                </div>
              </Tabs>
            </div>
          </div>
        </>
      )}
    </>
  )
}
