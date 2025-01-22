import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import $ from 'jquery';
import { RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet, RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',


})
export class HomeComponent {


  imageUrls: string[] = [];

  ngOnInit(): void {
    this.generateImageUrls();
  }

  generateImageUrls(): void {
    const cloudName = 'djya0psog'; // Your Cloudinary cloud name
    const folderName = ''; // Add folder name if applicable
    const version = '1737396705'; // The version number
    const totalImages = 20; // Total number of images (update as per your needs)

    for (let i = 1; i <= totalImages; i++) {
      const imageName = `img${i}_*`; // Adjust the naming pattern if necessary
      const url = `https://res.cloudinary.com/${cloudName}/image/upload/v${version}/${folderName}${imageName}.jpg`;
      this.imageUrls.push(url);
    }
  }



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
  DonationClick() {

    console.warn("Donation button Clicked");
  }
  AbtUsClick() {
    console.warn("AbtUsClick button Clicked");
  }
}
