import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavService {
  navSelectionUpdated: EventEmitter<any> = new EventEmitter();

  navSelection: any;

  private aboutToggleState = new Subject();
  public aboutToggleState$ = this.aboutToggleState.asObservable();
  private aboutToggleVal = false;

  private bodyToggleState = new Subject();
  public bodyToggleState$ = this.bodyToggleState.asObservable();
  private bodyToggleVal = true;


  private contactsToggleState = new Subject();
  public contactsToggleState$ = this.contactsToggleState.asObservable();
  private contactsToggleVal = false;

  private socialToggleState = new Subject();
  public socialToggleState$ = this.socialToggleState.asObservable();
  private socialToggleVal = false;

  constructor() {
  }

  setNavSelection(selection: string) {
    console.log("selection in service: ", selection);
    this.navSelection = selection;
    this.navSelectionUpdated.emit(this.navSelection);
  }

  getNavSelection() {
    return this.navSelection;
  }

  // emitData() {
  //   this.aboutToggleVal = !this.bodyToggleVal && !this.aboutToggleVal && !this.contactToggleVal;
  //   this.bodyToggleVal = !this.bodyToggleVal && !this.aboutToggleVal && !this.contactToggleVal;
  //   this.contactToggleVal = !this.bodyToggleVal && !this.aboutToggleVal && !this.contactToggleVal;
  //   this.aboutToggleState.next(this.aboutToggleVal);
  //   this.bodyToggleState.next(this.bodyToggleVal);
  //   this.contactToggleState.next(this.contactToggleVal);
  // }

  emitData(selection: string) {
    this.aboutToggleVal = false;
    this.bodyToggleVal = false;
    this.contactsToggleVal = false;

    if (selection == 'about') {
      console.log('1')
      this.aboutToggleVal = true;
    } else if (this.bodyToggleState) {
      console.log('2')
      this.bodyToggleVal = true;
    } else if (this.contactsToggleState) {
      console.log('3')
      this.contactsToggleVal = true;
    } else if (this.socialToggleState) {
      console.log('4');
      this.socialToggleVal = true;
    }

    this.aboutToggleState.next(this.aboutToggleVal);
    this.bodyToggleState.next(this.bodyToggleVal);
    this.contactsToggleState.next(this.contactsToggleVal);
  }


}


