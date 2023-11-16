"use client";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { type EventSourceInput } from '@fullcalendar/core/index.js'
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import AdminCalendarForm from './AdminCalendarForm';
import AdminCalendarUpdateForm from "./AdminCalendarUpdateForm"
import { deleteEvent } from '~/actions/AdminCalendarFormAction';

interface Event {
    title: string;
    start: Date | string;
    allDay: boolean;
    description: string;
    id: number;
    time: string;
}

export default function AdminCalendarMonth({
    events,

}: {
    events: Event[]
}) {

    const [allEvents, setAllEvents] = useState<Event[]>([])
    const [showModal, setShowModal] = useState(false)
    const [showCRUDModal, setShowCRUDModal] = useState(false)
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [idToDelete, setIdToDelete] = useState<number | null>(null)
    const [newEvent, setNewEvent] = useState<Event>({
        title: '',
        start: '',
        allDay: false,
        description: '',
        id: 0,
        time: ''
    })

    const [eventTitleToShow, setEventTitleToShow] = useState<string>()
    const [eventDescriptionToShow, setEventDescriptionToShow] = useState<string>()
    const [eventStartToShow, setEventStartToShow] = useState<string>()
    const [eventTime, setEventTime] = useState<string>()
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

    function handleCRUDModal(data: { event: { id: string } }) {
        const clickedId: number = +data.event.id
        const eventClickedTotal = allEvents.find(function (event) {
            return event.id === clickedId
        })
        setEventTitleToShow(eventClickedTotal?.title)
        setEventDescriptionToShow(eventClickedTotal?.description)
        setEventStartToShow(eventClickedTotal?.start)
        setEventTime(eventClickedTotal?.time)
        setShowCRUDModal(true)
        setIdToDelete(Number(data.event.id))
    }

    function handleUpdateModal() {

        setShowCRUDModal(false)
        setShowUpdateModal(true)
    }


    async function sendId() {
        await deleteEvent(idToDelete)
    }

    function handleCloseModal() {
        setShowModal(false)
        setNewEvent({
            title: '',
            start: '',
            allDay: false,
            description: '',
            id: 0,
            time: ''
        })
        setShowCRUDModal(false)
        setIdToDelete(null)
    }

    return (
        <div className="p-4 w-10/12 h-screen bg-white">
            <FullCalendar
                plugins={[
                    dayGridPlugin,
                    interactionPlugin,
                    timeGridPlugin
                ]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek'
                }}
                events={allEvents as EventSourceInput}
                nowIndicator={true}
                selectable={true}
                selectMirror={true}
                dateClick={handleDateClick}
                eventClick={(data) => handleCRUDModal(data)}
            />
            {/* CRUD MODAL */}
            <Transition.Root show={showCRUDModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setShowCRUDModal}>
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
                                                    {eventTitleToShow}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-400">
                                                        {eventDescriptionToShow}<br />
                                                        Wat wil je doen met dit evenement?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm 
                          font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={() => sendId()} >
                                            Verwijderen
                                        </button>
                                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm 
                          font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto" onClick={() => handleUpdateModal()}>
                                            Bewerken
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

            {/* EDIT MODAL */}
            <Transition.Root show={showUpdateModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setShowUpdateModal}>
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
                                                Bewerken
                                            </Dialog.Title>
                                            <AdminCalendarUpdateForm eventTitle={eventTitleToShow} eventDescription={eventDescriptionToShow} eventStart={eventStartToShow} idToDelete={idToDelete} eventTime={eventTime} />
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div >
    )
}