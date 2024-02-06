import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class PorductsServiceService {
  baseUrl: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<IProducts[]>(`${this.baseUrl}`);
  }
  getOneProduct(id: number) {
    return this.http.get<IProducts>(`${this.baseUrl}/${id}`);
  }
  createProduct(product: IProducts) {
    return this.http.post<IProducts>(`${this.baseUrl}`, product);
  }
}
