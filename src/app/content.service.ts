import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({providedIn: 'root'})
export class ContentService {

  public data: BehaviorSubject<any>;
  public results: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.data = new BehaviorSubject<any>({});
    this.results = new BehaviorSubject<any>({});
  }

  loadContent(locale = "en-EN") {
    this.getJSON(locale).subscribe(content => {
      this.data.next(content.data);
    }, err => {
      this.data.error(err);
      console.log(err);
    });
  }

  processAnswers() {
    let results = {};
    this.data.getValue().questions.forEach(question => {
      if(question.selection){
        if(!results[question.categoryId]){
          results[question.categoryId] = 0;
        }
        results[question.categoryId] += question.selection;
      }
    });

    this.results.next(results);
  }

  private getJSON(locale): Observable<any> {
    return this.http.get(`./assets/${locale}.json`);
  }
}
