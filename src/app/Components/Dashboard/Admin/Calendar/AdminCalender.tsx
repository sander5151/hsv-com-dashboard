"use client";

import AdminCalendarMonth from "./AdminCalendarMonth";

interface Event {
    title: string;
    start: Date | string;
    allDay: boolean;
    description: string;
    id: number;
}

export default function Calendar({
    events,

}: {
    events: Event[]
}) {
    return (
        <div className="relative w-full h-screen bg-white border border-gray-200 rounded-lg shadow ">
            <AdminCalendarMonth events={events} />
        </div>
    )
}

