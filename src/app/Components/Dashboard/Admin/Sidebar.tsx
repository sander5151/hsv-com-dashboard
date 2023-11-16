"use client";
import Image from "next/image";
import { ArrowLeftOnRectangleIcon, BellAlertIcon, ListBulletIcon, TicketIcon } from "@heroicons/react/24/outline";

export default function Hero() {
    return (
        <div className="h-screen absolute top-0 flex flex-col bg-white border shadow">
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                <div className="flex items-center justify-center h-20 shadow-md">
                    <Image height={48} width={48} src="/HSV_Logo.png" alt="" />
                </div>
                <ul className="flex flex-col py-4">
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-600 group">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                            <span className="text-sm font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-600">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <TicketIcon className="h-5 w-5 text-gray-400" /></span>
                            <span className="text-sm font-medium">Evenementen</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-600">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><ListBulletIcon className="h-5 w-5 text-gray-400" /></span>
                            <span className="text-sm font-medium">Takenlijst</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-600">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                            <span className="text-sm font-medium">Gebruikers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-600">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BellAlertIcon className="h-5 w-5 text-gray-400" /></span>
                            <span className="text-sm font-medium">Notificaties</span>
                            <span className="ml-auto mr-6 text-sm bg-orange-100 rounded-full px-3 py-px text-orange-500">5</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-orange-600">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><ArrowLeftOnRectangleIcon className="h-5 w-5 text-gray-400" /></span>
                            <span className="text-sm font-medium">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

