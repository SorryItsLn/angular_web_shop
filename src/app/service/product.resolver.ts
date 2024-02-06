import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, catchError } from 'rxjs';
import { IProducts } from '../models/product';
import { PorductsServiceService } from './porducts-service.service';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<IProducts> {
  constructor(
    private ProductService: PorductsServiceService,
    private router: Router
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<IProducts> {
    return this.ProductService.getOneProduct(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['products']);
        return EMPTY;
      })
    );
  }
}
