import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CarouselModule.forRoot(),

  ],
  exports:[CarouselModule]
})
export class BootstrapModule { }
