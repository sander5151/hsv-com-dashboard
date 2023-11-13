import "~/styles/globals.css";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { getServerAuthSession } from "~/server/auth";
import { DashboardHeader } from "~/app/Components/Dashboard/DashboardComponents"
import { redirect } from "next/navigation";


export default async function dashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerAuthSession();
    { !session ? redirect('/') : "" }

    return (

        <html lang="en">
            <body className="bg-slate-200">
                <DashboardHeader />
                <TRPCReactProvider headers={headers()}>
                    {children}
                </TRPCReactProvider>
            </body>
        </html>
    );
}
