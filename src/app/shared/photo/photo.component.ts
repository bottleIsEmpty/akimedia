import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  @Input('imgSrc') imgSrc = 'assets/no-photo.png';
  @Input('imageType') imageType: string;
  @Output('change') change = new EventEmitter();
  isButtonInvisible = true;

  removePhoto() {
    this.imgSrc = 'assets/no-photo.png';
    let photo = <HTMLInputElement>(document.getElementById('director-photo'));
    photo.value = ''; 
    this.change.emit({
      imgSrc: this.imgSrc
    });

    this.isButtonInvisible = true;
  }

  addPhoto($photo) {
    const file: File = $photo.files[0];
    if (!file.type.match('image/*')) {
      alert('Некорректный файл!');
      $photo.value = '';
      return false;
    }

    if (file.size > 2097152) {
      alert('Файл не должен превышать 2 мб');
      $photo.value = '';
      return false;
    }

    const reader = new FileReader();

    reader.onload = () => {
      // this.change.emit({
      //   imgSrc: reader.result
      // }),
      this.imgSrc = reader.result;
      this.isButtonInvisible = false;
    };
    reader.readAsDataURL(file);
  }

}
