import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss']
})
export class AddFilmComponent {

  private imgSrc: String = 'assets/no-photo.png';
  private isButtonInvisible = true;
  form: FormGroup;

  constructor(fb: FormBuilder) {
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

  addGenre(genre: HTMLInputElement) {
    this.genres.push(new FormControl(genre.value));
    genre.value = '';
  }

  removeGenre(genre: FormControl) {
    const index = this.genres.controls.indexOf(genre);
    this.genres.removeAt(index);
  }

  addPhoto(photo) {
    const file: File = photo.files[0];
    if (!file.type.match('image/*')) {
      alert('Некорректный файл!');
      photo.value = '';
      return false;
    }

    if (file.size > 2097152) {
      alert('Файл не должен превышать 2 мб');
      photo.value = '';
      return false;
    }

    const reader = new FileReader();

    reader.onload = () => {
        this.imgSrc = reader.result;
        this.isButtonInvisible = false;
    };
    reader.readAsDataURL(file);
  }

  removePhoto() {
    const photo: HTMLInputElement = <HTMLInputElement>(document.getElementById('director-photo'));
    photo.value = '';
    this.imgSrc = 'assets/no-photo.png';
    this.isButtonInvisible = true;
  }

  submit() {
    console.log(this.form.value);
  }

  get genres() {
    return <FormArray>this.form.get('genres');
  }
}
