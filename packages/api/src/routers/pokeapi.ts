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

      return await pokeapi.pokemon.listPokemons(offset, limit).then(
        async (data) =>
          await Promise.all(
            data.results.map(async ({ name }) => {
              const pokemon = await pokeapi.pokemon.getPokemonByName(name);
              return {
                id: pokemon.id,
                name: pokemon.name,
                sprites: pokemon.sprites,
              };
            })
          ).then((pokemons) => ({ ...data, results: pokemons }))
      );
    }),
});
