"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserProfile({
    image,
    name,
    email,
    sessionUser,
    searchedUser,

}: {
    image: string | null | undefined;
    name: string | null | undefined;
    email: string | null | undefined;
    sessionUser: string | null | undefined;
    searchedUser: string | null | undefined;
}) {

    const [isUser, setIsUser] = useState("False")

    useEffect(() => {
        if (sessionUser === searchedUser) {
            setIsUser("True")
            return;
        }
        else {
            setIsUser("False")
            return;
        }
    })


    return (
        <div className="w-full h-screen bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center pb-10 pt-4">
                <div className="relative h-24 w-24 sm:h-52 sm:w-52">
                    <Image className="rounded-full ring-2 ring-orange-600" src={image ?? ""} fill alt="profile image" />
                </div>
                <h5 className="mb-1 text-xl font-medium text-gray-900 mt-4">{name}</h5>
                <span className="text-sm text-gray-500">{email}</span>

                {isUser !== "True" ? (
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300">Add friend</a>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ms-3">Message</a>
                    </div>
                ) : (
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 sm:px-16 sm:py-4 sm:rounded-full">Edit</a>
                    </div>
                )}
            </div>
        </div>

    )
}

