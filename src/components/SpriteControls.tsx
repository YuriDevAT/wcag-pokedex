import React from 'react';

interface Props {
  funcs: {
    gender: () => void;
    front: () => void;
    shiny: () => void;
  };
  gender: boolean;
  shiny: boolean;
  front: boolean;
}

const SpriteControls: React.FC<Props> = ({ funcs, gender, shiny, front }) => {
  return (
    <div className="sprite-controls">
      <button
        className={`sprite-control sprite-controls-gender ${gender ? "sprite-control-selected" : ""}`}
        onClick={funcs.gender} aria-label='Change gender'
      >
        <i className="fas fa-venus" />
      </button>
      <button
        className={`sprite-control sprite-controls-shiny ${shiny ? "sprite-control-selected" : ""}`}
        onClick={funcs.shiny} aria-label='Switch version'
      >
        <span>shiny</span>
      </button>
      <button
        className={`sprite-control sprite-controls-rotate ${!front ? "sprite-control-selected" : ""}`}
        onClick={funcs.front} aria-label='Rotate Pokemon'
      >
        <i className="fas fa-undo" />
      </button>
    </div>
  );
};

export default SpriteControls;
