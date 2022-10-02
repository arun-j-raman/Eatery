import { Component, OnInit } from '@angular/core';
import { EateryService } from 'src/app/services/eatery.service';
import { ActivatedRoute } from '@angular/router'
import { Iproperty } from '../Iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  FoodItems: any;
  AddOn = 1;

  constructor(private route:ActivatedRoute,private eateryService: EateryService) {}

  ngOnInit(): void {

    if(this.route.snapshot.url.toString())
    {
      this.AddOn = 2;
    }

    this.eateryService.getAllProperties().subscribe(
      (data) => {
        this.FoodItems = data;
        console.log(data);

      },
      (error) => {
        console.log(error);
      }
    );
  }
}
