import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('imageType') imageType: string;
  isButtonInvisible = true;
  // tslint:disable-next-line:no-input-rename
  @Input('imgSrc') imgSrc: any = 'assets/no-photo.png';
  imgFile: File;

  removePhoto() {
    this.imgSrc = 'assets/no-photo.png';
    this.imgFile = null;
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
      this.imgSrc = reader.result;
      this.imgFile = reader.result;
      this.isButtonInvisible = false;
    };
    reader.readAsDataURL(file);
  }

}
