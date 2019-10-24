import {Component, OnInit} from '@angular/core';

import {TopicService} from '../topic.service';
import {Topic} from '../../shared/topic.model';
import {Product} from '../../shared/product.model';
import {ProductService} from '../topic-detail/product.service';

@Component({
  selector: 'app-topic-start',
  templateUrl: './topic-start.component.html',
  styleUrls: ['./topic-start.component.css']
})
export class TopicStartComponent implements OnInit {
  topics: Topic[] = [];
  products: Product[] = [];

  constructor(private topicService: TopicService,
              private productService: ProductService) { }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
    this.products = this.productService.getProducts();
  }

  getProductsByTopic(topic: Topic) {
    return this.productService.getProductsByTopic(topic);
  }

}
