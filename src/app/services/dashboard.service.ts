import { Injectable, Inject } from '@angular/core';
import { SERVICE_CONSTANTS, ServiceConstantsConfig } from '../app.constants';
import { HttpClient } from '../models/http.client';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class DashboardService {

  constructor(private _http:HttpClient,@Inject(SERVICE_CONSTANTS) public _ServiceConstants?: ServiceConstantsConfig) { }

  public getDetails(){
   const url = this._ServiceConstants.API['GetDetails'];
   return this._http.get(url+'.json');
  }
}
