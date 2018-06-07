import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books/books.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Book } from '../../../models/books/book.model';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.scss']
})
export class BookProfileComponent implements OnInit {

  book: Book;
  comments = [];

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const id = +params.get('id');
        this.booksService.getBook(id)
          .then(book => this.book = book );
      });

    this.booksService.getComments()
      .then(comments => this.comments = comments);
  }

  addComment(comment, filmRating) {
    const commentValue = {
      id: 1,
      film: 1,
      date: new Date(),
      commentedBy: {
          id: 1,
          login: 'Михаил',
          email: 'mikhail@gmail.com'
      },
      commentType: filmRating,
      comment: comment
    };

    this.comments.push(commentValue);
    this.snackBar.open('Комментарий успешно добавлен', null, {
      duration: 2000
    });
  }

}
