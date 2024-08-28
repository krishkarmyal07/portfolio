import { Component } from '@angular/core';
import { TabsService } from './tabs.service';
import { Tabs } from './tabInterface';
import { NavigationEnd, Router, Event } from '@angular/router';
@Component({
  selector: 'app-title-tabs',
  templateUrl: './title-tabs.component.html',
  styleUrls: ['./title-tabs.component.scss']
})
export class TitleTabsComponent {
  
  tabs: Tabs[] = []
  route: string = '';
  constructor(public service: TabsService, public router: Router){
  
    // sets router to current route 

    setTimeout(() => {
      this.route = router.url
    }, 0);
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd){
        this.route = event.url
      }
    })
    this.getTabs()

    // adds new tab if user enters through url

    let url = this.router.url
    let tab = url.split('/')[1]

    if(!this.checkTab(tab)){
       this.service.addTab({
        name:tab,
        id:tab
       })
    }

  }

  // get tabs method 
  
  getTabs(){
   this.service.tabs$.subscribe(tabs => {
    this.tabs = tabs;
  });
  }

  // deletes element from an array 
  delete(val: string){
    this.service.removeTab(val)

    if(this.tabs.length > 0){              // checks array length and routes to previous page 
      history.back()
    }
    else{
      this.router.navigateByUrl('/default')        // regirects user to default if array length is 0
    }
  }



  checkTab(val: string){                                          // returns true if element is present in the array 
   let check = this.tabs.some(ele => ele.name === val)
   return check
  }
}
