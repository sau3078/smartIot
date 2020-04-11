import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, DropdownModule } from 'angular-bootstrap-md'
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { BannerComponent } from './banner/banner.component';
import { TrendingComponent } from './trending/trending.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { DiscoverComponent } from './discover/discover.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { HeaderComponent } from './header/header.component';
import { FooterUpComponent } from './footer/footer-up/footer-up.component';
import { FooterDownComponent } from './footer/footer-down/footer-down.component';


@NgModule({
  declarations: [BannerComponent,
     TrendingComponent, KnowMoreComponent,
      DiscoverComponent, HeaderComponent, 
      FooterUpComponent, FooterDownComponent],
  imports: [
    BootstrapModule,
    CommonModule,
    SlickCarouselModule,
    NavbarModule,
    DropdownModule,
    WavesModule,

    MDBBootstrapModule.forRoot()

  ],
  exports:[BannerComponent,
     TrendingComponent,
      BootstrapModule,
      KnowMoreComponent,
      MDBBootstrapModule,
      NavbarModule,
      DropdownModule,
      WavesModule,

      HeaderComponent, DiscoverComponent,
      FooterUpComponent,
      FooterDownComponent,
      ]
})
export class MainModule { }
