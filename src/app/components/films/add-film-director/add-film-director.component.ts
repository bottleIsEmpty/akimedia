import { PhotoComponent } from './../../shared/photo/photo.component';
import { FilmDirector } from './../../../models/films/film-director.model';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { FilmDirectorService } from '../../../services/films/film-director.service';

@Component({
  selector: 'app-add-film-director',
  templateUrl: './add-film-director.component.html',
  styleUrls: ['./add-film-director.component.scss']
})
export class AddFilmDirectorComponent {

  @ViewChild(PhotoComponent) private photoComponent: PhotoComponent;
  isButtonInvisible = true;
  photo: File;

  constructor(public SnackBar: MatSnackBar, private directorService: FilmDirectorService) { }

  submit(formData) {
    this.directorService.addDirector(<FilmDirector>formData.value)
      .subscribe(director => {
        this.SnackBar.open('Режиссёр успешно добавлен!', null, { duration: 2000 });
        formData.reset();

        if (!this.photoComponent.imgFile) {
          return;
        }

        this.directorService.addPhoto(director.id, this.photoComponent.imgFile);

      });
  }

}
