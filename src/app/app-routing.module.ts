import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryModule} from './category/category.module';
import {CustomersModule} from './customers/customers.module';
import {MainpageModule} from './mainpage/mainpage.module';
import {ProductModule} from './product/product.module';
import {OrdersModule} from './orders/orders.module';
import {layoutModule} from './layout/layout.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthLayoutComponent } from './auth/auth-layout.component';

// import {} from './'

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => AuthenticationModule
    }
    ]
  },
  
  {
    path: '',
    component: LayoutComponent,
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
    },{
      path: 'Layout',
      loadChildren: () => layoutModule
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



