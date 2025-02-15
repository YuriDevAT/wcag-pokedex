import React from 'react';
import PokeBall from './PokeBall';

interface Props {
  src: string | undefined;
  evo: string;
  name: string;
}

const PokemonSpriteSmall: React.FC<Props> = ({ src, evo, name }) => {
  return (
    <div>
      <div className="flex-center">
        <p className="evo-num">{evo}</p>
      </div>
      {src ? (
        <img src={src} alt="" className="pokemon-sprite pokemon-sprite-small" />
      ) : (
        <PokeBall />
      )}
      <p className="screen evo-name">{name || "No Data"}</p>
    </div>
  );
};

export default PokemonSpriteSmall;
