import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Translate } from './translate/app.translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Translate {
}
