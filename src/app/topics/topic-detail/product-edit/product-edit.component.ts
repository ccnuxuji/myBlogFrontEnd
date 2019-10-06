import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../../../shared/product.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  productId: number;
  editMode = false;
  productForm: FormGroup;
  subscription = new Subscription();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productId = +params.productId;
      console.log(this.productId);
      this.editMode = params.productId !== 'new';
      console.log(this.editMode);
      this.initForm();
    });
  }


  onSubmit() {
    console.log(this.productForm.value);
    this.productService.updateProduct(this.productForm.value);
    this.onCancel();
  }

  onDelete() {
    this.productService.deleteProduct(this.productId);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


  initForm() {
    let productId = null;
    let productName = '';
    let productTid = null;
    let productOrd = null;
    let productThumbnail = '';
    let productDescription = '';


    if (this.editMode) {
      console.log('test');
      this.productService.fetchProductById(this.productId);
      let product: Product = this.productService.product;
      this.subscription = this.productService.productChanged.subscribe(data => {
        product = data;
        productId = product.id;
        productName = product.name;
        productTid = product.tid;
        productOrd = product.ord;
        productThumbnail = product.thumbnail;
        productDescription = product.description;
        this.productForm = new FormGroup({
          id: new FormControl(productId),
          name: new FormControl(productName, Validators.required),
          tid: new FormControl(productTid, Validators.required),
          ord: new FormControl(productOrd, Validators.required),
          thumbnail: new FormControl(productThumbnail),
          description: new FormControl(productDescription)
        });
      });
      console.log(product);
      productId = product.id;
      productName = product.name;
      productTid = product.tid;
      productOrd = product.ord;
      productThumbnail = product.thumbnail;
      productDescription = product.description;
    }

    this.productForm = new FormGroup({
      id: new FormControl(productId),
      name: new FormControl(productName, Validators.required),
      tid: new FormControl(productTid, Validators.required),
      ord: new FormControl(productOrd, Validators.required),
      thumbnail: new FormControl(productThumbnail),
      description: new FormControl(productDescription)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
