import { Component, OnInit, TrackByFunction } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map, take, switchMap, of, filter } from 'rxjs';
import { OrderService } from '../services/order.service';
import { setDishQuantity, clearCart } from '../store/actions';
import { AppState, CartItem } from '../store/reducers';
import { selectCart, selectIsLoggedIn } from '../store/selectors';
import { OrderPlacedComponent } from '../order-placed/order-placed.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

  couponCode = "";
  couponApplied: string ="";
  titleError: string | undefined;
  columns = ["img", "items", "quantity", "price", "btn"]

  formGroup = this.createFormGroup()

  validCoupon: Boolean = false;
  cartItems$ = this.store
    .select(selectCart)
    .pipe(map(cart => (cart ? Object.values(cart) : [])))
  isUserLoggedIn$ = this.store.select(selectIsLoggedIn)

  constructor(
    private dialogRef: MatDialogRef<ShopCartComponent>,
    private store: Store<AppState>,
    private orderService: OrderService,
    private dialog: MatDialog,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {}

  isCartEmpty(items: any) {
    return !items || items.length === 0
  }

  setDishQuantity(item: any, quantity: number) {
    this.store.dispatch(setDishQuantity({ id: item.dish.id, quantity }))
  }

  private createFormGroup(): FormGroup {
    let couponCode = null
    let price = null
    // let category_id = this.data.categories[0].id

    // if (this.items.mode === "edit") {
    //   ;({ title, price, category_id } = this.data.dish)
    // }

    return this.fb.group({
      couponCode: ['', [Validators.required]]
      // category_id,
    })
  }

  checkout(items: any[]) {
    if (this.isCartEmpty(items)) return

    this.orderService.create(
      items.map(({ dish, quantity }) => ({ id: dish.id, quantity })),
    ).subscribe(
      (order) => {
        this.dialogRef.close()
        // this.dialog.open(OrderPlacedComponent, { data: order })
        this.store.dispatch(clearCart())
        alert("Order placed successfully");
      },
      (error) => {
        alert("An error occured while placing an order, Please try again.");
      }
    );

    // this.isUserLoggedIn$
    //   .pipe(
    //     take(1),
    //     filter(Boolean),
    //     switchMap(() =>
    //       this.orderService.create(
    //         items.map(({ dish, quantity }) => ({ id: dish.id, quantity })),
    //       ),
    //     ),
    //   )
    //   .subscribe(order => {
    //     this.dialogRef.close()
    //     this.dialog.open(OrderComponent, { data: order })
    //     this.store.dispatch(clearCart())
    //   })
  }

  getTotal(items: any[]): number {
    return items.reduce((acc, { dish, quantity }) => acc + dish.price * quantity, 0)
  }

  trackBy: TrackByFunction<any> = (_, item) => item.dish.id



  applyCoupon(): void {

    console.log("pppp", this.formGroup);
  }
}
