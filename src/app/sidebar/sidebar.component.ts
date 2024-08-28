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
