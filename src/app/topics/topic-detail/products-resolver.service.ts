import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {ProductService} from './product.service';
import {Product} from '../../shared/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<Product[]> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | Promise<Product[]> | Product[] {
    return this.productService.fetchProducts();
  }
}
