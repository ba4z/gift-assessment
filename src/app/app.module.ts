import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule, MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {QuestionsComponent} from './questions/questions.component';
import {ResultComponent} from './result/result.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
  {path: ':locale', component: HomeComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ResultComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatRadioModule, MatListModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
