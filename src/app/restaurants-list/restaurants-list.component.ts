import { Restaurant } from './../interfaces/restaurant';
import { RestaurantsService } from './../Services/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
restaurantsList:Restaurant[]=[];
check:boolean=true;
  constructor(private activatedRoute:ActivatedRoute,private restaurantsService:RestaurantsService,private router:Router) { }

  ngOnInit(): void {
    // const ID=this.activatedRoute.snapshot.params['branch_type_id'];
    const ID=this.activatedRoute.snapshot.queryParamMap.get("branch_type_id");
    console.log(ID)
    this.restaurantsService.getRestaurants(ID).subscribe((restaurant:any)=>{this.restaurantsList=restaurant.data;
      console.log(restaurant.data.length)
      if(restaurant.data.length>0){

        this.check=false;
      }
    });


  }

// goToRestaurantDetails(id:any){
// //  const restaurant_id =this.restaurantsList.find((restaurant:any)=>id===restaurant.data.id);
//   this.router.navigate([`/restaurant-details/${restaurant_id}`])

// }
}
