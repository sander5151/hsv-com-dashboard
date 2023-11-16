'use client'

import { Router } from "next/router"
import { updateEvent } from "~/actions/AdminCalendarFormAction"

const AdminCalendarUpdateForm = ({
    eventTitle,
    eventDescription,
    eventStart,
    idToDelete,
    eventTime,

}: {
    eventTitle: string,
    eventDescription: string,
    eventStart: string,
    idToDelete: number,
    eventTime: string,
}) => {
    return (
        <div>
            <form action={async formData => {
                await updateEvent(formData)
            }}>
                <div className="mt-2">
                    <input type="text" name="eventId" className="invisible" value={idToDelete} />
                    <input type="text" name="eventTitle" className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                focus:ring-2 
                                focus:ring-inset focus:ring-orange-600 
                                sm:text-sm sm:leading-6"  placeholder={eventTitle} />
                    <input type="text" name="eventTitleGhost" className="invisible" value={eventTitle} />
                    <input type="text" name="eventDescription" className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                focus:ring-2 
                                focus:ring-inset focus:ring-orange-600 
                                sm:text-sm sm:leading-6"
                        placeholder={eventDescription} />
                    <input type="text" name="eventDescriptionGhost" className="invisible" value={eventDescription} />
                    <input type="date" name="eventDate" className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                focus:ring-2 
                                focus:ring-inset focus:ring-orange-600 
                                sm:text-sm sm:leading-6"
                        placeholder={eventStart} />
                    <input type="date" name="eventStartGhost" className="invisible" value={eventStart} />
                    <input type="time" name="eventTime" className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                focus:ring-2 
                                focus:ring-inset focus:ring-orange-600 
                                sm:text-sm sm:leading-6"
                        placeholder={eventTime ?? "onbekend"} />
                    <input type="date" name="eventStartGhost" className="invisible" value={eventStart} />
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:col-start-2 disabled:opacity-25"
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        onClick={() => window.location.reload()}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminCalendarUpdateForm