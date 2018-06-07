import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicComposerComponent } from './music-composer.component';

describe('MusicComposerComponent', () => {
  let component: MusicComposerComponent;
  let fixture: ComponentFixture<MusicComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
