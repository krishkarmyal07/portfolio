import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(){
    setTimeout(function() {
      document.getElementById('sidebar')?.classList.add('mini-sidebar');
    }, 3000);
  }
}
