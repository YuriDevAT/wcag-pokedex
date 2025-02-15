import React, { useState, useEffect } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Divider from './Divider';
import { Pokemon, Species, Evolution } from '../types';
import Loading from './Loading';

const POKEMON = 1;

// Utility functions
export const pickRandom = (arr: string[]): string => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const padStats = (stat: string, val: string | number, sep: string, len: number): string => {
  val = val || "xx";
  return `${stat}${sep.repeat(len - (stat.length + val.toString().length))}${val}`;
};

const Pokedex: React.FC = () => {
  const [pokemonIndex, setPokemonIndex] = useState<number>(POKEMON);
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
  const [speciesData, setSpeciesData] = useState<Species | null>(null);
  const [description, setDescription] = useState<string>("");
  const [evoSprites, setEvoSprites] = useState<string[]>([]);
  const [evoNames, setEvoNames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    changePokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonIndex]);

  const changePokemon = () => {
    setLoading(true);
    const request = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    fetch(request, { cache: "force-cache" })
      .then(response => response.json())
      .then((data: Pokemon) => {
        setPokemonData(data);
        setPokemonIndex(data.id);
        return fetch(data.species.url);
      })
      .then(response => response.json())
      .then((data: Species) => {
        setSpeciesData(data);
        const flavorTexts = data.flavor_text_entries
          .filter(e => e.language.name === "en")
          .map(e => e.flavor_text);
        setDescription(pickRandom(flavorTexts));
        setLoading(false);
        return fetch(data.evolution_chain.url);
      })
      .then(response => response.json())
      .then((data) => {
        const api = "https://pokeapi.co/api/v2/pokemon/";
        const first: Evolution = data.chain;
        const evos: Promise<Response>[] = [];
        let second: Evolution | undefined;
        let third: Evolution | undefined;
        if (first) {
          evos.push(fetch(`${api}${first.species.name}/`));
          second = first.evolves_to[0];
        }
        if (second) {
          evos.push(fetch(`${api}${second.species.name}/`));
          third = second.evolves_to[0];
        }
        if (third) {
          evos.push(fetch(`${api}${third.species.name}/`));
        }
        Promise.all(evos)
          .then(responses => Promise.all(responses.map(value => value.json())))
          .then((dataList: Pokemon[]) => {
            const sprites = dataList.map(v => v.sprites.front_default).filter((sprite): sprite is string => sprite !== null);
            const names = dataList.map(n => n.name);
            setEvoSprites(sprites);
            setEvoNames(names);
          });
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  return (
    <div className="pokedex">
      {loading && (
      <div className="loading-overlay">
        <Loading />
      </div>
    )}
      <LeftPanel 
        pData={pokemonData} 
        sData={speciesData} 
        no={pokemonIndex} 
        description={description} 
      />
      <Divider />
      <RightPanel 
        pData={pokemonData} 
        sData={speciesData}
        evoSprites={evoSprites} 
        evoNames={evoNames} 
        controls={{
          next: () => setPokemonIndex(Math.min(pokemonIndex + 1, 949)),
          prev: () => setPokemonIndex(Math.max(pokemonIndex - 1, 1)),
          pick: (no: number) => setPokemonIndex(no)
        }}
        no={pokemonIndex} 
      />
    </div>
  );
};

export default Pokedex;
