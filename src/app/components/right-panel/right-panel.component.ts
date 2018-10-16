import { Component, OnInit, OnChanges, SimpleChange, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
  @Input('currentSelectedUser') _currentSelectedUser;
  public favoriteArray=[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:{[prop:string]:SimpleChange}){
  	if(changes._currentSelectedUser && changes._currentSelectedUser.currentValue!=undefined){
  		this.setUser(changes._currentSelectedUser.currentValue);
  	}
  }

  setUser(response){
    this._currentSelectedUser = response;
    this.favoriteArray=[];
    for(let i=1;i<=5;i++){
      if(i<= this._currentSelectedUser.rating)
      	this.favoriteArray.push('favorite');
      else
      	this.favoriteArray.push('favorite_border');
    }
  }

}
