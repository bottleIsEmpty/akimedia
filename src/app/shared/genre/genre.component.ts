import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'genre',
  template: `
  <label for="genres">Жанр(ы)</label>
  <input
    type="text" 
    class="form-control" 
    id="genres" 
    (keyup.enter)="addGenre(genre)" 
    #genre>
  <ul id="genres-list" class="list-group">
    <li 
      class="list-group-item genre" 
      *ngFor="let genre of genres.controls"
      (click)="removeGenre(genreItem.innerText)"
      #genreItem>
      {{ genre.value }}
    </li>
  </ul>
  `,
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
