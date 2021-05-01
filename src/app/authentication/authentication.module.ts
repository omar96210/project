import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutes } from './authentication.routing';
// import { ToastrModule } from 'ng6-toastr-notifications';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(AuthenticationRoutes),NgbPaginationModule, NgbAlertModule],
  declarations: [AuthenticationComponent],
  exports: [AuthenticationComponent],
  bootstrap: [AuthenticationComponent],

})

export class AuthenticationModule {}
