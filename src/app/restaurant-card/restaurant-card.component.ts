import { Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
@Input() restaurant:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToRestaurantDetails(){
    //  const restaurant_id =this.restaurantsList.find((restaurant:any)=>id===restaurant.data.id);
      this.router.navigate([`/restaurant-details/${this.restaurant.restaurant_id}`])

    }
}
