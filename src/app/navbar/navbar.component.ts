import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavService} from '../services/nav-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() selectedTab = new EventEmitter<any>();

  constructor(public navService: NavService) {
  }

  ngOnInit(): void {
  }

  toggleButton(selection: string) {
    this.navService.emitData(selection);
  }

  setSelectedTab(tab: any) {
    this.selectedTab.emit(tab);
  }

}
