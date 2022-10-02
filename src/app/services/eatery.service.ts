import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Iproperty } from '../property/Iproperty';


@Injectable({
  providedIn: 'root',
})
export class EateryService {
  constructor(private http: HttpClient) {}

  getAllProperties() {
    return this.http.get('data/properties.json');
  }


  // getAllProperties() {
  //   return this.http.get('data/properties.json').pipe(
  //     map(data=>{
  //       const menuItemsListArray: Array<Iproperty> = [];
  //       for(const id in data)
  //       {
  //         if(data.hasOwnProperty(id)){
  //           menuItemsListArray.push(data[id]);
  //         }
  //       }
  //       return menuItemsListArray;
  //     })
  //   );
  // }
}
