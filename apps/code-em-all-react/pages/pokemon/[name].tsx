import { useRouter } from 'next/router';

import { PokemonImage } from '~/components/PokemonImage';
import { Tag } from '~/components/Tag';
import { trpc } from '~/utils/trpc';

export const PokemonDetailsPage = () => {
  const router = useRouter();
  const query = router.query.name as string;

  const { data, error, isLoading } = trpc.pokeapi.getPokemonById.useQuery({
    name: query,
  });

  const { name, sprites, abilities } = data ?? {};

  if (error?.message) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col self-start">
      {!isLoading && (
        <>
          <div className="flex flex-row flex-nowrap gap-8">
            <PokemonImage
              alt={name}
              url={sprites.front_default}
              width={256}
              height={256}
            />
            <div className="flex flex-col gap-4">
              <h1 className="capitalize">{name}</h1>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl">Abilities</h2>
                <div className="flex flex-row gap-1">
                  {abilities.map(({ ability, is_hidden }) => (
                    <Tag
                      key={ability.name}
                      variant={is_hidden ? 'neutral' : 'info'}
                    >
                      {ability.name}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetailsPage;
