import { pokeapi } from '@codetest/pokeapi';
import { z } from 'zod';

import { publicProcedure, createTRPCRouter } from '../trpc';

export const pokeapiRouter = createTRPCRouter({
  listPokemons: publicProcedure
    .input(
      z.optional(
        z.object({
          limit: z.number(),
          offset: z.number(),
        })
      )
    )
    .query(async ({ input }) => {
      const { offset, limit } = input ?? {};

      return await pokeapi.pokemon.listPokemons(offset, limit);
    }),
});
