import Image from "next/image"
import Chip from "./Chip/Chip"
import distinctColors from "distinct-colors"
import { MediaType, tag } from "@anytrack/type"
import { Card } from "./ui/card"

export function MediaInfoContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-x-12 ml-24 mt-8">
      {children}
    </div>
  )
}

export function MediaInfoImage({ path, alt }: { path: string, alt: string }) {
  return (
    <div className="flex gap-x-12 ml-24 mt-8">
      <div className="w-[11dvw]">
        <Image
          src={path}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          objectFit="cover"
          className="w-[11dvw] h-auto rounded-lg"
        />
      </div>
    </div>
  )
}


export function MediaInfoData({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex flex-col items-start w-[50dvw]'>
      {children}
    </div>
  )
}

export function MediaInfoTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-bold">{children}</h1>
  )
}

export function MediaInfoTags({ tags }: { tags: tag[] }) {
  const colors = distinctColors({ count: tags.length, chromaMin: 50, lightMin: 30, lightMax: 70, quality: 50 });
  return (
    <p className='text-l flex my-4'>{tags.map((tag: { id: number, name: string }, index: number) => (
      <Chip key={tag.id} bgColor={colors[index].hex()}>{tag.name}</Chip>
    ))}
    </p>
  )
}

export function Overview({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-4">{children}</p>
  )
}

export function MediaCardVertical({ children, id, mediaType, cover, name }: { children?: React.ReactNode, id: number, mediaType: MediaType, cover?: string | undefined, name: string }) {
  return (
    <Card key={id} className="h-[23dvh] w-[8dvw]">
      {cover && (
        <Image
          src={cover}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[8dvw] h-[16dvh]"
        />)}
      <div className="p-2">
        {children}
      </div>
    </Card>
  )
}


export function MediaCardHorizontal({ children, id, mediaType, cover, name }: { children?: React.ReactNode, id: number, mediaType: MediaType, cover?: string | undefined, name: string }) {
  return (
    <Card key={id} className="h-[23dvh] w-full">
      {cover && (
        <Image
          src={cover}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg h-[16dvh] w-[20dvw]"
          style={{ objectFit: 'cover' }}
        />)}
      <div className="p-2 h-[5dvh]">
        {children}
      </div>
    </Card>
  )
}
