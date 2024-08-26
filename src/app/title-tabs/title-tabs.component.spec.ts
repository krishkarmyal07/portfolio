import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTabsComponent } from './title-tabs.component';

describe('TitleTabsComponent', () => {
  let component: TitleTabsComponent;
  let fixture: ComponentFixture<TitleTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleTabsComponent]
    });
    fixture = TestBed.createComponent(TitleTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
