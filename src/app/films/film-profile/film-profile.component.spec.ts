import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmProfileComponent } from './film-profile.component';

describe('FilmProfileComponent', () => {
  let component: FilmProfileComponent;
  let fixture: ComponentFixture<FilmProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
