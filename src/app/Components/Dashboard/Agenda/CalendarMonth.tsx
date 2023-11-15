"use client";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import { type EventSourceInput } from '@fullcalendar/core/index.js'

interface Event {
    title: string;
    start: Date | string;
    allDay: boolean;
    description: string;
    id: number;
}

export default function CalendarMonth({
    events,

}: {
    events: Event[]
}) {
    const [allEvents, setAllEvents] = useState<Event[]>([])
    const [showEventModal, setShowEventModal] = useState(false)

    const [eventTitleToShow, setEventTitleToShow] = useState<string>()
    const [eventDescriptionToShow, setEventDescriptionToShow] = useState<string>()

    useEffect(() => setAllEvents(events), [events])


    function handleEventModal(data: { event: { id: string } }) {
        const clickedId: number = +data.event.id
        const eventClickedTotal = allEvents.find(function (event) {
            return event.id === clickedId
        })
        setEventTitleToShow(eventClickedTotal?.title)
        setEventDescriptionToShow(eventClickedTotal?.description)
        setShowEventModal(true)
    }


    function handleCloseModal() {
        setShowEventModal(false)
    }

    return (
        <>
            <main className="items-center p-8">
                <div className="w-auto h-screen">
                    <FullCalendar
                        plugins={[
                            dayGridPlugin,
                            interactionPlugin,
                            timeGridPlugin
                        ]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'resourceTimelineWook, dayGridMonth,timeGridWeek'
                        }}
                        events={allEvents as EventSourceInput}
                        nowIndicator={true}
                        selectMirror={true}
                        eventClick={(data) => handleEventModal(data)}
                    />
                </div>

                <Transition.Root show={showEventModal} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setShowEventModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"

                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg
                     bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                                    >
                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center 
                        justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <InformationCircleIcon className="h-6 w-6 text-orange-600" aria-hidden="true" />
                                                </div>
                                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                        {eventTitleToShow}
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <p className='text-sm'>Beschrijving</p>
                                                        <p className="text-sm text-gray-500">
                                                            {eventDescriptionToShow}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 
                        shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={handleCloseModal}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

            </main >
        </>
    )
}