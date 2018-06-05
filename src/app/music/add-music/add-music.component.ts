import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent {

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

  addMusic() {
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
