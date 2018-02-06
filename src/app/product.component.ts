import { Component, Injectable, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProductService } from 'app/productService';
import { TemplateParser } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class ProductComponent {
  products = [];
  productImage = "";
  contentId = '';
  prodImage = '';


  constructor(private _productService: ProductService){
    this._productService.getProducts()
    .subscribe(
        resProductsData => this.products = resProductsData,
        err => console.log(err), 
        ()=> { 
          console.log(this.products);
          this.contentId = (<any>this.products).attributes.ProductImage.content_id;
          this.prodImage = "https://dev.aws.broadcom.com/" + (<any>this.products).referenced_contents[this.contentId].attributes.ImageFile.vanity_url;
          console.log(this.prodImage);
        }
    );
  }
}