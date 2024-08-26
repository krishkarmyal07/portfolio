import { Component } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent {

  list = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"]
}
