interface Result {
    name: string;
    url: string;
}

export interface PokemonApiResponse {
    count: number;
    next: string;
    previous?: string;
    results: Result[];
}