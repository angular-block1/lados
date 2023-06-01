import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GalleryModule } from 'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavComponent } from './pages/product-detail/component/nav/nav.component';
import { CarouselComponent } from './pages/product-detail/component/carousel/carousel.component';
import { DetailComponent } from './pages/product-detail/component/detail/detail.component';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    ProductDetailComponent,
    CartComponent,
    ListProductComponent,
    HomePageComponent,
    NavComponent,
    CarouselComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    FontAwesomeModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
