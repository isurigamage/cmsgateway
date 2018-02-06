import { Injectable} from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';
import {Params, Router } from "@angular/router";



@Injectable()
export class ProductService {
  
  constructor(private _http: Http , public router: Router) {} 

    private _url= 'json/productDetails.json'
    //private _url = 'api/content/path?path='+ this.router.url.slice(10, 50);

  getProducts () {
    return this._http.get(this._url)
      .map(response => response.json());    
  }
}
