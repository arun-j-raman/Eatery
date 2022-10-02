import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  FoodItems: Array<any> = [
    {
      Id: 1,
      Name: 'Sweet Corn',
      Type: 'Starters',
      Price: 125,
    },
    {
      Id: 2,
      Name: 'French Fries',
      Type: 'Starters',
      Price: 120,
    },
    {
      Id: 3,
      Name: 'Veg. Noodles',
      Type: 'Starters',
      Price: 185,
    },
    {
      Id: 4,
      Name: 'Fried Rice',
      Type: 'Starters',
      Price: 225,
    },
    {
      Id: 5,
      Name: 'Veg Roll',
      Type: 'Starters',
      Price: 85,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
