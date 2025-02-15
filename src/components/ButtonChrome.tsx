import React from 'react';

const ButtonChrome: React.FC = () => {
  return (
    <div className="panel-row blue-buttons">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="blue-button" />
      ))}
    </div>
  );
};

export default ButtonChrome;
