import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent} from './app.component';
import { ProductService } from 'app/productService';
import { NewlinePipe } from 'app/newPipeLine';
import { AppRoutingModule } from 'app/app-routing.module';
import { ProductComponent } from 'app/product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NewlinePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
