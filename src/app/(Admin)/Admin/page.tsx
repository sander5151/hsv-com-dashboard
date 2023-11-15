/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
    const session = await getServerAuthSession();
    const user = await api.user.getUser.query(session?.user.id ?? "");
    const userRole = await api.user.getUserRole.query(user?.roleId ?? "");

    return (
        <>
            {userRole?.name}
        </>
    );
}

