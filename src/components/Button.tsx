import React from 'react';

interface Props {
  onClick: () => void;
  ariaLabel?: string;
}

const Button: React.FC<Props> = ({ onClick, ariaLabel }) => {
  return (
    <button 
      type="button" 
      className="button" 
      onClick={onClick}
      aria-label={ariaLabel}
    ></button>
  );
};

export default Button;
