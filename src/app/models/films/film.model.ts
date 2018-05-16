import { FilmDirector } from './film-director.model';

export class Film {
    id: number;
    title: string;
    year: number;
    type: boolean;
    genres: string[];
    director: FilmDirector;
    logo: string;
    description: string;
}
