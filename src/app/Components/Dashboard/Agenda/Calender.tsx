"use client";

import CalendarMonth from "./CalendarMonth";


export default function Calendar() {


    return (
        <div className="relative w-full h-screen bg-white border border-gray-200 rounded-lg shadow ">
            <CalendarMonth />
        </div>
    )
}

