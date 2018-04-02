import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss']
})
export class AddFilmComponent {

  imgSrc: String = 'assets/inception.jpg';
  isButtonInvisible = true;
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

  addGenre(genre: HTMLInputElement) {
    if (genre.value != '') {
      this.genres.push(new FormControl(genre.value));
      genre.value = '';
    }
  }

  removeGenre(genre) {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres.value[i] === genre) {
        this.genres.removeAt(i);
        break;
      }
    }
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
    this.form.reset();
    this.removePhoto();
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
