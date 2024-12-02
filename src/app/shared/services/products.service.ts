import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayLoad } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient);

  getAll() {

    return this.httpClient.get<Product[]>('/api/products');

  }

  post(payload: ProductPayLoad){
    return this.httpClient.post('/api/products', payload);
  }

}
