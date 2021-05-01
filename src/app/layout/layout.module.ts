import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { layoutRoutes } from './layout.routing';
// import { ToastrModule } from 'ng6-toastr-notifications';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(layoutRoutes)],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  bootstrap: [LayoutComponent],

})

export class layoutModule {}
