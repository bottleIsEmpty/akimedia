import { PhotoComponent } from './../../shared/photo/photo.component';
import { GenreComponent } from './../../shared/genre/genre.component';
import { GenreService } from './../../../services/genre.service';
import { FilmDirector } from './../../../models/films/film-director.model';
import { FilmDirectorService } from './../../../services/films/film-director.service';
import { MatSnackBar } from '@angular/material';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';
import { FilmsService } from '../../../services/films/films.service';


@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss']
})
export class AddFilmComponent implements OnInit {

  imgSrc = 'assets/no-photo.png';
  form: FormGroup;
  directors: FilmDirector[];
  @ViewChild('directorField') directorField: ElementRef;
  @ViewChild(GenreComponent) private genreComponent: GenreComponent;
  @ViewChild(PhotoComponent) private photoComponent: PhotoComponent;

  ngOnInit() {
    this.filmDirectorService.getDirectors()
      .subscribe(directors => this.directors = directors);
  }

  constructor(public SnackBar: MatSnackBar,
    fb: FormBuilder,
    private filmDirectorService: FilmDirectorService,
    private filmsService: FilmsService,
  ) {
    this.form = fb.group({
      title: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(500)
        ]
      ],
      director: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(300)
        ]
      ],
      year: ['', [
          Validators.required,
          Validators.min(1900),
          Validators.max(new Date().getFullYear())
        ]
      ],
      type: ['Фильм'],
      genres: fb.array([]),
      description: ['', Validators.minLength(50)]
    });
  }

  updateGenres(genres) {
    console.log(genres);
  }

  submit($event) {
    const genres = this.genreComponent.genres.map(genre => new FormControl(genre.id));
    genres.forEach(genre => this.genres.push(genre));

    const photo = this.photoComponent.imgFile;

    this.filmsService.addFilm(this.form.value)
      .subscribe(response => {
        this.form.reset();
        this.SnackBar.open('Режиссёр успешно добавлен!', null, {
          duration: 2000
        });

        if (photo) {
          this.filmsService.addPhoto(response.id, photo)
            .subscribe();
        }
      });

  }

  // Геттеры

  get genres(): FormArray {
    return <FormArray>this.form.get('genres');
  }

  set genres(value) {
    this.form.get('genres').setValue(value);
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
