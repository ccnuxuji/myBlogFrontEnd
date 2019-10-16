import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Product} from '../../shared/product.model';
import {Subject} from 'rxjs';
import {Topic} from '../../shared/topic.model';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsChanged = new Subject<Product[]>();
  private products: Product[] = [];
  public product: Product = new Product(null, null, null, '', '', '');
  public productChanged: Subject<Product> = new Subject();

  constructor(private http: HttpClient) { }

  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProducts() {
    return this.products;
  }

  fetchProductsByTopic(topicId: number) {
    const para = {tid: String(topicId)};
    this.http.get<Product[]>(environment.API + '/products_topic', {params: para}).
    subscribe(products => {
      this.setProducts(products);
      console.log(products);
    });
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
      if (value.tid === topic.id) {
        products.push(value);
      }
    });
    return products;
  }

  fetchProductById(productId: number) {
    this.http.get(environment.API + '/product/' + productId).
    subscribe(
      (product: Product) => {
        this.product = product;
        this.productChanged.next(this.product);
      }
    );
  }

  updateProduct(product: Product) {
    this.http.post(environment.API + '/product', product).
    subscribe(response => {
      console.log(response);
    });
  }

  deleteProduct(productId: number) {
    this.http.delete(environment.API + '/productDel/' + productId).
    subscribe(response => {
      console.log(response);
    });
  }

}
