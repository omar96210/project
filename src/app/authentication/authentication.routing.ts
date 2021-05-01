import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: AuthenticationComponent
    }]
  }
];