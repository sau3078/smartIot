import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {img: "assets/img/Cooler_Desktop_Banner.png",msg:'Optimus Range',txt:'of High Performance Air Coolers.'},
    {img: "assets/img/Fan_Banner.png" ,msg:'Optimus Range',txt:'of High Performance Air Coolers.'},
    {img: "assets/img/Pump.jpg",msg:'Optimus Range',txt:'of High Performance Air Coolers.'},

  ];

  slideConfig = {
    dots: true,
    infinite: false,
    speed: 2000,
    autoplaySpeed: 30,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        },
      },
    ]

  };

}
