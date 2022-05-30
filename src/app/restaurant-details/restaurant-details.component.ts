import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../Services/restaurants.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantItem: any ;
  stars=[1,2,3,4,5];
  products:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantsService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['restaurant_id'];
    // console.log(id);
    this.restaurantService.getRestaurantDetails(id).subscribe((rest: any) => {
      this.restaurantItem = rest.data.restaurant;
      this.products=rest.data.menu
      console.log(this.products);
    });
  }

}
