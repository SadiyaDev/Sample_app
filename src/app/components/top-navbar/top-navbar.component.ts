import { Component, OnInit, OnChanges, SimpleChange, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit, OnChanges {
  @Input('currentUser') _currentUser;
  @Output('filterString') filterString = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:{[prop:string]:SimpleChange}){
  	if(changes._currentUser && changes._currentUser.currentValue!=undefined){
  		this.setUser(changes._currentUser.currentValue);
  	}
  }

  setUser(response){
    this._currentUser = response;
  }

  filter(value){
    this.filterString.emit(value);
  }

}
