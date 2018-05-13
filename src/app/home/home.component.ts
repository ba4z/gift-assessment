import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showLoading = true;
  public showError = false;
  public showResults = false;
  constructor(private contentService: ContentService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.contentService.loadContent(params.locale);
    });

    this.contentService.data.subscribe(data => {
      this.showLoading = false;
    }, err => {
      this.showError = true;
      this.showLoading = false;
      console.log(err);
    });

    this.contentService.results.subscribe(results => {
      if(results && Object.keys(results).length > 0) {
        this.showResults = true;
      }
    })
  }

}
