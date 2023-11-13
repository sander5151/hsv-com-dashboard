/* eslint-disable @next/next/no-img-element */
"use client";

import CalendarMonth from "./CalendarMonth";
import SidebarCalendar from "./CalendarSidebar";

export default function Calendar({
    month,

}: {
    month: string | null | undefined;

}) {

    return (
        <div className="relative w-full h-screen bg-white border border-gray-200 rounded-lg shadow ">
            <SidebarCalendar month={month} />
            <CalendarMonth month={month} />

        </div>
    )
}

