import React from 'react';

interface Props {
  description: string;
  no: number;
}

const PokemonDescription: React.FC<Props> = ({ description }) => {
  return <p className="pokemon-description screen">{description}</p>;
};

export default PokemonDescription;
