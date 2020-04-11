import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions } from 'ngx-siema';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
    {img: "assets/img/slides/slide1.jpg"},
    {img: "assets/img/slides/slide2.jpg"},
    {img: "assets/img/slides/slide1.jpg"},
    {img: "assets/img/slides/slide2.jpg"},
    {img: "assets/img/slides/slide1.jpg"},

  ];
  slideConfig = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,

    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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


  // options: NgxSiemaOptions = {
  //   selector: '.siema',
  //   duration: 200,
  //   easing: "ease-out",
  //   perPage: {
  //     1024: 3,
  //     600: 2,
  //     300: 1.2
  //   },
  //   startIndex: 0,
  //   draggable: true,
  //   threshold: 20,
  //   loop: false,
  //   onInit: () => {
  //     // runs immediately after first initialization
  //   },
  //   onChange: () => {
  //     // runs after slide change
  //   },
  // };

}
