import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactMethods = [
    {
      name: 'Gmail',
      icon: 'assets/icons/gmail.png', // Ensure these icons are in the correct path
      link: 'mailto:your-email@gmail.com',
      color: '#D14836' // Gmail red
    },
    {
      name: 'LinkedIn',
      icon: 'assets/icons/linkedin.png',
      link: 'https://linkedin.com/in/your-linkedin-id',
      color: '#0077B5' // LinkedIn blue
    },
    {
      name: 'GitHub',
      icon: 'assets/icons/github.png',
      link: 'https://github.com/your-github-id',
      color: '#333333' // GitHub dark gray
    },
    {
      name: 'npm',
      icon: 'assets/icons/npm.png',
      link: 'https://npmjs.com/~your-npm-id',
      color: '#CB3837' // npm red
    }
  ];
}

