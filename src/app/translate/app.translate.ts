import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'base-component',
  template: ``
})
export class Translate{
    
    constructor(private _TranslateService: TranslateService){
        this._TranslateService.addLangs(["en"]);
        this._TranslateService.setDefaultLang('en');
        let browserLang = this._TranslateService.getBrowserLang();
        this._TranslateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
}