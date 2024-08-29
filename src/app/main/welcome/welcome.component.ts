import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(){
    this.attachMouseMoveListener();
  }

  attachMouseMoveListener(): void {
    const body = document.querySelector("body");
    if (body) {
      body.addEventListener("mousemove", this.eyeball.bind(this));
    }
  }

  eyeball(event: MouseEvent): void {
    const eyes = document.querySelectorAll<HTMLElement>(".eye");

    eyes.forEach((eye) => {
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + (eye.clientWidth / 2);
      const eyeCenterY = eyeRect.top + (eye.clientHeight / 2);

      const radian = Math.atan2(event.pageX - eyeCenterX, event.pageY - eyeCenterY);
      const rotation = (radian * (180 / Math.PI) * -1) + 270;

      eye.style.transform = `rotate(${rotation}deg)`;
    });
  }
}
