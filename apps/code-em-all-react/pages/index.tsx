import { trpc } from '~/utils/trpc';

const IndexPage = () => {
  const { data, error, isLoading } = trpc.pokeapi.listPokemons.useQuery({
    limit: 10,
    offset: 0,
  });
  const { results = [] } = data ?? {};

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
      <ul>
        {results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
