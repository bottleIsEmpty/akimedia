import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  // tslint:disable-next-line:max-line-length
  lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ex dolorum porro qui dolorem modi nisi, ab alias! Quos, ab ipsam. Ratione voluptatem iste iure modi, dolorum exercitationem ex nesciunt';

  filmTableSettings = {
    hideSubHeader: true,
    actions: null,
    columns: {
      id: {
        title: '№',
      },
      title: {
        title: 'Название',
      },
      director: {
        title: 'Режиссёр'
      },
      rating: {
        title: 'Оценка',
      }
    }
  };

  data = [
    {
      id: 1,
      title: 'Начало',
      rating: 8,
      director: 'Кристофер Нолан'
    },
    {
      id: 2,
      title: 'Самый лучший фильм',
      rating: 1,
      director: 'Кирилл Кузин'
    },
    {
      id: 3,
      title: 'Криминальное чтиво',
      rating: 10,
      director: 'Квентин Тарантино'
    },
  ];

  showFullText($comment: HTMLElement) {
    $comment.innerText = this.lorem;
  }

}
