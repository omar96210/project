import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';

export const ProductdRoutes: Routes = [{
  path: '',
  component: ProductComponent,
  data: {
    heading: 'Product'
  }
}];
