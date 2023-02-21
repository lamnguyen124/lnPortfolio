import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavService {
  navSelectionUpdated: EventEmitter<any> = new EventEmitter();

  navSelection: any;

  private toggleState = new Subject();
  public toggleState$ = this.toggleState.asObservable();
  private toggleVal = false;

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

  emitData() {
    this.toggleVal = !this.toggleVal;
    this.toggleState.next(this.toggleVal);
  }

}


