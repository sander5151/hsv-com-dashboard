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
        <div className="ml-64 relative w-full h-screen bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
            <AdminCalendarMonth events={events} />
        </div>
    )
}

