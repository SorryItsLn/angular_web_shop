import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../models/product';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product: IProducts;
  productSubscripion: Subscription;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.productSubscripion = this.route.data.subscribe((data) => {
      this.product = data['data'];
      console.log(this.product);
    });
  }
}
