import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage.component';

export const MainpageRoutes: Routes = [{
  path: '',
  component: MainpageComponent,
  data: {
    heading: 'Dashboard'
  }
}];
