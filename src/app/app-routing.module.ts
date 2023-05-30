import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {path:"", component:LayoutClientComponent,children:[
    {path:"product", component:ListProductComponent},
    {path:"product/:id", component:ProductDetailComponent},
    {path:"cart", component:CartComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
