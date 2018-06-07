import { Injectable } from '@angular/core';
import { BOOKS } from '../../components/books/shared/mock-books';
import { COMMENTS } from '../../components/films/shared/mock-comments';

@Injectable()
export class BooksService {

  getBooks() {
    return Promise.resolve(BOOKS);
  }

  getBook(id) {
    return Promise.resolve(BOOKS[id]);
  }

  getComments() {
    return Promise.resolve(COMMENTS);
  }

}
