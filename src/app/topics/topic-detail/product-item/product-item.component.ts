import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../shared/product.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() isOntopic: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  onEdit() {
    this.router.navigate([this.product.id], {relativeTo: this.route});
  }

}
