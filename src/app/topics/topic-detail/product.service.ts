import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

import {Product} from '../../shared/product.model';
import {environment} from '../../../environments/environment';
import {Topic} from '../../shared/topic.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsChanged = new Subject<Product[]>();
  private products: Product[] = [];

  constructor(private http: HttpClient) { }

  addProduct(product: Product) {
    return this.http.post(environment.API + '/product', product);
  }

  deleteProduct(productId: number) {
    return this.http.delete(environment.API + '/product/' + productId);
  }

  updateProduct(product: Product) {
    return this.http.put(environment.API + '/product', product);
  }

  getProduct(productId: number) {
    return this.http.get(environment.API + '/product/' + productId);
  }

  fetchProductsByTopic(topicId: number) {
    const para = {tid: String(topicId)};
    return this.http.get<Product[]>(
      environment.API + '/products_topic',
      {params: para})
      .pipe(
        tap(products => {
          this.setProducts(products);
        })
      );
  }

  fetchProducts() {
    return this.http.get<Product[]>(environment.API + '/products').
      pipe(
        tap(products => {
          this.setProducts(products);
        })
    );
  }

  getProductsByTopic(topic: Topic) {
    const products: Product[] = [];
    this.products.forEach(value => {
      if (value.topic.id === topic.id) {
        products.push(value);
      }
    });
    return products;
  }

  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProducts() {
    return this.products;
  }

}
