import "~/styles/globals.css";


import { TRPCReactProvider } from "~/trpc/react";
import { getServerAuthSession } from "~/server/auth";
import { headers } from "next/dist/client/components/headers";

export const metadata = {
  title: "HSV Commissie Dashboard",
  description: "Het HSV Commissie Dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className="bg-slate-200">
        <TRPCReactProvider headers={headers()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
