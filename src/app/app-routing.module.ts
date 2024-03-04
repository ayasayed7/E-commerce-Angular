import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BradsComponent } from './components/brads/brads.component';
import { CardComponent } from './components/card/card.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WhisListComponent } from './components/whis-list/whis-list.component';
import { SettingModule } from './setting/setting.module';

const routes: Routes = [
  {path: '' , redirectTo: '/register' , pathMatch: 'full'},
  {path: 'home',canActivate:[authGuard], component:HomeComponent , title : 'home'},
  {path: 'brands',canActivate:[authGuard], component:BradsComponent , title : 'Brands'},
  {path: 'cart',canActivate:[authGuard], component:CardComponent , title : 'cart'},
  {path: 'categories',canActivate:[authGuard], component:CategoriesComponent , title : 'categories'},
  {path: 'login', component:LoginComponent , title : 'login'},
  {path: 'allorders' , canActivate:[authGuard], component:AllordersComponent , title : 'allorders'},
  {path: 'products',canActivate:[authGuard], component:ProductsComponent , title : 'products'},
  {path: 'product-details/:id',canActivate:[authGuard], component:ProductsDetailsComponent , title : 'products-details'},
  {path: 'shippingAddress/:id',canActivate:[authGuard], component:ShippingAddressComponent , title : 'shippingAddress'},
  {path: 'setting',
    loadChildren:() => import('./setting/setting.module').then(m => m.SettingModule)},
  {path: 'register', component:RegisterComponent , title : 'register'},
  {path: 'wishlist', component:WhisListComponent , title : 'wish list'},
  {path: '**', component:NotfoundComponent , title : 'notfound'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule,SettingModule]
})
export class AppRoutingModule { }
