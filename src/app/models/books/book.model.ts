import { BookAuthor } from "./book-author.model";

export class Book {
    id: number;
    title: string;
    year: number;
    type: number;
    genres: string[];
    author: BookAuthor;
    logo: string;
    description: string;
}