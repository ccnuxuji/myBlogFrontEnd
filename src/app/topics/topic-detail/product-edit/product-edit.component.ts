import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {ProductService} from '../product.service';
import {Product} from '../../../shared/product.model';
import {ResponseData} from '../../topic-edit/topic-edit.component';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  productId: number;
  topicId: number;
  editMode = false;
  productForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productId = +params.productId;
      this.topicId = +params.topicId;
      this.editMode = params.productId !== 'new';
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.productService.updateProduct(this.productForm.value)
        .subscribe(res => {
          this.productService.fetchProductsByTopic(this.topicId).subscribe();
          this.onCancel();
        });
    } else {
      this.productService.addProduct(this.productForm.value)
        .subscribe(res => {
          this.productService.fetchProductsByTopic(this.topicId).subscribe();
          this.onCancel();
        });
    }
  }

  onDelete() {
    this.productService.deleteProduct(this.productId).subscribe(res => {
      this.productService.fetchProductsByTopic(this.topicId).subscribe();
      // this.router.navigate(['../../'], {relativeTo: this.route});
      this.onCancel();
    });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


  initForm() {
    let product = new Product();
    product.tid = this.topicId;

    if (this.editMode) {
      this.productService.getProduct(this.productId).subscribe((res: ResponseData) => {
        product = res.data;
        this.productForm = new FormGroup({
          id: new FormControl({value: product.id, disabled: true}),
          name: new FormControl(product.name, Validators.required),
          tid: new FormControl({value: product.tid, disabled: true}, Validators.required),
          ord: new FormControl(product.ord, Validators.required),
          thumbnail: new FormControl(product.thumbnail),
          description: new FormControl(product.description)
        });
      });
    }
    this.productForm = new FormGroup({
      id: new FormControl({value: product.id, disabled: true}),
      name: new FormControl(product.name, Validators.required),
      tid: new FormControl({value: product.tid, disabled: true}, Validators.required),
      ord: new FormControl(product.ord, Validators.required),
      thumbnail: new FormControl(product.thumbnail),
      description: new FormControl(product.description)
    });
  }

  ngOnDestroy(): void {
  }

}
