import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BusketComponent } from './components/busket/busket.component';
import { ProductResolver } from './service/product.resolver';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    resolve: { data: ProductResolver },
  },
  {
    path: 'busket',
    component: BusketComponent,
  },
  { path: '**', redirectTo: '', component: BaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
