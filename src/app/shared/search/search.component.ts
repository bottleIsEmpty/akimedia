import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  slider = [1930, 1990];
  
  constructor() { }

  ngOnInit() {
  }


  changeProduct(productType) {
    console.log(productType);
  }

}
