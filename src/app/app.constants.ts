import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';


export let APP_CONSTANTS = new InjectionToken<AppConstantConfig>('app.constant');
export let SERVICE_CONSTANTS = new InjectionToken<ServiceConstantsConfig>('app.service.constant');

// Application Constants
export class AppConstantConfig {
  	rootUrl			          : string;
	translationPath          : string;
	imagesPath 	 	     : string;
}

export const APP_CONSTANTS_CONFIG: AppConstantConfig = {
	rootUrl                     : environment.rootUrl+'',
	translationPath          : environment.rootUrl+'assets/i18n/',
	imagesPath 	 	     : environment.rootUrl+'assets/images/'
};

// Services Constants
export class ServiceConstantsConfig {
    apiUrl : object;
    API    : object;
}
export const SERVICE_CONSTANTS_CONFIG: ServiceConstantsConfig = {
    apiUrl : {
        "get" : '/api/'
    },
    API: {
      "GetDetails":'People'
    }
};

@NgModule({
  providers: [{
    provide: APP_CONSTANTS,
    useValue: APP_CONSTANTS_CONFIG
  },{
    provide: SERVICE_CONSTANTS,
    useValue: SERVICE_CONSTANTS_CONFIG
  }]
})
export class AppConstantsModule { }
