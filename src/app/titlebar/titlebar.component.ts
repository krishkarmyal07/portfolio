import { Component } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent {

  list = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"]

  toggleMenu(){
    if (document.getElementById('sidebar')?.classList.contains('mini-sidebar')) {
      document.getElementById('sidebar')?.classList.remove('mini-sidebar');
      document.querySelector('body')?.classList.remove('sidebar-open')
      if(window.innerWidth <= 768){
        document.getElementById('sidebar-overlay')?.classList.add('opened')
        document.body.style.overflow = 'hidden'
      }
    }
    else {
      document.getElementById('sidebar')?.classList.add('mini-sidebar');
      document.querySelector('body')?.classList.add('sidebar-open')
      document.getElementById('sidebar-overlay')?.classList.remove('opened')
      document.body.style.overflow = 'auto'
    }
  }
}
