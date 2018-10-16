import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public _details;
  public _currentUser;
  public _currentSelectedUser;
  public _setFilter;
  constructor(private _dashboardService:DashboardService, private _sharedService: SharedService) { }

  ngOnInit() {
    this.attachDataListener();
  }

  attachDataListener(){
    this._dashboardService.getDetails().subscribe(res=>{
      this._details = res.People;
      this._currentUser = this._details[0];
      this._currentSelectedUser = this._details[1];
    });
  }

  setSelectedUser(event){
    this._currentSelectedUser=event;
  }

  setFilter(event){
    this._setFilter = event;
  }
}
