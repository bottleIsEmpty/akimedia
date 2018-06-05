import { BookAuthor } from "./book-author.model";
import { Product } from "../product.model";

export class Book extends Product {
    author: BookAuthor;
}