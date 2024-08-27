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
    }
    else {
      document.getElementById('sidebar')?.classList.add('mini-sidebar');
      document.querySelector('body')?.classList.add('sidebar-open')
    }
  }
}
