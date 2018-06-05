import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-music-composer',
  templateUrl: './add-music-composer.component.html',
  styleUrls: ['./add-music-composer.component.scss']
})
export class AddMusicComposerComponent implements OnInit {

  imgSrc = 'assets/no-photo.png';

  constructor() { }

  photoChanged(eventArgs) {
    this.imgSrc = eventArgs.imgSrc;
  }

  ngOnInit() {
  }

}
