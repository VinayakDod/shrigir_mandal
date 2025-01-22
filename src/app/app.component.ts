import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Howl } from 'howler';
//import { SlickCarouselModule } from 'ngx-slick-carousel';
import $ from 'jquery';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'shrigir_mandal';

  audio!: HTMLAudioElement;
  constructor(){
    this.playAudio();
  }
  ngOnInit(): void {
 this.playAudio();
  }


  playAudio() {
    const sound = new Howl({
      src: ['assets/shiva_music.mp3'],
      volume: 0.02,
      loop:true,
    });
    sound.play();
  }


  slideItems = [
    { image: 'assets/gallery/image1.png', title: 'Slide 1' },
    { image: 'assets/gallery/image2.png', title: 'Slide 2' },
    { image: 'assets/gallery/image3.png', title: 'Slide 3' },
  ];






























  slides = [
    {img: "assets/gallery/CoverPhoto/image1.jpg"},
    {img: "assets/gallery/CoverPhoto/image2.jpg"},
    {img: "assets/gallery/CoverPhoto/image1.jpg"},
    {img: "assets/gallery/CoverPhoto/image2.jpg"}
  ];

  slideConfig = {
    "slidesToShow": 1,   // Only show one image at a time
    "slidesToScroll": 1, // Scroll one slide at a time
    "autoplay": true,    // Enable automatic sliding
    "autoplaySpeed": 1000,  // Set autoplay speed (in ms)
    "dots": true,        // Show dots for navigation
    "infinite": true,    // Infinite looping
    "arrows": true       // Show arrows for navigation
  };

  trackByFn(index: number, item: any) {
    return index; // Return unique identifier for each item
  }
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }

}
