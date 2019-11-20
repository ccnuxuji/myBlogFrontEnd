import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Product} from '../../shared/product.model';
import {Observable} from 'rxjs';
import {ProductService} from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsBytopicResolverService implements Resolve<Product[]>{

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | Promise<Product[]> | Product[] {
    const id =  state.url.split('/')[2];
    console.log(state.url.split('/'))
    return this.productService.fetchProductsByTopic(+id);
  }
}
