import React from 'react';
import Button from './Button';
import NumInput from './NumInput';

interface Props {
  controls: {
    next: () => void;
    prev: () => void;
    pick: (no: number) => void;
  };
  no: number;
}

const PokedexControls: React.FC<Props> = ({ controls, no }) => {
  return (
    <div className="panel-row controls">
      <Button onClick={controls.prev} ariaLabel="previous pokemon" />
      <NumInput no={no} func={controls.pick} />
      <Button onClick={controls.next} ariaLabel="next pokemon" />
    </div>
  );
};

export default PokedexControls;
