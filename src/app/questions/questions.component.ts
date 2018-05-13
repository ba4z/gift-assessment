import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: [any];
  localized: any = {};

  constructor(public contentService: ContentService) { }

  ngOnInit() {
    this.contentService.data.subscribe(result => {
      if(result.localized) {
        this.questions = result.questions;
        this.localized = result.localized;
      }
    }, err => {
      console.log(err);
    });
  }

  submit() {
    this.contentService.processAnswers();
  }

}
