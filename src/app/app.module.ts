import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchesListComponent } from './branches-list/branches-list.component';
import { BranchCardComponent } from './branch-card/branch-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CoinPipe } from './coin.pipe';
@NgModule({
  declarations: [
    AppComponent,
    BranchesListComponent,
    BranchCardComponent,
    RestaurantsListComponent,
    RestaurantDetailsComponent,
    RestaurantCardComponent,
    FooterComponent,
    ProductDetailsComponent,
    CoinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
