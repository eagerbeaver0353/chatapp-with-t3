import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const AuthRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .output(z.object({ token: z.string() }))
    .mutation(async ({ input: { email, password }, ctx }) => {
      return {
        token: "token",
      };
    }),
});
