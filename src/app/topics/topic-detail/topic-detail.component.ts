import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Topic} from '../../shared/topic.model';
import {Product} from '../../shared/product.model';
import {ProductService} from './product.service';
import {Subscription} from 'rxjs';
import {TopicService} from '../topic.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit, OnDestroy {
  subscriptionTopic = new Subscription();
  subscriptionProduct = new Subscription();

  topic: Topic = new Topic(-1, 0, 'wait');
  topicId: number;
  products: Product[] = [];
  productNew = new Product(null, null, null, '', 'Click To Add New', '');

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService,
              private topicService: TopicService) { }

   ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.topicService.fetchTopics();
        this.productService.fetchProducts();
        this.topicId = +params.topicId;
        this.topic = this.topicService.getTopicById(this.topicId);
        this.subscriptionTopic = this.topicService.topicsChanged.subscribe(
          topic => {
            this.topic = this.topicService.getTopicById(this.topicId);
          });
        this.products = this.productService.getProductsByTopic(this.topic);
        this.subscriptionProduct = this.productService.productsChanged.subscribe(
          products => {
            this.products = this.productService.getProductsByTopic(this.topic);
          });
      });
   }

  onClick() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  newProduct() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscriptionTopic.unsubscribe();
    this.subscriptionProduct.unsubscribe();
  }

}
