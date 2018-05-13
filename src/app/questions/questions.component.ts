import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: [any];

  constructor(public contentService: ContentService) { }

  ngOnInit() {
    this.contentService.data.subscribe(result => {
      this.questions = result.questions;
    }, err => {
      console.log(err);
    });
  }

  submit() {
    this.contentService.processAnswers();
  }

}
