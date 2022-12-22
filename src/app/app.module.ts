import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatTabsModule } from "@angular/material/tabs"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatBadgeModule } from "@angular/material/badge"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table'  
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";



import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { NgLetModule } from "@ngrx-utils/store"

import { AppComponent } from './app.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { HomeComponent } from './home/home.component';
import { FoodAddedComponent } from './food-added/food-added.component';
import { AppStoreModule } from "./store/app-store.module";
import { OrderComponent } from './order/order.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component'


const MATERIAL_MODULES = [
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatBadgeModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
]

@NgModule({
  declarations: [
    AppComponent,
    ShopCartComponent,
    HomeComponent,
    FoodAddedComponent,
    OrderComponent,
    OrderPlacedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppStoreModule,
    NgLetModule,
    FormsModule,
    ReactiveFormsModule,

    ...MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
