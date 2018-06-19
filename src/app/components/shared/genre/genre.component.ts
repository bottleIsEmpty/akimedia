import { Genre } from './../../../models/genre.model';
import { GenreService } from './../../../services/genre.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'genre',
  template: `
    <label for="genres">Жанр(ы)</label>
    <select class="form-control" name="genres" (change)="addGenre(genreField.value)" #genreField>
      <option [value]="genreItem.id" *ngFor="let genreItem of genresList">{{ genreItem.genreName }}</option>
    </select>
    <ul id="genres-list" class="list-group">
      <li
        class="list-group-item genre"
        *ngFor="let genre of genres"
        (click)="removeGenre(genre)"
        #genreItem>
        {{ genre.genreName }}
      </li>
    </ul>
  `,
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  genres: Genre[] = [];
  // tslint:disable-next-line:no-input-rename
  @Input('type') type: String;
  public genresList: Genre[];

  constructor(private genreService: GenreService) {
  }

  ngOnInit() {
    switch (this.type) {
      case 'films':
        this.genreService.getGenres('film')
          .subscribe(genres => this.genresList = genres);
        break;
      case 'books':
        this.genreService.getGenres('book')
          .subscribe(genres => this.genresList = genres);
        break;
      case 'music':
        this.genreService.getGenres('music')
          .subscribe(genres => this.genresList = genres);
        break;
    }
  }

  addGenre(genreId: number) {
    genreId = +genreId;
    if (this.genres.some(g => g.id === genreId)) {
      return;
    }

    const genre = this.genresList.findIndex(genreValue => genreValue.id === genreId);

    if (genre !== -1) {
      this.genres.push(this.genresList[genre]);
    }

  }

  removeGenre(genreId: number) {
    genreId = +genreId;
    const genreIndex = this.genres.findIndex(genre => genre.id === genreId);
    this.genres.splice(genreIndex, 1);
  }

}
