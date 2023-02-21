import {Component, OnInit} from '@angular/core';
import {NavService} from '../services/nav-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public navService: NavService) {
  }

  ngOnInit(): void {
  }

  toggleButton() {
    this.navService.emitData();
  }

}
