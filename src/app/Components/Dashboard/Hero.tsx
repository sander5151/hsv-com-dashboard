/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";

const links = [
    { name: 'Commissies', href: '#' },
    { name: 'Agenda', href: '#' },
]

export default function Hero({
    name
}: {
    name: string | null | undefined;
}) {
    return (
        <div className="relative isolate overflow-hidden bg-orange-900 py-24 sm:py-32 h-screen">
            <Image src="/Zernike-scaled.jpg" alt="" className="absolute inset-0 -z-10 object-cover object-right md:object-center scale-110 blur grayscale" fill />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welkom op het HSV Commissie Dashboard, <br /> {name} </h2>
                    <p className="mt-6 text-lg leading-8 text-white">
                        Het HSV Commissiedashboard biedt een overzichtelijke weergave van commissiezaken en toekomstige activiteiten, waardoor leden gemakkelijk de voortgang kunnen volgen en plannen kunnen maken.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <a key={link.name} href={link.href}>
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

