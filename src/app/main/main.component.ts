import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  url: string = ''
  constructor(public router: Router){
 
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd){
        this.url = event.url
      }
    })
  }
}
