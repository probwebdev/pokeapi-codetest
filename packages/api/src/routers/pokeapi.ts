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

      const list = await pokeapi.pokemon.listPokemons(offset, limit);
      const pokemons = await Promise.all(
        list.results.map(async ({ name }) => {
          const pokemon = await pokeapi.pokemon.getPokemonByName(name);
          return {
            id: pokemon.id,
            name: pokemon.name,
            sprites: pokemon.sprites,
          };
        })
      );

      return { ...list, results: pokemons };
    }),
  getPokemonById: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const pokemon = await pokeapi.pokemon.getPokemonByName(input.name);
      const species = await pokeapi.pokemon.getPokemonSpeciesByName(
        pokemon.species.name
      );
      const parsedPathname = new URL(species.evolution_chain.url).pathname
        .split('/')
        .filter(Boolean);
      const evolutionId = parsedPathname[parsedPathname.length - 1];
      const evolutionChain = evolutionId
        ? await pokeapi.evolution.getEvolutionChainById(
            parseInt(evolutionId, 10)
          )
        : null;

      return {
        id: pokemon.id,
        name: pokemon.name,
        sprites: pokemon.sprites,
        abilities: pokemon.abilities,
        evolutionChain: evolutionChain?.id,
      };
    }),
});
