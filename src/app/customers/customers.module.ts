
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersRoutes } from './customers.routing';
// import { ToastrModule } from 'ng6-toastr-notifications';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(CustomersRoutes),NgbPaginationModule, NgbAlertModule],
  declarations: [CustomersComponent],
  exports: [CustomersComponent],
  bootstrap: [CustomersComponent],

})

export class CustomersModule {}
