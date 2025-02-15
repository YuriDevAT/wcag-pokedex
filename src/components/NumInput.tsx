import React, { useState } from 'react';

interface Props {
  no: number;
  func: (id: number) => void;
}

const NumInput: React.FC<Props> = ({ no, func }) => {
  const [id, setId] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(Number(e.target.value));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    func(id);
  };

  return (
    <div>
      <input
        type="number"
        className="screen num-input"
        placeholder={no.toString()}
        onChange={handleChange}
      />
      <button className="submit" onClick={handleClick} aria-label="Jump to Pokemon"></button>
    </div>
  );
};

export default NumInput;
