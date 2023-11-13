"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'

export default function CalendarMonth() {
    return (
        <div className=" mt-4 m-24">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                height="auto"
                events={[
                    { title: 'KroegCollege', date: '2023-11-13', eventBackgroundColor: '#378006' },
                    { title: 'KroegCollege 2', date: '2023-11-13', }
                ]}
            />
        </div >
    )

}

