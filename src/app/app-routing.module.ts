import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
<<<<<<< Updated upstream
import { LoginComponent } from './pages/login/login.component';
=======
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
>>>>>>> Stashed changes

const routes: Routes = [
  {
    path: "", component: LayoutClientComponent, children: [
      { path: "", component: HomePageComponent },
      { path: "product", component: ListProductComponent },
      { path: "product/:id", component: ProductDetailComponent },
      { path: "cart", component: CartComponent },
<<<<<<< Updated upstream
      { path: "login", component: LoginComponent },
=======
      { path: "signup", component: SignUpPageComponent },
>>>>>>> Stashed changes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
