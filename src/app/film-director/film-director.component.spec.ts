import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDirectorComponent } from './film-director.component';

describe('FilmDirectorComponent', () => {
  let component: FilmDirectorComponent;
  let fixture: ComponentFixture<FilmDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
