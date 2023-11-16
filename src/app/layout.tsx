import "~/styles/globals.css";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { getServerAuthSession } from "~/server/auth";

export const metadata = {
  title: "HSV Commissie Dashboard",
  description: "Het HSV Commissie Dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

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
