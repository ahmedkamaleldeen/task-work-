import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
// import {RequestOptions} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  menu=new BehaviorSubject([]);
  constructor(private httpRequest: HttpClient) {}
  getBranches() {
    // let options = new RequestOptions({ headers: headers });

    return this.httpRequest.get(
      'http://backend.eizymenu.com/api/home/branch-types',
      {
        headers: {
          'Accept-language': 'ar',
        },
      }
    );
  }
  getRestaurants(id: any) {
    return this.httpRequest.get(
      `http://backend.eizymenu.com/api/home/restaurants`,
      {
        params: new HttpParams().set('branch_type_id', id),
        headers: {
          'Accept-language': 'ar',
        },
      }
    );
  }
  getRestaurantDetails(id: any) {
    return this.httpRequest.get(
      `https://backend.eizymenu.com/api/restaurant/${id}`,
      { headers: { 'Accept-language': 'ar' } }
    );
  }
  getMenu (){
    return this.menu;
  }
  setMenu(newMenu:any){
    this.menu.next(newMenu)
  }
}
