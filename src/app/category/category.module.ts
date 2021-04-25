import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutes } from './category.routing';
// import { ToastrModule } from 'ng6-toastr-notifications';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(CategoryRoutes),NgbPaginationModule, NgbAlertModule],
  declarations: [CategoryComponent],
  exports: [CategoryComponent],
  bootstrap: [CategoryComponent],

})

export class CategoryModule {}
