import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { TabsService } from '../title-tabs/tabs.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  route: string = '';

  folders: any[] = [
    { name: 'portfolio', files: [
      {name:'welcome', title:'welcome.html', icon:this.sanitizer.bypassSecurityTrustHtml('<svg style="margin: 0 10px;" width="20px" height="20px" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_html</title><polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#e44f26"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#f1662a"/><polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style="fill:#ebebeb"/><polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style="fill:#ebebeb"/><polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style="fill:#fff"/><polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style="fill:#fff"/></svg>')},
     {name:'about', title:'about.css', icon:this.sanitizer.bypassSecurityTrustHtml('<svg style="margin: 0 10px;" width="20px" height="20px" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_css</title><polygon points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#1572b6"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#33a9dc"/><polygon points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" style="fill:#fff"/><polygon points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" style="fill:#ebebeb"/><polygon points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" style="fill:#fff"/><polygon points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" style="fill:#ebebeb"/><polygon points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" style="fill:#ebebeb"/></svg>')},
     {name:'experience', title:'experience.js', icon:this.sanitizer.bypassSecurityTrustHtml('<svg style="margin: 0 10px;" width="20px" height="20px" viewBox="0 0 24 32"  xmlns="http://www.w3.org/2000/svg"><title>file_type_js</title><path d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z" style="fill:#f5de19"/></svg>')},
     {name:'contact', title:'contact.ts', icon:this.sanitizer.bypassSecurityTrustHtml('<svg style="margin: 0 10px;" width="20px" height="20px" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_tsconfig</title><path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.1,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761l1.024-.6.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.4-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755a13.986,13.986,0,0,1,.04-1.466c.017-.023,2.832-.034,6.245-.028l6.211.017Z" style="fill:#007acc"/><path d="M27.075,25.107l.363-.361c1.68.055,1.706,0,1.78-.177l.462-1.124.034-.107-.038-.093c-.02-.049-.081-.2-1.13-1.2v-.526c1.211-1.166,1.185-1.226,1.116-1.4l-.46-1.136c-.069-.17-.1-.237-1.763-.191l-.364-.367a8.138,8.138,0,0,0-.057-1.657l-.047-.106-1.2-.525c-.177-.081-.239-.11-1.372,1.124l-.509-.008c-1.167-1.245-1.222-1.223-1.4-1.152l-1.115.452c-.175.071-.236.1-.169,1.79l-.36.359c-1.68-.055-1.7,0-1.778.177L18.606,20l-.036.108.038.094c.02.048.078.194,1.13,1.2v.525c-1.211,1.166-1.184,1.226-1.115,1.4l.459,1.137c.07.174.1.236,1.763.192l.363.377a8.169,8.169,0,0,0,.055,1.654l.047.107,1.208.528c.176.073.236.1,1.366-1.13l.509.006c1.168,1.247,1.228,1.223,1.4,1.154l1.113-.45C27.082,26.827,27.143,26.8,27.075,25.107Zm-4.788-2.632a2,2,0,1,1,2.618,1.14A2.023,2.023,0,0,1,22.287,22.475Z" style="fill:#99b8c4"/></svg>')}, 
     {name:'projects',title:'project.gitkeep', icon:this.sanitizer.bypassSecurityTrustHtml('<svg width="20px" style="margin: 0 10px;" height="20px" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_git</title><path d="M29.472,14.753,17.247,2.528a1.8,1.8,0,0,0-2.55,0L12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314,2.528,14.7a1.8,1.8,0,0,0,0,2.551L14.753,29.472a1.8,1.8,0,0,0,2.55,0L29.472,17.3a1.8,1.8,0,0,0,0-2.551" style="fill:#dd4c35"/><path d="M12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314" style="fill:#fff"/></svg>')}],
      expanded: true },
    // Add more folders as needed
  ];

  onMouseEnter(event: MouseEvent) {
    const sidebar = event.target as HTMLElement;
    if (sidebar.classList.contains('mini-sidebar')) {
      sidebar.classList.add('expand-menu');
      if (sidebar.classList.contains('expand-menu')) {
        document.getElementById('sidebar-right')?.classList.remove('hide-sidebar');
      }
    }
  }

  onMouseLeave(event: MouseEvent) {
    const sidebar = event.target as HTMLElement;
    sidebar.classList.remove('expand-menu');
    console.log(sidebar.classList.contains('mini-sidebar'))
    if (sidebar.classList.contains('mini-sidebar')) {
      document.getElementById('sidebar-right')?.classList.add('hide-sidebar');
    }
  }
  constructor( public router: Router, public service: TabsService, public sanitizer: DomSanitizer) {
        setTimeout(() => {
          this.route = router.url
        }, 0);
        console.log(this.route)
        this.router.events.subscribe((event: Event) => {
          if(event instanceof NavigationEnd){
            this.route = event.url
          }
        })

     }
  

  closeSidebar() {
    if (document.getElementById('sidebar')?.classList.contains('mini-sidebar')) {
      document.getElementById('sidebar')?.classList.remove('mini-sidebar');
      // document.getElementById('sidebar-right')?.classList.remove('hide-sidebar');
      document.querySelector('body')?.classList.remove('sidebar-open')
    }
    else {
      document.getElementById('sidebar')?.classList.add('mini-sidebar');
      document.querySelector('body')?.classList.add('sidebar-open')
      // document.getElementById('sidebar-right')?.classList.add('hide-sidebar');
    }
  }

  changeMenu(url: string, name: string){
    this.addTabs(name, url)

    if(this.route !== url ){
      return
    }
    else if(this.route === url && document.getElementById('sidebar')?.classList.contains('mini-sidebar')){
      document.getElementById('sidebar')?.classList.remove('mini-sidebar');
      document.querySelector('body')?.classList.remove('sidebar-open')
    }
    else{
      document.getElementById('sidebar')?.classList.add('mini-sidebar');
      document.querySelector('body')?.classList.add('sidebar-open')
    }
  
  }

  addTabs(name: string, url: string){
    this.service.addTab({name: name, id: name})
    console.log(this.service.getTabs())
  }


}
