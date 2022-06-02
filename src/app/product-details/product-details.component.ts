import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from './../Services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  menu: any;
  productDetails: any;
  constructor(
    private restaurantService: RestaurantsService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantService.getMenu().subscribe((menu: any) => {
      this.menu = menu;
      // this.productDetails = menu.products;
      console.log(this.productDetails)
    });
    console.log(this.menu);
    const name = this.activateRoute.snapshot.params['name'];
    console.log(name);
    for (let menuItemName of this.menu) {
      if (name == menuItemName.name) {
        // for (const productDetails of this.menu.products) {

        // }
        this.productDetails = menuItemName.products;
        // console.log(this.productDetails);
      }
    }
    console.log(this.productDetails)
  }

}
