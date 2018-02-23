import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmDirectorComponent } from './add-film-director.component';

describe('AddFilmDirectorComponent', () => {
  let component: AddFilmDirectorComponent;
  let fixture: ComponentFixture<AddFilmDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilmDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilmDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
