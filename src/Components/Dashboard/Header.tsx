"use client";

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    CalendarIcon,
    ChartBarIcon,
    UserIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image';
export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white border-b-2 shadow top z-10 sticky top-0">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8  " aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">HSV</span>
                        <Image src="/HSV_Logo.png" alt="" height={48} width={48} />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-20">
                    <a href="/" className="text-sm font-semibold leading-6 text-orange-600 hover:border-b hover:text-orange-400">
                        <div className='flex justify-between space-x-2'>
                            <ChartBarIcon className="h-6 w-6 text-gray-500 ml-4" /><p>Dashboard</p>
                        </div>

                    </a>
                    <a href="/Agenda" className="text-sm font-semibold leading-6 text-orange-600 hover:border-b hover:text-orange-400">
                        <div className='flex justify-between space-x-2'>
                            <CalendarIcon className="h-6 w-6 text-gray-500" /><p>Agenda</p>
                        </div>
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-orange-600 hover:border-b hover:text-orange-400">
                        <div className='flex justify-between space-x-2'>
                            <UserIcon className="h-6 w-6 text-gray-500" /><p>Profiel</p>
                        </div>
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/api/auth/signout" className="text-sm font-semibold leading-6 text-gray-900">
                        Log out <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">HSV</span>
                            <Image
                                height={32}
                                width={32}
                                src="/HSV_Logo.png"
                                alt=""
                                fill
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-1 text-gray-700 -mr-4"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Dashboard
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Agenda
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Profiel
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="/api/auth/signout"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log out
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
