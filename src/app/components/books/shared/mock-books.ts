import { Book } from '../../../models/books/book.model';

export const BOOKS: Book[] = [
  {
    id: 0,
    title: 'Отцы и дети',
    year: 1840,
    type: 'книга',
    genres: [
      'Роман',
      'Драма'
    ],
    author: {
      id: 1,
      name: 'Иван',
      surname: 'Тургенев',
      country: 'Россия'
    },
    logo: 'assets/inception.jpg',
    // tslint:disable-next-line:max-line-length
    description: 'Повесть о взаимоотношении отцов и детей'
  },
  {
    id: 1,
    title: 'Над пропастью во ржи',
    year: 1960,
    type: 'книга',
    genres: [
      'Роман',
      'Драма'
    ],
    author: {
      id: 2,
      name: 'Джером',
      surname: 'Селлинджер',
      country: 'США'
    },
    logo: 'assets/inception.jpg',
    // tslint:disable-next-line:max-line-length
    description: 'Роман о взрослении'
  },
  {
    id: 2,
    title: '1984',
    year: 1948,
    type: 'книга',
    genres: [
      'Роман',
      'Драма',
      'Антиутопия'
    ],
    author: {
      id: 3,
      name: 'Джордж',
      surname: 'Оруэлл',
      country: 'Великобритания'
    },
    logo: 'assets/inception.jpg',
    // tslint:disable-next-line:max-line-length
    description: 'Антиутопия про социалистический режим'
  },
];
