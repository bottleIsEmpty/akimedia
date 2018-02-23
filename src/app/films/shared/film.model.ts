import { Director } from './director.model';

export class Film {
    id: number;
    title: string;
    year: number;
    type: boolean;
    genres: String[];
    director: Director;
    description: string;
}
