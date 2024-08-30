import { Component } from '@angular/core';


interface Project {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  projects: Project[] = [
    {
      title: 'Payroll',
      description: 'A dynamic Angular application for managing tasks and productivity and generate salary based on attendance.',
      link: 'https://example.com/project-one'
    },
    {
      title: 'DNI',
      description: 'A dynamic Angular application for generating insurance quotes for user based on the user requirement.',
      link: 'https://example.com/project-three'
    },
    {
      title: 'Cricket app',
      description: ' The Application allows user to create and register in different tournaments, automatic and manual match scheduling and maintaining log.',
      link: 'https://example.com/project-four'
    },
    {
      title: 'Portfolio',
      description: 'A responsive portfolio website showcasing my skills and projects.',
      link: 'https://example.com/project-two'
    },
  ];

}
