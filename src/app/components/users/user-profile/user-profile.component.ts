import { AuthService } from './../../../services/auth.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

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

  bookTableSettings = {
    hideSubHeader: true,
    actions: null,
    columns: {
      id: {
        title: '№',
      },
      title: {
        title: 'Название',
      },
      author: {
        title: 'Автор'
      },
      rating: {
        title: 'Оценка',
      }
    }
  };


  musicTableSettings = {
    hideSubHeader: true,
    actions: null,
    columns: {
      id: {
        title: '№',
      },
      title: {
        title: 'Название',
      },
      composer: {
        title: 'Композитор'
      },
      rating: {
        title: 'Оценка',
      }
    }
  };

  filmData = [
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

  bookData = [
    {
      id: 1,
      title: 'Начало',
      rating: 8,
      author: 'Кристофер Нолан'
    },
    {
      id: 2,
      title: 'Самый лучший фильм',
      rating: 1,
      author: 'Кирилл Кузин'
    },
    {
      id: 3,
      title: 'Криминальное чтиво',
      rating: 10,
      author: 'Квентин Тарантино'
    },
  ];

  musicData = [
    {
      id: 1,
      title: 'Начало',
      rating: 8,
      composer: 'Кристофер Нолан'
    },
    {
      id: 2,
      title: 'Самый лучший фильм',
      rating: 1,
      composer: 'Кирилл Кузин'
    },
    {
      id: 3,
      title: 'Криминальное чтиво',
      rating: 10,
      composer: 'Квентин Тарантино'
    },
  ];

  user: any;

  constructor(public router: Router, public authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(paramMap => {
        const id = paramMap.get('id');

        this.authService.getUser(id)
          .subscribe(user => {
            console.log(user);
            this.user = user;
          }, err => console.log(err));
      });
  }

  showFullText($event) {
    $event.target.parentElement.innerText = this.lorem;
  }
}
