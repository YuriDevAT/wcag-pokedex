import React from 'react';
import PokemonName from './PokemonName';
import PokemonSprite from './PokemonSprite';
import PokemonDescription from './PokemonDescription';
import Loading from './Loading';
import { Pokemon, Species } from '../types';

interface LeftPanelProps {
  pData: Pokemon | null;
  sData: Species | null;
  no: number;
  description: string;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ pData, no, description }) => {
  if (pData && Object.keys(pData).length !== 0) {
    return (
      <div className="panel left-panel">
        <PokemonName name={pData.name} no={no} />
        <PokemonSprite src={pData.sprites} />
        <PokemonDescription description={description} no={no} />
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default LeftPanel;
