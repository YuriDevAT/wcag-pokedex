import React from 'react';
import StatLine from './StatLine';

interface Stat {
  stat: { name: string };
  base_stat: number;
}

interface Props {
  stats: Stat[];
}

const PokemonStats: React.FC<Props> = ({ stats }) => {
  return (
    <ul className="screen stats">
      {stats.map(s => (
        <StatLine key={s.stat.name} name={s.stat.name} value={s.base_stat} />
      ))}
    </ul>
  );
};

export default PokemonStats;
