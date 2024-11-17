import Image from 'next/image';
import Chip from './Chip/Chip';
import distinctColors from 'distinct-colors';
import { tag } from '@anytrack/types';
import { Card } from './ui/card';

export function MediaInfoContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex gap-x-12 ml-24 mt-8">{children}</div>;
}

export function MediaInfoImage({ path, alt }: { path: string; alt: string }) {
  return (
    <div className="flex gap-x-12 ml-24 mt-8">
      <div className="w-[11dvw]">
        <Image
          src={path}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[11dvw] h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export function MediaInfoData({ children }: { children?: React.ReactNode }) {
  return <div className="flex flex-col items-start w-[50dvw]">{children}</div>;
}

export function MediaInfoTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl font-bold">{children}</h1>;
}

export function MediaInfoTags({ tags }: { tags: tag[] }) {
  const colors = distinctColors({
    count: tags.length,
    chromaMin: 50,
    lightMin: 30,
    lightMax: 70,
    quality: 50,
  });
  return (
    <p className="text-l flex my-4">
      {tags.map((tag: { id: number; name: string }, index: number) => (
        <Chip key={tag.id} bgColor={colors[index].hex()}>
          {tag.name}
        </Chip>
      ))}
    </p>
  );
}

export function Overview({ children }: { children: React.ReactNode }) {
  return <p className="my-4">{children}</p>;
}

export function MediaInfoCard({
  children,
  cover,
  name,
}: {
  children?: React.ReactNode;
  cover?: string | undefined;
  name: string;
}) {
  return (
    <Card>
      {cover && (
        <div className="relative aspect-[3/1] rounded-lg overflow-hidden">
          <Image src={cover} alt={name} fill className="object-contain" />
        </div>
      )}
      <div className="p-2">{children}</div>
    </Card>
  );
}
