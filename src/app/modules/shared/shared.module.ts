import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Translate for all child modules
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FilterPipe} from '../../pipes/common.pipe';
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
     loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
    })
],
exports: [
TranslateModule,
FormsModule,
ReactiveFormsModule,
FilterPipe
],
declarations: [
 FilterPipe
 ],
providers:[]
})
export class SharedModule { }
