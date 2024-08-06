'use client'

import { getOnePeople } from "@/utils/fetch/tmdb"
import { useEffect, useRef, useState } from "react"
import styles from './people.module.css';
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";

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
        toast({ title: 'Failed to fetch people', description: error?.message, variant: "destructive" })
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
          <div className='grid grid-cols-[repeat(6,1fr)] gap-x-12 ml-24 mt-8'>
            <div className="rounded-lg">
              <Image
                src={people.profile_path}
                alt={people.name}
                width={0}
                height={0}
                sizes="100vw"
                objectFit="cover"
                className="w-[11dvw] h-auto rounded-lg max-w-[11dvw]" />
            </div>
            <div className="flex flex-col items-start w-[50dvw]">
              <div className="my-4">
                <p className='text-3xl'>{people.name}</p>
                <p className='my-2'>{people.birthday}</p>
                <div className='flex'>
                  <p className={styles.biography} ref={biographyRef}>
                    {people.biography}
                  </p>
                  <Button onClick={showMore}><ArrowDown size={32} /></Button>
                </div>
              </div>
              <Tabs defaultValue="personal">
                <TabsList>
                  <Button value="personal">Personal</Button>
                  <Button value="known">Known</Button>
                </TabsList>
                <TabsContent value="personal">
                  <p><strong>Known For:</strong> {people.known_for_department}</p>
                  <p><strong>Gender:</strong> {people.gender === 1 ? 'Female' : people.gender === 2 ? 'Male' : people.gender === 3 ? 'Non-binary' : 'Not specified'}</p>
                  <p><strong>Place of birth:</strong> {people.place_of_birth}</p>
                </TabsContent>
                <TabsContent value="known">
                  <Carousel id="Known">
                    <CarouselContent>
                      {people.combined_credits && (
                        people.combined_credits.cast.map((media: any) => (
                          <CarouselItem key={media.id + media.credit_id} className="basis-[8dvw]">
                            <Card>
                              <Image
                                src={media.poster_path}
                                alt={media.original_title || media.original_name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '8dvw', height: 'auto', borderRadius: '5px' }} />
                              <div className='flex items-center flex-col my-2'>
                                <p>{media.original_title}</p>
                                <p>{media.character}</p>
                              </div>
                            </Card>
                          </CarouselItem>
                        )))}
                      <CarouselNext />
                      <CarouselPrevious />
                    </CarouselContent>
                  </Carousel>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </>
      )}
    </>
  )
}
