import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryModule} from './category/category.module';
import {CustomersModule} from './customers/customers.module';
import {MainpageModule} from './mainpage/mainpage.module';
import {ProductModule} from './product/product.module';
import {OrdersModule} from './orders/orders.module';

// import {} from './'

const routes: Routes = [

  {
    path: '',
    children: [{
      path: 'category',
      loadChildren: () => CategoryModule
    },{
      path: 'Customers',
      loadChildren: () => CustomersModule
    },{
      path: 'Mainpage',
      loadChildren: () => MainpageModule
    },{
      path: 'Product',
      loadChildren: () => ProductModule
    },{
      path: 'Orders',
      loadChildren: () => OrdersModule
    },
    
    
  
    ]
   }, 
  {
    path: '**',
    redirectTo: 'error/404'
  } 
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}



