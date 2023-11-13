"use client";

export default function CalendarMonth({
    month,

}: {
    month: string | null | undefined;

}) {

    return (
        <div className="ml-72 mt-4">
            <h1 className="text-2xl mb-4">{month}</h1>
            <div className="flex w-auto mr-4 h-auto">
                <div className="grid grid-cols-7 w-full h-full">
                    <div className="border grid grid-cols-2 gap-y-1">
                        <div className="col-span-1 font-semibold ml-2">Maandag</div>
                        <div className="col-span-1  mx-2 font-semibold"><p className="text-end">00</p></div>
                        <div className="border-b col-span-2"></div>
                        <div className="col-span-2 bg-blue-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                    </div>
                    <div className="border grid grid-cols-2 gap-y-1">
                        <div className="col-span-1 font-semibold ml-2">Dinsdag</div>
                        <div className="col-span-1  mx-2 font-semibold"><p className="text-end">00</p></div>
                        <div className="border-b col-span-2"></div>
                        <div className="col-span-2 bg-blue-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                    </div>
                    <div className="border grid grid-cols-2 gap-y-1">
                        <div className="col-span-1 font-semibold ml-2">Woensdag</div>
                        <div className="col-span-1  mx-2 font-semibold"><p className="text-end">00</p></div>
                        <div className="border-b col-span-2"></div>
                        <div className="col-span-2 bg-blue-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                    </div>
                    <div className="border grid grid-cols-2 gap-y-1">
                        <div className="col-span-1 font-semibold ml-2">Donderdag</div>
                        <div className="col-span-1  mx-2 font-semibold"><p className="text-end">00</p></div>
                        <div className="border-b col-span-2"></div>
                        <div className="col-span-2 bg-blue-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                    </div>
                    <div className="border grid grid-cols-2 gap-y-1">
                        <div className="col-span-1 font-semibold ml-2">Vrijdag</div>
                        <div className="col-span-1  mx-2 font-semibold"><p className="text-end">00</p></div>
                        <div className="border-b col-span-2"></div>
                        <div className="col-span-2 bg-blue-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                    </div>
                    <div className="border grid grid-cols-2 gap-y-1">
                        <div className="col-span-1 font-semibold ml-2">Zaterdag</div>
                        <div className="col-span-1  mx-2 font-semibold"><p className="text-end">00</p></div>
                        <div className="border-b col-span-2"></div>
                        <div className="col-span-2 bg-blue-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                    </div>
                    <div className="border grid grid-cols-2 gap-y-1">
                        <div className="col-span-1 font-semibold ml-2">Zondag</div>
                        <div className="col-span-1  mx-2 font-semibold"><p className="text-end">00</p></div>
                        <div className="border-b col-span-2"></div>
                        <div className="col-span-2 bg-blue-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                        <div className="col-span-2 bg-green-500 rounded-xl mx-2 p-1 text-white "><p className="text-center">Afspraak-2</p></div>
                    </div>

                </div>

            </div>
        </div >
    )

}

