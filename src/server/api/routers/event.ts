/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { randomInt } from "crypto";
import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

interface IEvent {
    id: number
    title: string;
    start: string;
    allDay: boolean;
    description: string;
}

export const eventRouter = createTRPCRouter({
    getEvents: publicProcedure
        .query(async ({ ctx }) => {
            const events = await ctx.db.event.findMany()
            return events
        }),
    getUpcomingEvent: publicProcedure
        .query(async ({ ctx }) => {
            const currentDate = new Date().toISOString();
            console.log("Current date:", currentDate);

            const event: IEvent[] = await ctx.db.event.findMany({
                where: {
                    start: { gte: currentDate }, // Haal evenementen op vanaf de huidige datum
                },
                orderBy: { start: 'asc' },
                take: 1,
            });

            console.log("Upcoming event:", event);

            return event;
        }),
    createEvent: protectedProcedure
        .input(z.object({ title: z.string(), start: z.string(), allDay: z.boolean(), description: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.event.create({
                data: {
                    title: input.title,
                    start: input.start,
                    allDay: false,
                    description: input.description,
                }
            })
        })
})
