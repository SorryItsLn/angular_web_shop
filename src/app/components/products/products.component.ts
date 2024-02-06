import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProducts } from '../../models/product';
import { Subscription } from 'rxjs';
import { PorductsServiceService } from '../../service/porducts-service.service';
import { log } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: IProducts[];
  productSubscription: Subscription;
  canEdit: boolean = true;

  constructor(
    private ProductService: PorductsServiceService,
    public dialog: MatDialog,
    private productService: PorductsServiceService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
    dialogRef.afterClosed().subscribe((data) => this.postData(data));
  }

  postData(data: IProducts) {
    console.log(data, 'data create product');

    this.productService
      .createProduct(data)
      .subscribe((data) => this.products.push(data));
  }

  ngOnInit(): void {
    this.productSubscription = this.ProductService.getProducts().subscribe(
      (res) => (this.products = res)
    );
    console.log(this.products);
  }
  ngOnDestroy(): void {
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }
}
