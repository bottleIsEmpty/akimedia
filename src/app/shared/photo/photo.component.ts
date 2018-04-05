import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnChanges {

  @Input('imgSrc') imgSrc: string;
  @Input('imageType') imageType: string;
  @Output('change') change = new EventEmitter();
  isButtonInvisible = true;

  ngOnChanges(changes: SimpleChanges): void {
    this.isButtonInvisible = (changes.imgSrc && changes.imgSrc.currentValue != 'assets/no-photo.png') ? false : true;
  }

  removePhoto() {
    this.imgSrc = 'assets/no-photo.png';
    let photo = <HTMLInputElement>(document.getElementById('director-photo'));
    photo.value = ''; 
    this.change.emit({
      imgSrc: this.imgSrc
    });
  }

}
