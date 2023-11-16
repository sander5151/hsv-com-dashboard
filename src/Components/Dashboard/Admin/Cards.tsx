/* eslint-disable react/jsx-no-undef */
"use client";

import { CalendarDaysIcon, TicketIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface Event {
    title: string;
    start: Date | string;
    allDay: boolean;
    description: string;
    id: number;
}

export default function Cards({
    username,
    upComingEvent
}: {
    username: string | null | undefined;
    upComingEvent: Event[]
}) {
    const [event, setEvent] = useState<Event[]>([])
    const [eventTitle, setEventTitle] = useState<string[]>()

    useEffect(() => setEvent(upComingEvent), [upComingEvent])
    useEffect(() => {
        const upComingEventTitle = event.map(({ title }) => title);
        setEventTitle(upComingEventTitle)
    })


    return (
        <>
            <div className="ml-64 mr-2 mt-8">
                <h1 className="font-bold text-2xl text-orange-600 ml-4 my-8" >Hey {username}</h1>
                <div className="grid grid-cols-2 gap-4 mx-2 h-full">
                    <a href="Admin/Agenda">
                        <div className="border rounded-xl shadow-lg h-72 hover:shadow-xl bg-white hover:bg-orange-50">
                            <div className=""><h1 className="text-lg m-4 font-semibold text-orange-600 underline ">Evenementen</h1></div>
                            <div className="flex justify-center items-center"><CalendarDaysIcon className="h-40 w-40 text-gray-500" /></div>
                            <div className=""><h1 className="text-sm m-4 text-gray-400 hover:underline">Volgende activiteit: {eventTitle}</h1></div>
                        </div>
                    </a>
                    <div className="border rounded-xl shadow-lg h-72 hover:shadow-xl bg-white hover:bg-orange-50">
                        <h1 className="text-lg m-4 font-semibold text-orange-600 underline">Takenlijst</h1>
                    </div>
                    <div className="border rounded-xl shadow-lg h-72 hover:shadow-xl bg-white hover:bg-orange-50">
                        <h1 className="text-lg m-4 font-semibold text-orange-600 underline">Gebruikers</h1>
                    </div>
                    <div className="border rounded-xl shadow-lg h-72 hover:shadow-xl bg-white hover:bg-orange-50">
                        <h1 className="text-lg m-4 font-semibold text-orange-600 underline">Notificaties</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

