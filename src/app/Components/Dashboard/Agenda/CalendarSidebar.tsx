"use client";

export default function SidebarCalendar({
    month,
}: {
    month: string | null | undefined;
}) {
    const months = [
        "Januari",
        "Februari",
        "Maart",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Augustus",
        "September",
        "Oktober",
        "November",
        "December",
    ];

    return (
        <div>
            <aside
                id="default-sidebar"
                className="fixed top-25 left-0 z-40 w-64 h-screen transition-transform translate-x-0 border-r-2"
                aria-label="Sidebar"
            >
                <div className="px-3 py-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 font-medium">
                        {months.map((monthName, index) => (
                            <li key={index}>
                                <a
                                    href={`/Agenda/${monthName}`}
                                    className={`flex items-center p-2 ${month === monthName
                                        ? "text-white rounded-lg bg-orange-600 hover:bg-orange-600 group"
                                        : "text-gray-900 rounded-lg  hover:bg-orange-700 hover:text-white group"
                                        }`}
                                >
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        {monthName}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
}


