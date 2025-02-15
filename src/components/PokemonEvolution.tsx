import React from 'react';
import PokemonSpriteSmall from './PokemonSpriteSmall';

interface Props {
  evoSprites: string[];
  evoNames: string[];
}

const PokemonEvolution: React.FC<Props> = ({ evoSprites, evoNames }) => {
  return (
    <div className="panel-row panel-evo">
      <PokemonSpriteSmall src={evoSprites[0]} evo="A" name={evoNames[0]} />
      <PokemonSpriteSmall src={evoSprites[1]} evo="AA" name={evoNames[1]} />
      <PokemonSpriteSmall src={evoSprites[2]} evo="AAA" name={evoNames[2]} />
    </div>
  );
};

export default PokemonEvolution;
