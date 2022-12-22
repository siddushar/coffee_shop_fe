import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-food-added',
  templateUrl: './food-added.component.html',
  styleUrls: ['./food-added.component.scss']
})

export class FoodAddedComponent {

  constructor(
    public dialogRef: MatDialogRef<FoodAddedComponent>,
    @Inject(MAT_DIALOG_DATA) public dish: any,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
