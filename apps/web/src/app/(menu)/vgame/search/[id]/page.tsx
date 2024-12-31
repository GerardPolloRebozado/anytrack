'use client'
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";
import { markVGameSchemaForm, } from "libs/joi/src";
import { markVGameType } from "libs/types/src";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { Game } from "igdb-api-types";
import { getVGameById } from "@/utils/fetch/vgame/igdb";
import { markVGame } from "@/utils/fetch/vgame/game";
import { useRouter } from "next/navigation";


function MarkGameForm({ params }: { params: { id: number } }) {
    const [vGame, setVGame] = useState<Game>();
    const router = useRouter()
    const form = useForm<markVGameType>({
        resolver: joiResolver(markVGameSchemaForm)
    })

    useEffect(() => {
        async function fetchVGame() {
            try {
                const response = await getVGameById(params.id)
                const body = await response.json()
                setVGame(body)
            } catch (error: any) {
                toast({ title: 'Failed to fetch game', description: error?.message, variant: "destructive" })
            }
        }
        fetchVGame()
    }, [params.id])

    const onSubmit = async (data: markVGameType) => {
        const response = await markVGame(params.id, data)
        if (response.status === 200) {
            toast({ title: 'Game marked successfully' })
            setTimeout(() => {
                router.push('/vgame')
            }, 1000)
        } else if (response.status === 409) {
            toast({ title: 'Game already marked', description: 'This game is already added to your pending games', variant: "destructive" })
        } else {
            toast({ title: 'Failed to mark game', description: 'Failed to mark game', variant: "destructive" })
        }
    }

    useEffect(() => {
        console.log(form.formState)
    }, [form.formState])


    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <h1 className="text-3xl font-semibold">{vGame?.name} - {vGame?.first_release_date && new Date(vGame?.first_release_date * 1000).getFullYear()}</h1>
                {typeof vGame?.cover === 'object' && vGame.cover.image_id && (
                    <Image src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${vGame.cover.image_id}.jpg`} alt={vGame?.name ?? ''} width={300} height={420} className='rounded-lg my-2' />)}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col'>
                        <FormField
                            control={form.control}
                            name='startedTime'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>When did you start playing?</FormLabel>
                                    <FormControl>
                                        <Input type="datetime-local" value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ""} onChange={(e) => field.onChange(new Date(e.target.value))} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name='finishedTime'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>When did you finished playing?</FormLabel>
                                    <FormControl>
                                        <Input type="datetime-local" value={field.value ? new Date(field.value).toISOString().slice(0, 16) : ""} onChange={(e) => field.onChange(new Date(e.target.value))} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <Button type='submit' className="mt-2">Mark</Button>
                        <Button type="button" onClick={() => onSubmit({})} className="mt-2">Add to pending games</Button>
                    </form>
                </Form>
            </div >
        </>
    )
}

export default withProtectedRoute(MarkGameForm)
