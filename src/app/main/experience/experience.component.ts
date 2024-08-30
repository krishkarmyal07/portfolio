import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      role: 'Tech Support Associate',
      company: 'Concentrix',
      duration: '2 years',
      description: 'Provided technical support to end-users, troubleshooting and resolving hardware and software issues, and ensuring smooth IT operations.'
    },
    {
      role: 'Angular Developer',
      company: 'Queenzend',
      duration: '2 years',
      description: 'Developed and maintained dynamic web applications using Angular. Collaborated with cross-functional teams to deliver scalable and responsive applications.'
    },
    {
      role: 'Product Engineer',
      company: 'MooFwd',
      duration: '1 years',
      description: 'Developed and maintained dynamic web applications using Angular. Collaborated with cross-functional teams to deliver scalable and responsive applications.'
    }
  ];

}
