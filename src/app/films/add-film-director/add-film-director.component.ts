import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-film-director',
  templateUrl: './add-film-director.component.html',
  styleUrls: ['./add-film-director.component.scss']
})
export class AddFilmDirectorComponent {

  imgSrc: String = 'assets/no-photo.png';
  isButtonInvisible = true;

  constructor(public SnackBar: MatSnackBar) { }

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

  submit(f: FormGroup) {
    f.reset();
    this.removePhoto();
    this.SnackBar.open('Режиссёр успешно добавлен!', null, {
      duration: 2000
    });
  }

}
