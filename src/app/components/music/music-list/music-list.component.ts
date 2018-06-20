import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent {

  musics = [];

  // constructor(private musicService: MusicService) { }

  // ngOnInit() {
  //   this.musicService.getBooks()
  //     .then(books => this.musics = books);
  // }

}
