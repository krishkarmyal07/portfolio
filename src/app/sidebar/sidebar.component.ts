import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

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
  constructor() {
    // setTimeout(function() {
    //   document.getElementById('sidebar')?.classList.add('mini-sidebar');
    // }, 3000);
  }

  closeSidebar() {
    if (document.getElementById('sidebar')?.classList.contains('mini-sidebar')) {
      document.getElementById('sidebar')?.classList.remove('mini-sidebar');
      document.getElementById('sidebar-right')?.classList.remove('hide-sidebar');
      document.querySelector('body')?.classList.remove('sidebar-open')
    }
    else {
      document.getElementById('sidebar')?.classList.add('mini-sidebar');
      document.querySelector('body')?.classList.add('sidebar-open')
      document.getElementById('sidebar-right')?.classList.add('hide-sidebar');
    }
  }
}
