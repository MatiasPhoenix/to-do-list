import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mouseHover1: boolean = false;
  mouseHover2: boolean = false;

  hover(number:number){
    if(number === 1)
      this.mouseHover1 = !this.mouseHover1
    else
      this.mouseHover2 = !this.mouseHover2
  }
}
