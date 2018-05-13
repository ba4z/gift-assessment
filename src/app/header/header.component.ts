import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public localized: any = {};
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.data.subscribe(result => {
      if(result.localized) {
        this.localized = result.localized;
      }
    })
  }

}
