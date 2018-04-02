import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  @Input('imgSrc') imgSrc;
  @Input('imageType') imageType;
  @Output('change') change = new EventEmitter();
  isButtonInvisible = false;

  addPhoto() {
    this.isButtonInvisible = false;
  }

  removePhoto() {
    this.imgSrc = 'assets/no-photo.png';
    this.isButtonInvisible = true;
    this.change.emit();
  }

}
