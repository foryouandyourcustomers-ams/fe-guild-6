import { z } from "zod";
import { trpc } from "../trpc";
export const appRouter = trpc.router({
  greet: trpc.procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      if (Math.random() > 0.5) {
        throw new Error("Something went very wrong!");
      }
      return {
        greeting: `Hello, ${input.text}!`,
      };
    }),
});
export type AppRouter = typeof appRouter;
