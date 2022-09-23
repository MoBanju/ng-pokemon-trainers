import { Pokemon } from './pokemon.model';
import { Types } from "./pokemonDetailedApiResponse.model";

export interface PokemonDetailed extends Pokemon {
    isDetailed: boolean,
    baseExperience: number,
    type: keyof Types,
    height: number,
    weight: number,
    abilities: string[],
}