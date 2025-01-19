import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  imageList: string[] = [
    'assets/gallery/mandaliImages/img1.JPG',
    'assets/gallery/mandaliImages/img2.JPG',
    'assets/gallery/mandaliImages/img3.JPG',
    'assets/gallery/mandaliImages/img4.JPG',
    'assets/gallery/mandaliImages/img5.JPG',
    'assets/gallery/mandaliImages/img6.JPG',
    'assets/gallery/mandaliImages/img7.JPG',
  ];
  mainImage: string = this.imageList[0]; // Initialize with the first image

  updateMainImage(image: string): void {
    this.mainImage = image;
  }

}
