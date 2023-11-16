import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { redirect } from 'next/navigation'
import { DashboardHero } from "~/Components/Dashboard/DashboardComponents";

export default async function Home() {
    // const hello = await api.post.hello.query({ text: "from tRPC" });
    const session = await getServerAuthSession();
    const UserId = session?.user.id
    const user = await api.user.getUser.query(UserId!);

    return (
        <>
            <DashboardHero name={session?.user.name} />
        </>
    );
}

