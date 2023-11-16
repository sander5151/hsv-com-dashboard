"use client";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { type EventSourceInput } from '@fullcalendar/core/index.js'
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import AdminCalendarForm from './AdminCalendarForm';

interface Event {
    title: string;
    start: Date | string;
    allDay: boolean;
    description: string;
    id: number;
}

export default function AdminCalendarMonth({
    events,

}: {
    events: Event[]
}) {
    const [allEvents, setAllEvents] = useState<Event[]>([])
    const [showModal, setShowModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [idToDelete, setIdToDelete] = useState<number | null>(null)
    const [newEvent, setNewEvent] = useState<Event>({
        title: '',
        start: '',
        allDay: false,
        description: '',
        id: 0
    })

    useEffect(() => setAllEvents(events), [events])


    // function handleEventModal(data: { event: { id: string } }) {
    //     const clickedId: number = +data.event.id
    //     const eventClickedTotal = allEvents.find(function (event) {
    //         return event.id === clickedId
    //     })
    //     setEventTitleToShow(eventClickedTotal?.title)
    //     setEventDescriptionToShow(eventClickedTotal?.description)
    //     setShowEventModal(true)
    // }


    function handleDateClick(arg: { date: Date, allDay: boolean }) {
        setNewEvent({ ...newEvent, start: arg.date, allDay: arg.allDay, id: new Date().getTime() })
        setShowModal(true)
    }

    function handleDeleteModal(data: { event: { id: string } }) {
        setShowDeleteModal(true)
        setIdToDelete(Number(data.event.id))
    }

    function handleDelete() {
        setAllEvents(allEvents.filter(event => Number(event.id) !== Number(idToDelete)))
        setShowDeleteModal(false)
        setIdToDelete(null)
    }

    function handleCloseModal() {
        setShowModal(false)
        setNewEvent({
            title: '',
            start: '',
            allDay: false,
            description: '',
            id: 0
        })
        setShowDeleteModal(false)
        setIdToDelete(null)
    }

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     setNewEvent({
    //         ...newEvent,
    //         title: e.target.value,
    //         description: e.target.value
    //     })
    // }

    // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault()
    //     setAllEvents([...allEvents, newEvent])
    //     setShowModal(false)
    //     setNewEvent({
    //         title: '',
    //         start: '',
    //         allDay: false,
    //         description: '',
    //         id: 0
    //     })
    // }


    return (
        <div className="p-8 ml-64 w-auto h-screen">
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
                editable={true}
                selectable={true}
                selectMirror={true}
                dateClick={handleDateClick}
                eventClick={(data) => handleDeleteModal(data)}
            />
            {/* DELETE MODAL */}
            <Transition.Root show={showDeleteModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setShowDeleteModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"

                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
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
                          justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Delete Event
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Are you sure you want to delete this event?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm 
                          font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={handleDelete}>
                                            Delete
                                        </button>
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

            {/* CREATE MODAL */}
            <Transition.Root show={showModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setShowModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Add Event
                                            </Dialog.Title>
                                            <AdminCalendarForm ></AdminCalendarForm>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}