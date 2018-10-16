import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Routing
import { DashboardRoutingModule } from './../../routing/app.routing';
//Accessing constants
import { AppConstantsModule } from './../../app.constants';
//Http Requests
import { HttpModule, Http} from '@angular/http';
import { HttpClient } from './../../models/http.client';
//Modules
import { SharedModule } from '../shared/shared.module';
//Components
import { HomeComponent } from '../../components/home/home.component';
import { TopNavbarComponent } from '../../components/top-navbar/top-navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RightPanelComponent } from '../../components/right-panel/right-panel.component';

//Services
import { DashboardService } from '../../services/dashboard.service';
import { SharedService } from '../../services/shared.service';


@NgModule({
  imports: [
    CommonModule,    
    HttpModule,
    SharedModule,
    DashboardRoutingModule,
    AppConstantsModule
  ],
  declarations: [
   HomeComponent,
    TopNavbarComponent,
    SidebarComponent,
    RightPanelComponent
  ],
  providers:[
  HttpClient,
  DashboardService,
  SharedService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class DashboardModule { }
