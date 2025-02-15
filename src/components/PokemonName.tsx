import React from 'react';

interface Props {
  name: string;
  no: number;
}

const PokemonName: React.FC<Props> = ({ name, no }) => {
  return (
    <h2 className="pokemon-name screen">
      {name}
      <span className="name-no">no. {no}</span>
    </h2>
  );
};

export default PokemonName;
