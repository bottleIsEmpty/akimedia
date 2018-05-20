import { FormBuilder, FormGroup } from '@angular/forms';
import { GENRES } from './../mock-genres';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input('productType') productType;
  // slider = [1930, 1990];
  genresList: String[];
  form: FormGroup;
  minSliderValue = 1895;
  maxSliderValue = new Date().getFullYear();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      type: [''],
      title: [],
      author: [],
      year: [[1100, 1900]],
      genre: []
    });
  }

  ngOnInit() {
    this.changeProduct(this.productType);
  }

  changeProduct(productType) {
    this.type = productType;

    switch (productType) {
      case 'film':
        this.genresList = GENRES.filmGenres;
        this.minSliderValue = 1895;
        break;
      case 'book':
        this.genresList = GENRES.bookGenres;
        this.minSliderValue = 0;
        break;
      case 'music':
        this.genresList = GENRES.musicGenres;
        this.minSliderValue = 1860;
        break;
      default:
        this.genresList = GENRES.filmGenres
          .concat(GENRES.bookGenres)
          .concat(GENRES.musicGenres);
        this.minSliderValue = 0;
    }
  }

  search() {
    console.log(this.form.value);
  }

  set type(value) {
    this.form.get('type').setValue(this.productType);
  }

}
