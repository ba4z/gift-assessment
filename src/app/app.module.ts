import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {QuestionsComponent} from './questions/questions.component';
import {ResultComponent} from './result/result.component';
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: ':locale', component: AppComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ResultComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
