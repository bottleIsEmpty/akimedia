import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-author',
  templateUrl: './add-book-author.component.html',
  styleUrls: ['./add-book-author.component.scss']
})
export class AddBookAuthorComponent implements OnInit {

  imgSrc = 'assets/no-photo.png';

  constructor() { }

  photoChanged(eventArgs) {
    this.imgSrc = eventArgs.imgSrc;
  }

  ngOnInit() {
  }

}
