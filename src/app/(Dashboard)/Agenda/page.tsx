import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Calendar } from "~/app/Components/Dashboard/Agenda/AgendaComponents";
import moment from "moment";

export default async function Home() {
    // const hello = await api.post.hello.query({ text: "from tRPC" });
    const session = await getServerAuthSession();
    const UserId = session?.user.id
    const user = await api.user.getUser.query(UserId!);
    const currentMonth = moment().format('MMMM');

    return (
        <>
            <Calendar />
        </>
    );
}

