import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Calendar } from "~/Components/Dashboard/Agenda/AgendaComponents";

export default async function Home() {
    // const hello = await api.post.hello.query({ text: "from tRPC" });
    const session = await getServerAuthSession();
    const events = await api.event.getEvents.query();


    return (
        <>
            <Calendar events={events} />
        </>
    );
}

