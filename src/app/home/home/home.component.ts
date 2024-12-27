import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //Array for images
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

}
