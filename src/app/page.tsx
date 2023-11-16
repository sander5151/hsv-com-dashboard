import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { redirect } from 'next/navigation'
import { PublicHeader } from "./Components/Public/PublicComponents";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <PublicHeader />
      {session ? redirect('/Dashboard') : ""}
    </>
  );
}

