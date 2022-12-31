import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductDetailsRoutingModule } from './product-details-routing.module';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ProductDetailsRoutingModule
  ]
})
export class ProductDetailsModule { }
