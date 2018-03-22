import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  filmTableSettings = {
    columns: {
      id: {
        title: '№' 
      },
      title: {
        title: 'Название'
      },
      rating: {
        title: 'Оценка'
      }
    }
  }

  data = [
    {
      id: 1,
      title: 'Начало',
      rating: 8
    },
    {
      id: 1,
      title: 'Начало',
      rating: 8
    },
    {
      id: 1,
      title: 'Начало',
      rating: 8
    },
  ]

}
