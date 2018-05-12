import {Component} from '@angular/core';
import {ContentService} from "./content.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private contentService: ContentService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params.locale);
      this.contentService.loadContent(params.locale);
    });

  }

}
