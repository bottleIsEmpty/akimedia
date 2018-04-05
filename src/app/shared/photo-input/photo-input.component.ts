import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'photo-input',
  template: `
    <label for="director-photo">Постер</label>
    <input
      type="file" 
      class="form-control-file" 
      id="director-photo" 
      placeholder="Тарантино"
      #photo
      (change)="addPhoto(photo)">
  `
})
export class PhotoInputComponent {

  @Output('change') change = new EventEmitter();

  imgSrc: string;

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
      this.change.emit({
        imgSrc: reader.result
      })
    };
    reader.readAsDataURL(file);
  }
}
