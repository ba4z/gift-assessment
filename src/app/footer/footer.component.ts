import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private year;

  constructor() {
    this.year = (new Date()).getFullYear();
  }

  ngOnInit() {
  }

  openUrl(url) {
    window.open(url);
  }
}
