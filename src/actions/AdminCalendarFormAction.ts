/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { api } from "~/trpc/server"

export const addEvent = async (FormData: FormData) => {
    const eventTitle = FormData.get('eventTitle')
    const eventDescription = FormData.get('eventDescription')
    const eventStart = "2023-11-15T14:48:00.000Z"

    // const event = await prisma.event.create({
    //     data: {
    //         start: eventStart as string, title: eventTitle as string, description: eventDescription as string, allDay: false
    //     }
    // })

    const event = await api.event.createEvent.mutate({
        start: eventStart as string, title: eventTitle as string, description: eventDescription as string, allDay: false
    })

    revalidatePath('/Admin/Agenda')
}