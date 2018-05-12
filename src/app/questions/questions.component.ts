import { Component, OnInit } from '@angular/core';
import {ContentServiceService} from "../content-service.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public contentService: ContentServiceService) { }

  ngOnInit() {
    this.contentService.loadContent();
  }

}
