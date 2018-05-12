import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({providedIn: 'root'})
export class ContentService {

  public data: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.data = new BehaviorSubject<any>({});
  }

  loadContent(locale = "en-EN") {
    this.getJSON(locale).subscribe(content => {
      this.data.next(content.data);
    }, err => {
      this.data.error(err);
      console.log(err);
    });
  }

  private getJSON(locale): Observable<any> {
    return this.http.get(`./assets/${locale}.json`);
  }
}
