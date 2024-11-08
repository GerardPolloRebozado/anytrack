'use client';

import { useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchBar({ fetchData }: { fetchData: (query: string) => void }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams?.get('query') || '';

  useEffect(() => {
    async function fetch() {
      if (query) {
        await fetchData(query);
      }
    }
    const timeout = setTimeout(() => {
      fetch();
    }, 700);
    return () => clearTimeout(timeout);
  }, [fetchData, query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;

    router.replace(`?query=${encodeURIComponent(newQuery)}`);
  };

  return (
    <div className="flex align-middle items-center w-2/4">
      <SearchIcon className="relative left-8" />
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="pl-12"
      />
    </div>
  );
}
