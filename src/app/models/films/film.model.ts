import { FilmDirector } from './film-director.model';
import { Product } from '../product.model';

export class Film extends Product{
    director: FilmDirector;
}
