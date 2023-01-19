import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartPageComponent,
    CartItemComponent,
    CartSummaryComponent,
    PlaceOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    SharedModule
  ],
  bootstrap:[CartPageComponent]
})
export class CartModule { }
