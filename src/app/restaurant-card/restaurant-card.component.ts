import { Restaurant } from './../interfaces/restaurant';
import { Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
@Input() restaurant:Restaurant={
  "id": 1,
            "restaurant_id": 1,
            "branch_type_id": 1,
            "branch_type_name": "",
            "theme_code": "",
            "sub_theme_code": "Restaurantcafe_pizza",
            "name": "",
            "description": "",
            "logo": "",
            "country": {
                "id": 1,
                "country_id": 1,
                "name": ""
            },
            "governorate": {
                "id": 4,
                "governorate_id": 4,
                "name": ""
            },
            "region": {
                "id": 34,
                "region_id": 34,
                "name": ""
            },
            "address": "",
            "is_fav": false,
            "rate": 0,
            "rate_count": 0,
            "open": false,
            "link_google_play": "",
            "link_apple_store": "",
            "qr_image": "",
            "lat": "-81.785206",
            "lng": "144.218393"
};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToRestaurantDetails(){
    //  const restaurant_id =this.restaurantsList.find((restaurant:any)=>id===restaurant.data.id);
      this.router.navigate([`/restaurant-details/${this.restaurant.restaurant_id}`])

    }
}
