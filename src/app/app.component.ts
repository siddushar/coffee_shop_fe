import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router"
import { select, Store } from "@ngrx/store"
import { delay, filter, map, switchMap, take } from "rxjs/operators"

import { MatDialog } from "@angular/material/dialog"

import { ShopCartComponent } from './shop-cart/shop-cart.component'
import {
  selectCart
} from "./store/selectors"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cartQuantity: any ;

  totalCartQuantity$ = this.store
    .select(selectCart)
    .pipe(map(cart => {
      console.log("cartttt", cart)
      this.cartQuantity = Object.values(cart).reduce((acc, d: any) => acc + d.quantity, 0)
      console.log("ppppp", this.cartQuantity)
      this.cartQuantity }))

  
  title = 'Coffee Shop';

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private store: Store<any>,
     ) {}

  openCartDialog() {
    this.dialog.open(ShopCartComponent, {
        minWidth:  "30vw",
      })
  }


  ngOnInit() {
  }

}
