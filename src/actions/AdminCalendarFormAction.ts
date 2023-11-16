/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { Router } from "next/router"
import { number } from "zod"

const prisma = new PrismaClient()

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const addEvent = async (FormData: FormData) => {
    const eventTitle = FormData.get('eventTitle')
    const eventDescription = FormData.get('eventDescription')
    const eventStart = FormData.get('eventDate')
    const eventTime = FormData.get('eventTime')?.toString()
    const event = await prisma.event.create({
        data: {
            start: eventStart as string, title: eventTitle as string, description: eventDescription as string, allDay: true, time: eventTime,
        }
    })
    revalidatePath("/Admin/Agenda")

}

export const deleteEvent = async (idToDelete: number) => {

    const event = await prisma.event.delete({
        where: {
            id: idToDelete
        }
    })
    revalidatePath("/Admin/Agenda")
}

export const updateEvent = async (FormData: FormData) => {
    const eventIdString = FormData.get('eventId')
    const eventIdInt: number = +eventIdString
    const eventTitle = FormData.get('eventTitle')
    const eventTitleGhost = FormData.get('eventTitleGhost')
    const eventDescription = FormData.get('eventDescription')
    const eventDescriptionGhost = FormData.get('eventDescriptionGhost')
    const eventStart = FormData.get('eventDate')
    const eventStartGhost = FormData.get('eventStartGhost')

    if (eventTitle === "") {
        const eventTitle = eventTitleGhost
    }
    if (eventDescription === "") {
        const eventDescription = eventDescriptionGhost
    }
    if (eventStart === "") {
        const eventStart = eventStartGhost
    }

    const event = await prisma.event.update({
        where: {
            id: eventIdInt
        },
        data: {
            start: eventStart as string, title: eventTitle as string, description: eventDescription as string, allDay: true
        }
    })
}