import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2,  PLATFORM_ID, Inject  } from '@angular/core';
import{SlickCarouselModule } from 'ngx-slick-carousel';
import $ from 'jquery';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
   SlickCarouselModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  

})
export class HomeComponent {
  //Array for images

  // constructor(private el: ElementRef, private renderer: Renderer2,@Inject(PLATFORM_ID) private platformId: any){}
  // slides = [
  //   { image: 'assets/gallery/image1.png', alt: 'banner1' },
  //   { image: 'assets/gallery/image2.png', alt: 'banner2' },
  //   { image: 'assets/gallery/image3.png', alt: 'banner3' },
  //   { image: 'assets/gallery/image4.png', alt: 'banner4' },
  //   { image: 'assets/gallery/image1.png', alt: 'banner5' },
  //   { image: 'assets/gallery/image1.png', alt: 'banner6' }
  // ];
  


  imageList: string[] = [
    'assets/gallery/image1.png',
    'assets/gallery/image2.png',
    'assets/gallery/image3.png',
    'assets/gallery/image4.png',
    'assets/gallery/image5.png',
    'assets/gallery/image6.png',
    'assets/gallery/image7.png',
  ];
  mainImage: string = this.imageList[0]; // Initialize with the first image

  updateMainImage(image: string): void {
    this.mainImage = image;
  }
  DonationClick(){
   
    console.warn("Donation button Clicked");
  }
  AbtUsClick(){
    console.warn("AbtUsClick button Clicked");
  }
}
