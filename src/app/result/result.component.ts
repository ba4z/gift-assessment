import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public results;
  public categories;
  public localized;
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.results = this.contentService.results.getValue();
    this.categories = this.contentService.data.getValue().categories;
    this.localized = this.contentService.data.getValue().localized;
    setTimeout(() => {
      document.getElementById("results").scrollIntoView();
    }, 50);

  }

}
