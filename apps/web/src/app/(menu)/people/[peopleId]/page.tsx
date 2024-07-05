'use client'

import { getOnePeople } from "@/utils/fetch/tmdb"
import { useEffect, useRef, useState } from "react"
import styles from './people.module.css';
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { ArrowDown } from "lucide-react";
import Tabs from "@/components/Tabs/Tabs";
import MediaCard from "@/components/MediaCard/MediaCard";
import Card from "@/components/Card/Card";

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
      {Object.keys(people).length > 0 && (
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
                <div id="Personal" className={styles.personalInfo}>
                  <p><strong>Known For:</strong> {people.known_for_department}</p>
                  <p><strong>Gender:</strong> {people.gender === 1 ? 'Female' : people.gender === 2 ? 'Male' : people.gender === 3 ? 'Non-binary' : 'Not specified'}</p>
                  <p><strong>Place of birth:</strong> {people.place_of_birth}</p>
                </div>
                <div id="Known" className='detailsContainer horizontalList'>
                  {people.combined_credits && (
                    people.combined_credits.cast.map((media: any) => (
                      <Card key={media.id + media.credit_id} padding={false} className={styles.knownFor}>
                        <Image
                          src={media.poster_path}
                          alt={media.original_title || media.original_name}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '12dvh', height: 'auto', borderRadius: '5px' }} />
                        <div className='centerThings'>
                          <p>{media.original_title}</p>
                          <p>{media.character}</p>
                        </div>
                      </Card>
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
