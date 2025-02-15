import React from 'react';
import { padStats } from './Pokedex';

interface Props {
  name: string;
  value: number;
}

const StatLine: React.FC<Props> = ({ name, value }) => {
  return (
    <li className="stat-line">
      {padStats(name, value, ".", 20)}
    </li>
  );
};

export default StatLine;
