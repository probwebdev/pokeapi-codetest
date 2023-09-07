import classNames from 'classnames';

import { PokemonImage } from '~/components/PokemonImage';

import type { Pokemon } from '@codetest/api';

export interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { name, sprites } = pokemon;

  return (
    <div
      className={classNames(
        'flex flex-col items-center justify-center',
        'gap-2 p-2',
        'rounded border border-solid border-slate-200',
        'shadow-md transition-all hover:shadow-lg active:shadow-md',
        'bg-violet-50 hover:bg-violet-200 active:bg-violet-300',
        'cursor-pointer'
      )}
    >
      <PokemonImage url={sprites.front_default} alt={name} />
      <span className={classNames('font-semibold capitalize')}>{name}</span>
    </div>
  );
};
