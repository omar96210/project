import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SettingComponent } from './setting/setting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Service } from './services/service';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,

  ],
  providers: [Service,ToastrModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
