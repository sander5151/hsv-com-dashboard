/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Cards from "~/app/Components/Dashboard/Admin/Cards";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {

    interface IEvent {
        id: number
        title: string;
        start: string;
        allDay: boolean;
        description: string;
    }

    const session = await getServerAuthSession();
    const user = await api.user.getUser.query(session?.user.id ?? "");
    const upComingEvent: IEvent[] = await api.event.getUpcomingEvent.query();

    return (
        <>
            <Cards username={user?.name} upComingEvent={upComingEvent} />
        </>
    );
}

