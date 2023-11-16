import "~/styles/globals.css";
import { headers } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import { Sidebar } from "~/Components/Dashboard/Admin/AdminComponents";


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <section>
            <Sidebar />
            <TRPCReactProvider headers={headers()}>
                {children}
            </TRPCReactProvider>
        </section>
    );
}
