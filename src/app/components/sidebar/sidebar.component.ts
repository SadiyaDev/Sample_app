import { Component, OnInit, OnChanges, SimpleChange, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@Input('currentUser') _currentUser;
@Input('details') _details;
@Input('setFilter') _setFilter;
@Output('selectedUser') selectedUser = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:{[prop:string]:SimpleChange}){
  	if(changes._currentUser && changes._currentUser.currentValue!=undefined){
  		this.setUser(changes._currentUser.currentValue);
  	}
  	if(changes._details && changes._details.currentValue!=undefined){
  		this.setAllUser(changes._details.currentValue);
  	}
    if(changes._setFilter && changes._setFilter.currentValue!=undefined){
      this.setFilter(changes._setFilter.currentValue);
    }
  }

  setUser(response){
    this._currentUser = response;
  }

  setAllUser(response){
  this._details = response;
  console.log(this._details);
  }

  selectUser(person){
    this.selectedUser.emit(person)
  }

  setFilter(filter){
    this._setFilter=filter;
  }
}
