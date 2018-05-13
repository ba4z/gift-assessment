import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showResults = false;
  constructor(private contentService: ContentService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.contentService.loadContent(params.locale);
    });

    this.contentService.results.subscribe(results => {
      if(results && Object.keys(results).length > 0) {
        this.showResults = true;
      }
    })
  }

}
