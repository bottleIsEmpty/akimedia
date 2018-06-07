import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {

  imgSrc = 'assets/no-photo.png';
  form: FormGroup;
  genresValues: String[] = [];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      title: ['', [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      author: ['', [
          Validators.required,
          Validators.minLength(2),
        ]
      ],
      year: ['', [
          Validators.required,
          Validators.min(0),
          Validators.max(new Date().getFullYear())
        ]
      ],
      type: [],
      genres: [[]],
      description: ['', Validators.minLength(50)]
    });
  }

  addBook() {
    // this.form.get('genres').setValue(this.genresValues);
    console.log(this.genresValues);
    console.log(this.form.value);
  }

  updateGenres(genres) {
    console.log(genres);
  }

  // Геттеры

  get genres() {
    return this.form.get('genres');
  }

  get title() {
    return this.form.get('title');
  }

  get author() {
    return this.form.get('author');
  }

  get year() {
    return this.form.get('year');
  }

  get description() {
    return this.form.get('description');
  }

}
