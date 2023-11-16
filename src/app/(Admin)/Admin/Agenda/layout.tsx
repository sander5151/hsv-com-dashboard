import "~/styles/globals.css";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "~/app/Components/Dashboard/Admin/AdminComponents";
import { api } from "~/trpc/server";


export default async function adminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerAuthSession();
    const user = await api.user.getUser.query(session?.user.id ?? "");
    const userRole = await api.user.getUserRole.query(user?.roleId ?? "");
    { !session ? redirect('/') : "" }
    { userRole?.name !== "Admin" ? redirect('/Dashboard') : "" }


    return (
        <body>
            <Sidebar />
            <TRPCReactProvider headers={headers()}>
                {children}
            </TRPCReactProvider>
        </body>
    );
}
