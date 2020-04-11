import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSiemaModule } from 'ngx-siema';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1SharedModule } from '../../projects/dealerPortal/src/app/app.module';
import { App2SharedModule } from '../../projects/vendorPortal/src/app/app.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MainModule } from './main/main.module';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    NgxSiemaModule.forRoot(),
     BrowserModule,
    AppRoutingModule,
    
    // BootstrapModule,
    MainModule,
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
