import React from 'react';
import PokemonStats from './PokemonStats';
import PokemonType from './PokemonType';
import PokemonEvolution from './PokemonEvolution';
import ButtonChrome from './ButtonChrome';
import MoveList from './MoveList';
import PokedexControls from './PokedexControls';
import { Pokemon, Species } from '../types';

interface RightPanelProps {
  pData: Pokemon | null;
  sData: Species | null;
  evoSprites: string[];
  evoNames: string[];
  controls: {
    next: () => void;
    prev: () => void;
    pick: (no: number) => void;
  };
  no: number;
}

const RightPanel: React.FC<RightPanelProps> = ({ pData, evoSprites, evoNames, controls, no }) => {
  if (pData && pData.types) {
    return (
      <div className="panel right-panel">
        <div className="panel-row">
          <PokemonStats stats={pData.stats} />
          <PokemonType types={pData.types} />
        </div>
        <PokemonEvolution evoSprites={evoSprites} evoNames={evoNames} />
        <ButtonChrome />
        <MoveList moves={pData.moves} />
        <PokedexControls controls={controls} no={no} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default RightPanel;
