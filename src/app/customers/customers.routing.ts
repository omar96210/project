import { Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

export const CustomersRoutes: Routes = [{
  path: '',
  component: CustomersComponent,
  data: {
    heading: 'Customers'
  }
}];
