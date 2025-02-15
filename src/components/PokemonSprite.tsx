import React, { useState } from 'react';
import SpriteControls from './SpriteControls';

interface Props {
  src: {
    [key: string]: string | null;
  };
}

const PokemonSprite: React.FC<Props> = ({ src }) => {
  const [front, setFront] = useState<boolean>(true);
  const [shiny, setShiny] = useState<boolean>(false);
  const [female, setFemale] = useState<boolean>(false);

  const buildImage = (): string => {
    const dir = front ? "front" : "back";
    const gender = female ? "_female" : "";
    const shinyStr = shiny ? "_shiny" : "_default";
    return `${dir}${shinyStr}${gender}`;
  };

  const toggleGender = () => {
    setFemale(prev => !prev);
    if (!src[buildImage()]) {
      setFemale(false);
    }
  };

  const toggleShiny = () => {
    setShiny(prev => !prev);
    if (!src[buildImage()]) {
      setShiny(false);
    }
  };

  const toggleFront = () => {
    setFront(prev => !prev);
    if (!src[buildImage()]) {
      setFront(true);
    }
  };

  const imgSrc = src[buildImage()] || src["front_default"] || "";

  const funcs = { gender: toggleGender, front: toggleFront, shiny: toggleShiny };

  return (
    <div>
      <img src={imgSrc} alt="" className="pokemon-sprite" />
      <SpriteControls funcs={funcs} gender={female} shiny={shiny} front={front} />
    </div>
  );
};

export default PokemonSprite;
