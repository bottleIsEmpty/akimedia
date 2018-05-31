import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicComposerListComponent } from './music-composer-list.component';

describe('MusicComposerListComponent', () => {
  let component: MusicComposerListComponent;
  let fixture: ComponentFixture<MusicComposerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicComposerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicComposerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
