import { getServerAuthSession } from "~/server/auth";
import AdminCalender from "~/app/Components/Dashboard/Admin/Calendar/AdminCalender";
import { api } from "~/trpc/server";

export default async function Home() {
    const session = await getServerAuthSession();
    const events = await api.event.getEvents.query();
    // const event = await api.event.createEvent.mutate({
    //     title: "Test 15", start: "2023-11-19T14:48:00.000Z", allDay: false, description: "Test 15",
    // })
    return (
        <>
            <AdminCalender events={events} />
        </>
    );
}

