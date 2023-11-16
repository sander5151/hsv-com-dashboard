'use client'

import { addEvent } from "~/actions/AdminCalendarFormAction"

const AdminCalendarForm = () => {
    return (
        <div>
            <form action={async formData => {
                await addEvent(formData)
            }}>
                <div className="mt-2">
                    <input type="text" name="eventTitle" className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                focus:ring-2 
                                focus:ring-inset focus:ring-violet-600 
                                sm:text-sm sm:leading-6" placeholder="Title" />

                    <input type="text" name="eventDescription" className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                focus:ring-2 
                                focus:ring-inset focus:ring-violet-600 
                                sm:text-sm sm:leading-6"
                        placeholder="Description" />
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:col-start-2 disabled:opacity-25"
                    >
                        Create
                    </button>
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminCalendarForm