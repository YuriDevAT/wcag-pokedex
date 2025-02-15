export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    [key: string]: string | null;
  };
  types: { type: { name: string } }[];
  moves: {
    move: { name: string; url: string };
    version_group_details: { level_learned_at: number }[];
  }[];
  species: { url: string };
  stats: { base_stat: number; stat: { name: string } }[];
}

export interface Species {
  evolution_chain: { url: string };
  flavor_text_entries: { language: { name: string }; flavor_text: string }[];
}

export interface Evolution {
  species: { name: string };
  evolves_to: Evolution[];
}

export interface PokemonEvolution {
  name: string;
  sprite: string;
}
