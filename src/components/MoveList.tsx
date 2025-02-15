import React, { useState, useEffect } from 'react';
import MovesLoading from './MovesLoading';
import MoveEntry from './MoveEntry';

interface MoveDetail {
  name: string;
  accuracy: number | null;
  power: number | null;
  pp: number | null;
  type: { name: string };
  names?: { language: { name: string }, name: string }[];
}

interface MoveData {
  move: { name: string; url: string };
  version_group_details: { level_learned_at: number }[];
}

interface Props {
  moves: MoveData[];
}

const MoveList: React.FC<Props> = ({ moves }) => {
  const [index, setIndex] = useState<number>(0);
  const [currentMove, setCurrentMove] = useState<MoveDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMoves = () => {
    if (!moves || moves.length === 0) return;
    setLoading(true);
    fetch(moves[index].move.url)
      .then(response => response.json())
      .then((data: MoveDetail) => {
        setCurrentMove(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoves();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, moves]);

  useEffect(() => {
    setIndex(0);
    loadMoves();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moves]);

  const nextMove = () => {
    const nextIndex = Math.min(index + 1, moves.length - 1);
    setIndex(nextIndex);
  };

  const prevMove = () => {
    const prevIndex = Math.max(index - 1, 0);
    setIndex(prevIndex);
  };

  let movesContent;
  if (loading || !currentMove || Object.keys(currentMove).length === 0) {
    movesContent = <MovesLoading />;
  } else {
    const lvl = moves[index].version_group_details[0].level_learned_at;
    movesContent = <MoveEntry move={currentMove} lvl={lvl} />;
  }

  return (
    <div className="move-list">
      {movesContent}
      <div className="move-controls">
        <button className="move-arrow" onClick={prevMove} aria-label="previous move">
          <i className="fas fa-caret-up" />
        </button>
        <button className="move-arrow" onClick={nextMove} aria-label='next move'>
          <i className="fas fa-caret-down" />
        </button>
      </div>
    </div>
  );
};

export default MoveList;
