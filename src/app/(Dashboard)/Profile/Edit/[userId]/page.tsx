import UserProfile from "~/app/Components/Dashboard/Profile/UserProfile";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Edit({ params }: { params: { userId: string } }) {
    // const hello = await api.post.hello.query({ text: "from tRPC" });
    const session = await getServerAuthSession();
    const user = await api.user.getUser.query(params.userId);

    return (
        <>
            <div className="flex justify-center items-center mt-4 -z-10">
                <UserProfile image={user?.image} name={user?.name} email={user?.email} sessionUser={session?.user.id} searchedUser={user?.id} />
            </div>
        </>
    );
}
