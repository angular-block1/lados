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

const routes: Routes = [
	{
		path: "",
		component: LayoutClientComponent,
		children: [
			{ path: "", component: HomePageComponent },
			{ path: "products", component: ListProductComponent },
			{ path: "product/:id", component: ProductDetailComponent },
			{ path: "cart", component: CartComponent },
			{ path: "login", component: LoginComponent },
			{ path: "signup", component: SignUpPageComponent },
		],
	},
	{
		path: "checkout",
		component: CheckoutPageComponent,
	},
	{
		path: "admin",
		component: LayoutAdminComponent,
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
				path: "categories",
				component: CategoryManagerComponent,
			},
			{
				path: "orders",
				component: OrderManagerComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
