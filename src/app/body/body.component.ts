import {Component, Inject, OnInit} from '@angular/core';
import {PageScrollService} from "ngx-page-scroll-core";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  active = 1;
  title = 'Lam\'s Portfolio';

  constructor(
    // private pageScrollServ: PageScrollService,
    // @Inject(DOCUMENT) private document: any
  )
  {}

  ngOnInit(): void {
  }

  // onScroll(event: HTMLElement, i: number) {
  //   this.pageScrollServ.scroll({
  //     scrollTarget: event,
  //     document: this.document
  //   });
  //
  //   this.active = i;
  // }
}
