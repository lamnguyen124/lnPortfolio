import {Component, Input, OnInit} from '@angular/core';
import {NavService} from './services/nav-service.service';
import {Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {PageScrollService} from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedTab: any;
  active = 1;
  title = 'Lam\'s Portfolio';
  aboutSelected = false;

  constructor(
    private pageScrollServ: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    public navService: NavService,
  ) {
  }

  ngOnInit(): void {
    console.log(' body selection: ', this.navService.bodyToggleState$);
    console.log(' about selection: ', this.navService.aboutToggleState$);
  }

  onScroll(event: HTMLElement, i: number) {
    this.pageScrollServ.scroll({
      scrollTarget: event,
      document: this.document
    });

    this.active = i;
  }

  onTabSelected(tab: any) {
    this.selectedTab = tab;
  }
}
