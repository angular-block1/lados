import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutClientComponent } from "./layouts/layout-client/layout-client.component";
import { ListProductComponent } from "./pages/list-product/list-product.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
import { CartComponent } from "./pages/cart/cart.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";
import { CheckoutPageComponent } from "./pages/checkout-page/checkout-page.component";
import { LayoutAdminComponent } from "./layouts/layout-admin/layout-admin.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProductManagerComponent } from "./pages/product-manager/product-manager.component";
import { CategoryManagerComponent } from "./pages/category-manager/category-manager.component";
import { OrderManagerComponent } from "./pages/order-manager/order-manager.component";
import { ProductAddFormComponent } from "./pages/product-manager/product-add-form/product-add-form.component";
import { ProductUpdateFormComponent } from "./pages/product-manager/product-update-form/product-update-form.component";
import { OrderdetailComponent } from "./pages/orderdetail/orderdetail.component";
import { OrderListsPageComponent } from "./pages/order-lists-page/order-lists-page.component";
import { UserOrderDetailPageComponent } from "./pages/user-order-detail-page/user-order-detail-page.component";

import { ThanksPageComponent } from "./pages/thanks-page/thanks-page.component";
import { authGuard } from "./auth.guard";



const routes: Routes = [
	{
		path: "",
		component: LayoutClientComponent,
		children: [
			{ path: "", component: HomePageComponent },
			{ path: "products", component: ListProductComponent },
			{ path: "product/:slug", component: ProductDetailComponent },
			{ path: "cart", component: CartComponent },
			{ path: "orders", component: OrderListsPageComponent },
			{ path: "orders/:id", component: UserOrderDetailPageComponent },
			{ path: "login", component: LoginComponent },
			{ path: "signup", component: SignUpPageComponent },
		],
	},
	{
		path: "checkout",
		component: CheckoutPageComponent,
	},
	{
		path: "thanks",
		component: ThanksPageComponent,
	},
	{
		path: "admin",
		component: LayoutAdminComponent,
		canActivate: [authGuard],
		children: [
			{
				path: "",
				component: DashboardComponent,
			},
			{
				path: "products",
				component: ProductManagerComponent,
			},
			{
				path: "products/add",
				component: ProductAddFormComponent,
			},
			{
				path: "products/:id/update",
				component: ProductUpdateFormComponent,
			},
			{
				path: "categories",
				component: CategoryManagerComponent,
			},
			{
				path: "orders",
				component: OrderManagerComponent,
			},
			{
				path: "orders/:id",
				component: OrderdetailComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
