import React from 'react';

interface Props {
  type: string;
}

const Type: React.FC<Props> = ({ type }) => {
  return <li className={`type ${type}`}>{type}</li>;
};

export default Type;
