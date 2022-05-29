import { RestaurantsService } from './../Services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.css'],
})
export class BranchesListComponent implements OnInit {
  branches:any;
  constructor(private restaurantService: RestaurantsService) {}
  ngOnInit(): void {
    this.restaurantService.getBranches().subscribe(
      (branch:any) => {
        this.branches = branch.data;
        console.log(branch);
      },
      // (error) => {
      //   console.log(error);
      // }
    );
  }
}
