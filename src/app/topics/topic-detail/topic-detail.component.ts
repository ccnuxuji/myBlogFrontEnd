import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {Topic} from '../../shared/topic.model';
import {Product} from '../../shared/product.model';
import {ProductService} from './product.service';
import {TopicService} from '../topic.service';
import {AuthService} from '../../auth/auth.service';
import {ResponseData} from '../topic-edit/topic-edit.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit, OnDestroy {
  userSub = new Subscription();
  isAdminLogin = false;

  topic: Topic = new Topic();
  topicId: number;
  products: Product[] = [];
  productNew = new Product(null, null, null,
    '', 'Click To Add New', '');

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService,
              private topicService: TopicService,
              private authService: AuthService) {
  }

   ngOnInit() {
     this.route.params.subscribe(
      (params: Params) => {
        this.topicId = +params.topicId;
        this.products = this.route.snapshot.data.products;
        this.topicService.getTopic(this.topicId)
          .subscribe((res: ResponseData) => {
            this.topic = res.data;
          });
      });

     this.userSub = this.authService.user.subscribe(user => {
       this.isAdminLogin = !!user && user.name === 'ccnuxuji';
     });
   }

  onClick() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  newProduct() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
