import React from 'react';
import Pokedex from './components/Pokedex';

const App: React.FC = () => {
  return (
    <>
      <header>
        <h1>Pokédex of Accessibility</h1>
      </header>
      <main>
        <Pokedex />
      </main>
    </>
  );
};

export default App;
