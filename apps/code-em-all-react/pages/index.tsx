import { PokemonImage } from '~/components/PokemonImage';
import { trpc } from '~/utils/trpc';

const IndexPage = () => {
  const { data, error, isLoading } = trpc.pokeapi.listPokemons.useQuery({
    limit: 10,
    offset: 0,
  });

  const pokemons = data?.results ?? [];

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error?.message) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      <ul className="flex list-none flex-row flex-wrap gap-4">
        {pokemons.map((pokemon) => (
          <li
            key={pokemon.id}
            className="flex flex-col items-center justify-center gap-2 p-2"
          >
            <PokemonImage
              url={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <span>{pokemon.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
