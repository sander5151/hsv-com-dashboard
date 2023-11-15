/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const eventRouter = createTRPCRouter({
    getEvents: publicProcedure
        .query(async ({ ctx }) => {
            const events = await ctx.db.event.findMany()
            return events
        }),
});
