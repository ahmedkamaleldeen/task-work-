import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { BranchesListComponent } from './branches-list/branches-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BranchesListComponent },
  { path: 'restaurants', component: RestaurantsListComponent },
  {path:"restaurant-details/:restaurant_id",component:RestaurantDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
