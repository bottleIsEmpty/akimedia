import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

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
      *ngFor="let genre of genres"
      (click)="removeGenre(genreItem.innerText)"
      #genreItem>
      {{ genre }}
    </li>
  </ul>
  `,
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent {

  genres: String[] = [];
  @Output('change') change = new EventEmitter<String[]>();

  addGenre(genre: HTMLInputElement) {
    if (genre.value !== '') {
      this.genres.push(genre.value);
      this.change.emit(this.genres);
      genre.value = '';
    }
  }

  removeGenre(genre) {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i] === genre) {
        this.genres.splice(i, 1);
        this.change.emit(this.genres);
        return;
      }
    }
  }

}
