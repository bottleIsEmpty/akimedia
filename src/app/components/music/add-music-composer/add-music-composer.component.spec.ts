import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusicComposerComponent } from './add-music-composer.component';

describe('AddMusicComposerComponent', () => {
  let component: AddMusicComposerComponent;
  let fixture: ComponentFixture<AddMusicComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMusicComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMusicComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
