import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Howl } from 'howler';
import { SlickCarouselModule } from 'ngx-slick-carousel';
//  import $ from 'jquery';
//import * as $ from 'jquery'; 
declare var $: any; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,SlickCarouselModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'shrigir_mandal';

  audio!: HTMLAudioElement;
  constructor(){
    this.playAudio();
  }
  ngOnInit(): void {


    setTimeout(() => {
      // Initialize Slick carousel after DOM is ready
      $('.sd-template-one').slick({
        dots: true,           // Show navigation dots
        infinite: true,       // Infinite loop
        speed: 500,           // Transition speed
        slidesToShow: 1,      // Number of slides to show
        slidesToScroll: 1,    // Number of slides to scroll at once
        autoplay: true,       // Enable autoplay
        autoplaySpeed: 2000   // Speed of autoplay in milliseconds
      });
    }, 0);



 this.playAudio();
  }

  playAudio() {
    const sound = new Howl({
      src: ['assets/shiva_music.mp3'],
      volume: 0.01
    });
    sound.play();
  }


  slideItems = [
    { image: 'assets/gallery/image1.png', title: 'Slide 1' },
    { image: 'assets/gallery/image2.png', title: 'Slide 2' },
    { image: 'assets/gallery/image3.png', title: 'Slide 3' },
  ];

}
