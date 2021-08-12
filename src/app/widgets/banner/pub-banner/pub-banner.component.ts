import { Component, Input, OnInit } from '@angular/core';
import { PubBanner } from 'src/app/models/pub-banner';

@Component({
  selector: 'app-pub-banner',
  templateUrl: './pub-banner.component.html',
  styleUrls: ['./pub-banner.component.css']
})
export class PubBannerComponent implements OnInit {

  @Input()  pubBanner : PubBanner;

  constructor() { }

  ngOnInit(): void {
  }

}
