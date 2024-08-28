import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tabs } from './tabInterface';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  public tabsSource = new BehaviorSubject<Tabs[]>([
   //loads welcome by defalut
    {
      name: 'welcome',
      id: 'welcome'
    },
  ])

  tabs$ = this.tabsSource.asObservable();

  // common service to get tabs
  getTabs(): Tabs[]{
    return this.tabsSource.value
  }


  // adds new tabs in obs
  addTab(val: Tabs): void {
    if(this.tabsSource.value.some( element => element.name === val.name)){
    return;
    }
    else{
    const updatedTabs = [...this.tabsSource.value, val];
    this.tabsSource.next(updatedTabs);
    }
  }

  // removes element from tabs array
  removeTab(val: string): void {
    const updatedTabs = this.tabsSource.value.filter((_, ) => _.name !== val);
    this.tabsSource.next(updatedTabs);
  }
}





// [
//   {
//     name: 'Home.css',
//     active: false,
//     display: false
//   },
//   {
//     name: 'about.css',
//     active: false,
//     display: false
//   },
//   {
//     name: 'project.css',
//     active: false,
//     display: false
//   },
//   {
//     name: 'profile.css',
//     active: false,
//     display: false
//   },
// ]