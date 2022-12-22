import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store"
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { CategoryService } from '../services/categary_service';
import { FoodService } from '../services/food_service';
import { FoodAddedComponent } from '../food-added/food-added.component'
import { addDishToCart } from "../store/actions"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private _selectedCategoryID: number | undefined
  
  // public shops = [];
  public shopConstant: any = [];
  public userName = '';

  public shops: any = [];

  categories: any = []
  filteredFood: any = []
  dishes: any;
  dish: any;

  constructor(
    private _categoryService: CategoryService,
    private store: Store<any>,
    private _foodService: FoodService,
    private dialog: MatDialog,
    private router: Router) { }



  ngOnInit(): void {
    this._categoryService.getAll().subscribe(
      (categories) => {
        this.categories = categories
      },
      (error) => {
        this.showError(error);
      }
    );


    this._foodService.getAll().subscribe(
      (dishes) => {
        this.dishes = dishes

        if (this._selectedCategoryID) {
          this.filteredFood = this.filterFood(this._selectedCategoryID)
        }

      },
      (error) => {
        this.showError(error);
      }
    );
  }


  filterFood(categoryID: number): any[] {
    return this.dishes.filter((d: any) => d.category_id === categoryID)
  }


  addToCart(dish: any): void {

    this.store.dispatch(addDishToCart({ dish }))
    const dialogRef = this.dialog.open(FoodAddedComponent, {
      data: dish,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  get selectedCategoryID(): number | undefined {
    return this._selectedCategoryID
  }

  set selectedCategoryID(id: number | undefined) {
    this._selectedCategoryID = id

    if (id) {
      this.filteredFood = this.filterFood(id)
    }
  }

  showError = (error: any) => {
    alert(error);
  }

}
