import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { PlaceOrderComponent } from './cart/place-order/place-order.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cart', component: CartPageComponent},
  {path:'order', component: PlaceOrderComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
