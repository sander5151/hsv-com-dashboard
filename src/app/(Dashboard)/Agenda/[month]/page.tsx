
import { Calendar } from "~/app/Components/Dashboard/Agenda/AgendaComponents";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home({ params }: { params: { month: string } }) {
    // const hello = await api.post.hello.query({ text: "from tRPC" });
    const session = await getServerAuthSession();

    return (
        <>
            <Calendar month={params.month} />
        </>
    );
}
