import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BradsComponent } from './components/brads/brads.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SearchPipe } from './pipes/search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { AddHeaderInterceptor } from './add-header.interceptor';
import { WhisListComponent } from './components/whis-list/whis-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    ProductsComponent,
    CategoriesComponent,
    BradsComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    CategorySliderComponent,
    MainSliderComponent,
    ProductsDetailsComponent,
    SearchPipe,
    ShippingAddressComponent,
    AllordersComponent,
    WhisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AddHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
