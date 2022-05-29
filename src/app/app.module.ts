import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchesListComponent } from './branches-list/branches-list.component';
import { BranchCardComponent } from './branch-card/branch-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BranchesListComponent,
    BranchCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
