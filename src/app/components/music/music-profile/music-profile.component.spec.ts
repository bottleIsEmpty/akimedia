import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicProfileComponent } from './music-profile.component';

describe('MusicProfileComponent', () => {
  let component: MusicProfileComponent;
  let fixture: ComponentFixture<MusicProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
