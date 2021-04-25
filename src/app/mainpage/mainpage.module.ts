import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { MainpageRoutes } from './mainpage.routing';
// import { ToastrModule } from 'ng6-toastr-notifications';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(MainpageRoutes)],
  declarations: [MainpageComponent],
  exports: [MainpageComponent],
  bootstrap: [MainpageComponent],

})

export class MainpageModule {}
