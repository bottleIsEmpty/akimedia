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

  photoChanged(eventArgs) {
    this.imgSrc = eventArgs.imgSrc;
  }

  submit(f: FormGroup) {
    f.reset();
    //this.removePhoto();
    this.SnackBar.open('Режиссёр успешно добавлен!', null, {
      duration: 2000
    });
  }

}
