import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showResults = false;
  constructor(private contentService: ContentService) { }

  ngOnInit() {


    this.contentService.results.subscribe(results => {
      console.log(results);
      if(results && Object.keys(results).length > 0) {
        this.showResults = true;
      }
    })
  }

}
