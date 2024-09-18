'use client'
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import MediaCard from "@/components/MediaCard/MediaCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { getVGameByName } from "@/utils/fetch/igdb";
import { MediaType } from '@anytrack/types';
import { Cover, Game } from "igdb-api-types";
import Link from "next/link";
import { useState } from "react";

function SearchGame() {
    const [games, setGames] = useState<Game[]>([]);
    async function fetchData(query: string) {
        try {
            if (!query) {
                return;
            }
            const response = await getVGameByName(query)
            const body = await response.json();
            console.log(body)
            if (await body) {
                setGames(await body);
            }

        } catch (error: any) {
            toast({ title: 'Failed to fetch movies', description: error?.message, variant: "destructive" })
        }
    }
    return (
        <>
            <div className="flex items-center justify-center mt-4">
                <SearchBar fetchData={(query: string) => fetchData(query)} />
            </div>
            <div className="p-8 grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-[1fr] gap-6 overflow-hidden">
                {games && games.length > 0 && games.map((game) => {
                    if (!game.name || !game.id) return null;
                    return (
                        <MediaCard key={game.id} id={game.id} title={game.name} poster={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${(game.cover as Cover)?.image_id}.jpg` || ''} year={String(game.first_release_date && new Date(game.first_release_date * 1000).toLocaleDateString())} mediaType={MediaType.vgame}>
                            <Link href={`/game/search/${game.id}`}>
                                <Button>Mark</Button>
                            </Link>
                        </MediaCard>
                    );
                })}
            </div>
        </>
    );
}


export default withProtectedRoute(SearchGame);