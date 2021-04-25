import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductdRoutes } from './product.routing';
// import { ToastrModule } from 'ng6-toastr-notifications';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(ProductdRoutes),NgbPaginationModule, NgbAlertModule],
  declarations: [ProductComponent],
  exports: [ProductComponent],
  bootstrap: [ProductComponent],

})

export class ProductModule {}
