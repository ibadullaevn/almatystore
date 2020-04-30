import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getPhone() ;
  }
  getPhone() {
    this.productService.getSmartphones()
      .subscribe(productList => this.productList = productList);
  }
  delete(id) {
    this.productService.deleteProduct(id).subscribe();
    alert('Product with id: '+ id+ ' was deleted');
    window.location.reload();
  }
}
