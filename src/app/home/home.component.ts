import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  masonryItems: Array<any>;

  ngOnInit() {
    this.masonryItems = [
      {}
    ]
  }

}