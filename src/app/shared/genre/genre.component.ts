import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { GENRES } from '../mock-genres';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'genre',
  template: `
    <label for="genres">Жанр(ы)</label>
    <select class="form-control" name="genres" (change)="addGenre(genre.value)" #genre>
      <option *ngFor="let genre of genresList">{{ genre }}</option>
    </select>
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
export class GenreComponent implements OnInit {

  genres: String[] = [];
  // genresList: String[];
  @Input('type') type: String;
  @Output('genreChanged') genreChanged = new EventEmitter<String[]>();
  public genresList: String[];

  ngOnInit() {
    switch (this.type) {
      case 'films':
        this.genresList = GENRES.filmGenres;
        break;
      case 'books':
        this.genresList = GENRES.bookGenres;
        break;
      case 'music':
        this.genresList = GENRES.musicGenres;
        break;
    }
  }

  addGenre(genre: String) {
    // if (genre.value !== '') {
    //   this.genres.push(genre.value);
    //   this.change.emit(this.genres);
    // }
    this.genres.push(genre);
    this.genreChanged.emit(this.genres);
  }

  removeGenre(genre: String) {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i] === genre) {
        this.genres.splice(i, 1);
        this.genreChanged.emit(this.genres);
        return;
      }
    }
  }

}
