import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDirectorListComponent } from './film-director-list.component';

describe('FilmDirectorListComponent', () => {
  let component: FilmDirectorListComponent;
  let fixture: ComponentFixture<FilmDirectorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDirectorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDirectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
