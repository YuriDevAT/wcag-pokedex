import React from 'react';
import Type from './Type';

interface TypeData {
  type: { name: string };
}

interface Props {
  types: TypeData[];
}

const PokemonType: React.FC<Props> = ({ types }) => {
  return (
    <div className="type-list">
      <h3 className="panel-header">Types</h3>
      <ul className="type-box">
        {types.map(t => (
          <Type key={t.type.name} type={t.type.name} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonType;
