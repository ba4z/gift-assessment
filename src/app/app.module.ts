import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatIconModule,
  MatListModule, MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {QuestionsComponent} from './questions/questions.component';
import {ResultComponent} from './result/result.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  {path: 'spanish.html', redirectTo: "/es", pathMatch: 'full'},
  {path: 'portuguese.html', redirectTo: "/pt", pathMatch: 'full'},
  {path: ':locale', component: HomeComponent},
  {path: '**', redirectTo: '/en-US', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ResultComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatRadioModule, MatListModule, MatCardModule, MatProgressSpinnerModule, MatProgressBarModule, MatToolbarModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
