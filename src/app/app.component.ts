import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Howl } from 'howler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
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
    this.playAudio();
  }

  playAudio() {
    const sound = new Howl({
      src: ['assets/shiva_music.mp3'],
      volume: 0.01
    });
    sound.play();
  }
}
