import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../../shared/product.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../../../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  isFromStartPage = false;
  isAdminLogin = false;
  userSub = new Subscription();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAdminLogin = !!user && user.name === 'ccnuxuji';
    });

    this.route.params.subscribe((params: Params) => {
      if (!params.topicId) {
        this.isFromStartPage = true;
      }
    });
  }

  onEdit() {
    this.router.navigate([this.product.id], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
