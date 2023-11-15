import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";



export const userRouter = createTRPCRouter({
    getUser: protectedProcedure
        .input(z.string())
        .query(async ({ ctx, input }) => {
            const user = await ctx.db.user.findUnique({
                where: {
                    id: input
                }
            })
            return user
        }),
    getUserRole: protectedProcedure
        .input(z.string())
        .query(async ({ ctx, input }) => {
            const role = await ctx.db.role.findUnique({
                where: {
                    id: input
                }
            })
            return role
        }),
});
