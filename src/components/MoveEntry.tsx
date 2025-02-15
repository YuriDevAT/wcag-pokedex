import React from 'react';
import { padStats } from './Pokedex';

interface MoveDetail {
  name: string;
  accuracy: number | null;
  power: number | null;
  pp: number | null;
  type: { name: string };
  names?: { language: { name: string }, name: string }[];
}

interface Props {
  move: MoveDetail;
  lvl: number;
}

const MoveEntry: React.FC<Props> = ({ move, lvl }) => {
  const name =
    move.name || (move.names ? move.names.find(m => m.language.name === "en")?.name : '');
  const acc = move.accuracy;
  const pow = move.power;
  const pp = move.pp;
  const type = move.type.name;

  return (
    <div className="move-body move-screen screen">
      <div className="move-left">
        <h3 id="move-name" className="move-name">{name}</h3>
        <ul aria-labelledby='move-name'>
          <li className="move-stat">{padStats("Accuracy", acc ?? 'N/A', ".", 16)}</li>
          <li className="move-stat">{padStats("Power", pow ?? 'N/A', ".", 16)}</li>
          <li className="move-stat">{padStats("PP", pp ?? 'N/A', ".", 16)}</li>
        </ul>
      </div>
      <div className="move-right">
        <div className="move-type">Type: {type}</div>
        <div className="move-learn">Learn: Lvl {lvl}</div>
      </div>
    </div>
  );
};

export default MoveEntry;
