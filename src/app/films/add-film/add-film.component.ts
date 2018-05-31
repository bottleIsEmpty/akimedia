import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss']
})
export class AddFilmComponent {

  imgSrc = 'assets/no-photo.png';
  form: FormGroup;

  constructor(public SnackBar: MatSnackBar, fb: FormBuilder) {
    this.form = fb.group({
      title: ['', [
          Validators.required,
          Validators.minLength(2),
        ]
      ],
      director: ['', [
          Validators.required,
          Validators.minLength(2),
        ]
      ],
      year: ['', [
          Validators.required,
          Validators.min(1900),
          Validators.max(new Date().getFullYear())
        ]
      ],
      type: [],
      genres: fb.array([]),
      description: ['', Validators.minLength(50)]
    });
  }

  updateGenres(genres) {
    console.log(genres);
  }
  
  submit($event) {
    console.log(event);
    this.form.reset();
    this.SnackBar.open('Режиссёр успешно добавлен!', null, {
      duration: 2000
    });
  }

  // Геттеры

  get genres() {
    return <FormArray>this.form.get('genres');
  }

  get title() {
    return this.form.get('title');
  }

  get director() {
    return this.form.get('director');
  }

  get year() {
    return this.form.get('year');
  }

  get description() {
    return this.form.get('description');
  }
}
