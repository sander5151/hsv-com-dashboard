import "~/styles/globals.css";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import Sidebar from "~/Components/Dashboard/Admin/Sidebar";
import { api } from "~/trpc/server";


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {


    return (
        <>

            <TRPCReactProvider headers={headers()}>
                <Sidebar />
                <div>{children}</div>
            </TRPCReactProvider>
        </>
    );
}
