'use client'

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchBar({ fetchData }: { fetchData: (query: string) => void }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetch() {
      await fetchData(query);
    }
    const timeout = setTimeout(() => {
      fetch();
    }, 700);
    return () => clearTimeout(timeout);
  }, [fetchData, query]);

  return (
    <div className="flex align-middle items-center w-2/4">
      <SearchIcon className="relative left-8" />
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-12"
      />
    </div>
  );
}
