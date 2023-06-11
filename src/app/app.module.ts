import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { ReactiveFormsModule } from "@angular/forms";
import { MyInterceptor } from "./services/interceptor.service";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { LayoutAdminComponent } from "./layouts/layout-admin/layout-admin.component";
import { LayoutClientComponent } from "./layouts/layout-client/layout-client.component";
import { FormsModule } from "@angular/forms";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
import { CartComponent } from "./pages/cart/cart.component";
import { ListProductComponent } from "./pages/list-product/list-product.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginComponent } from "./pages/login/login.component";
import { DetailComponent } from "./pages/product-detail/component/detail/detail.component";
import { NavComponent } from "./pages/product-detail/component/nav/nav.component";
import { CheckoutPageComponent } from "./pages/checkout-page/checkout-page.component";

import { CarouselModule } from "ngx-owl-carousel-o";

import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProductManagerComponent } from "./pages/product-manager/product-manager.component";
import { CategoryManagerComponent } from "./pages/category-manager/category-manager.component";
import { OrderManagerComponent } from "./pages/order-manager/order-manager.component";
import { ProductAddFormComponent } from "./pages/product-manager/product-add-form/product-add-form.component";
import { ProductUpdateFormComponent } from "./pages/product-manager/product-update-form/product-update-form.component";
import { OrderListsPageComponent } from "./pages/order-lists-page/order-lists-page.component";
import { UserOrderDetailPageComponent } from "./pages/user-order-detail-page/user-order-detail-page.component";
import { ThanksPageComponent } from "./pages/thanks-page/thanks-page.component";
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
		LoginComponent,
		DetailComponent,
		NavComponent,
		SignUpPageComponent,
		DashboardComponent,
		ProductManagerComponent,
		CategoryManagerComponent,
		CheckoutPageComponent,
		OrderManagerComponent,
		ProductAddFormComponent,
		ProductUpdateFormComponent,
		OrderListsPageComponent,
		UserOrderDetailPageComponent,
		ThanksPageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		CarouselModule,
		ReactiveFormsModule,
		SweetAlert2Module.forRoot(),
	],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }],
	bootstrap: [AppComponent],
})
export class AppModule {}
