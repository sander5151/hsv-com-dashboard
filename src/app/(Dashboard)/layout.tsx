import "~/styles/globals.css";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { getServerAuthSession } from "~/server/auth";
import { DashboardHeader } from "~/Components/Dashboard/DashboardComponents"
import { redirect } from "next/navigation";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <DashboardHeader />
            <TRPCReactProvider headers={headers()}>
                {children}
            </TRPCReactProvider>
        </section>
    );
}
