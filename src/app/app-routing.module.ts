
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { ProductComponent } from 'app/product.component';

export const routes: Routes = [
    { path: 'products/:id1', component: ProductComponent },
    { path: 'products/:id1/:id2', component: ProductComponent },
    { path: 'products/:id1/:id2/:id3', component: ProductComponent },
    { path: '**', redirectTo: 'products/', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  
  export class AppRoutingModule {}
