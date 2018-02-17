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
  addPhoto($event) {

    const file: File = $event.target.files[0];
    if (!file.type.match('image/*')) {
      alert('Некорректный файл!');
      $event.target.value = '';
      return false;
    }

    if (file.size > 2097152) {
      alert('Файл не должен превышать 2 мб');
      $event.target.value = '';
      return false;
    }

    const reader = new FileReader();
    reader.onload = () => {
        this.imgSrc = reader.result;
        this.isButtonInvisible = false;
    };
    reader.readAsDataURL(file);
  }

  deletePhoto() {
    const photo: HTMLInputElement = <HTMLInputElement>(document.getElementById('director-photo'));
    photo.value = '';
    this.imgSrc = 'assets/no-photo.png';
  }

  submit(f: FormGroup) {
    f.reset();
    this.deletePhoto();
    this.SnackBar.open('Режиссёр успешно добавлен!', null, {
      duration: 2000
    });
  }

}
