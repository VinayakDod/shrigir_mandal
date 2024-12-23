import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashBoardComponent } from './dashboard/dash-board/dash-board.component';
import { Howl } from 'howler';
import { BreadCrumbComponent } from './breadcrumb/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashBoardComponent,BreadCrumbComponent],
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
