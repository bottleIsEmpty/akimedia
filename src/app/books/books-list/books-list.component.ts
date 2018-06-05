import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/books/book.model';
import { BooksService } from '../../services/books/books.service';
  
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks()
      .then(books => this.books = books);
  }

}
