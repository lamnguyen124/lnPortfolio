import {Component, OnInit} from '@angular/core';
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
  }

  onScroll(event: HTMLElement, i: number) {
    this.pageScrollServ.scroll({
      scrollTarget: event,
      document: this.document
    });

    this.active = i;
  }
}
