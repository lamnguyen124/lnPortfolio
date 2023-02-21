import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  // options = this._formBuilder.group({
  //   bottom: 0,
  //   fixed: false,
  //   top: 0,
  // });
  //
  // shouldRun = true;

}
